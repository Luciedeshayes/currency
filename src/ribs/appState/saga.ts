import { takeEvery, put, call } from 'redux-saga/effects';
import { types } from './module';
import moment from 'moment';


function initApi() {
  return fetch(`http://api.currencylayer.com/live?access_key=f26d8c20814257339be8fcb7f7cc3587&source=USD&currencies=AUD,GBP&format=1`, {
      method: 'GET',
  }).then(response => response.json())
    .catch((error) => {throw error})
}

function initHistorical(date) {
   return fetch(`http://api.currencylayer.com/historical?access_key=f26d8c20814257339be8fcb7f7cc3587&date=${date}&source=USD&currencies=AUD,GBP&format=1`, {
       method: 'GET',
   }).then(response => response.json())
     .catch((error) => {throw error})
 }

function* fetchAPI(action) {
   try {
      //Récupére un object de l'api currencyLayer qui contient les valeurs moyennes du sterling et dollar australien par rapport au dollar américain
      const api = yield call(initApi);
      //Récupére des object de l'api currencyLayer qui contient les valeurs hebdomadaire moyennes sur le mois passé du sterling et dollar australien par rapport au dollar américain
      const lastweek = yield call(initHistorical, moment().subtract(7, "days").format('YYYY-MM-DD'));
      const lastTwoWeek = yield call(initHistorical, moment().subtract(14, "days").format('YYYY-MM-DD'));
      const lastThirdWeek = yield call(initHistorical, moment().subtract(21, "days").format('YYYY-MM-DD'));
      const lastFourthWeek = yield call(initHistorical, moment().subtract(28, "days").format('YYYY-MM-DD'));
      const historical = [lastweek,lastTwoWeek,lastThirdWeek,lastFourthWeek];
      //Dispatch l'action enregistrement de l'object api
      yield put({type: types.GET_API, api: api });
      //Dispatch l'action enregistrement de l'object historical
      yield put({type: types.GET_HISTORICAL, historical: historical });
   } catch (e) {
      //Dispatch une erreur si la promise fetch renvoie catch
      yield put({type: types.FAILED, message: e.message});
   }
}

export default function* appStateSaga() {
    //écoute l'action yield takeEvery(types.SET_APP_STATE, fetchAPI) et appel le générator fetchAPI
    yield takeEvery(types.SET_APP_STATE, fetchAPI);
}
