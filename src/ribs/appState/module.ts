export const name: string = 'appState';

export const types = {
    SET_APP_STATE: name + '/SET_APP_STATE',
    GET_API: name + '/GET_API',
    GET_HISTORICAL: name + '/GET_HISTORICAL',
    FAILED: name + '/FAILED',
};

interface Quotes {}

export interface API {
    currency: string,
    timestamp: number,
    source: string,
    quotes: Quotes,
}

export interface HistoricalWeeklyCurrencyLastMonthI {
    success: boolean,
    terms: string,
    privacy: string,
    historical: boolean,
    date: string,
    timestamp: number,
    source: string,
    quotes: Quotes
  }


interface AppState {
    started: boolean;
    api: API,
    historicalWeeklyCurrencyLastMonth: Array<HistoricalWeeklyCurrencyLastMonthI>,
    message: string,
}

const initialState: AppState = {
    started: false,
    api: {
        currency: '',
        timestamp: 0,
        source: '',
        quotes: {},
    },
    historicalWeeklyCurrencyLastMonth: [],
    message: '',
};

export default (state = initialState, action: any) => {
    switch (action.type) {
        case types.SET_APP_STATE:
            return {
                ...state,
                started: action.payload.status,
            };
        case types.GET_API:
        return {
            ...state,
            api: action.api,
        };
        case types.GET_HISTORICAL:
        return {
            ...state,
            historicalWeeklyCurrencyLastMonth: action.historical,
        };
        case types.FAILED:
        return {
            ...state,
            error: action.message,
        };
        default:
            return state;
    }
};

export const actions = {
    setAppState: (status: boolean) => ({ type: types.SET_APP_STATE, payload: { status } }),
};

const localState = (state: any): AppState => state[name] || initialState;
export const selectors = {
    isAppLaunched: (state: AppState) => localState(state).started,
};