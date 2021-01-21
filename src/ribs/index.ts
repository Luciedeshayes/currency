import { combineReducers } from 'redux';
import { all, race, call, take, fork } from 'redux-saga/effects';
import { RibsReducersEntries, Ribs, RibsSagas } from './types';
import { types } from './indexModule';
import autoRestart from '../utils/sagas';
// ribs
import appState from './appState';
import currencyConverter from './currencyConverter';

import { connectRouter } from 'connected-react-router';

const ribs: Ribs = {
    appState,
    currencyConverter,
};

const ribsReducers: RibsReducersEntries = Object.keys(ribs)
    .map((key) => ribs[key])
    .reduce(
        (reducersEntries, bone) =>
            bone.reducer
                ? {
                      ...reducersEntries,
                      [bone.name]: bone.reducer,
                  }
                : reducersEntries,
        {},
    );

const ribsSagas: RibsSagas = Object.keys(ribs)
    .map((key) => ribs[key])
    .reduce((sagas, rib) => (rib.saga ? [...sagas, autoRestart(rib.saga, rib.name, 2)] : sagas), []);

const createRootReducer = (history) => {
    const combinedReducer = combineReducers({
        router: connectRouter(history),
        ...ribsReducers,
    });

    const rootReducer = (state: any, action: any) => {
        if (action.type === types.CLEAR_STATE) {
            state = undefined;
        }
        return combinedReducer(state, action);
    };
    return rootReducer;
};

const forkedRibsSagas = ribsSagas.map((saga) => fork(saga));
function* rootSaga() {
    while (true) {
        yield race({
            sagas: call(function* () {
                yield all(forkedRibsSagas);
            }),
            clear: take(types.CLEAR_STATE),
        });
    }
}

export { createRootReducer, rootSaga };
export default ribs;
