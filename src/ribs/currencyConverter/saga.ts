import { takeEvery } from 'redux-saga/effects';
import { types } from './module';

function* setCurrencyValue(action) {
    yield console.log("currencyValue onChange");
 }

export default function* appStateSaga() {
    //écoute l'action takeEvery(types.SET_CURRENCYVALUE, setCurrencyValue) et appel le générator setCurrencyValue
    yield takeEvery(types.SET_CURRENCYVALUE, setCurrencyValue);
}