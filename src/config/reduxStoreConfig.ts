import { createStore as createEnhancedStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import AppConfig from './appConfig';
import { createRootReducer, rootSaga } from '../ribs';
import { getHistory } from '../utils/historyUtils';
import { routerMiddleware } from 'connected-react-router';

const isDev: boolean = process.env.NODE_ENV === 'development';

const createReduxStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware];

    const routerMiddle: any = routerMiddleware(getHistory());
    middlewares.push(routerMiddle);

    let composeEnhancer = compose;

    if (isDev) {
        // deactivate eslint rule so that it doesn't complain from 'requires' below
        /* eslint global-require: 0 */
        if (AppConfig.useReduxDevTools) {
            composeEnhancer = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
        }

        if (AppConfig.useReduxLogger) {
            const createLoggerMiddleware = require('./reduxDevLogger').default;
            middlewares.push(createLoggerMiddleware());
        }
    }

    const store = createEnhancedStore(
        createRootReducer(getHistory()),
        composeEnhancer(applyMiddleware(...middlewares)),
    );

    sagaMiddleware.run(rootSaga);
    return store;
};

export default {
    createReduxStore,
};
