export const name: string = 'currencyConverter';

export const types = {
    SET_CURRENCYVALUE: name + '/SET_CURRENCYVALUE',
    FAILED_CURRENCYVALUE: name + '/FAILED_CURRENCYVALUE'
};

interface CurrencyConverter {
    dollarValue: number
}

const initialState: CurrencyConverter = {
    dollarValue: 1,
};

export default (state = initialState, action: any) => {
    switch (action.type) {
        case types.SET_CURRENCYVALUE:
            return {
                ...state,
                dollarValue: action.payload.dollarValue,
            };
        case types.FAILED_CURRENCYVALUE:
            return {
                ...state,
                error: action.message,
            }
        default:
            return state;
    }
};

export const actions = {
    setCurrencyValue: (dollarValue: number) => ({ type: types.SET_CURRENCYVALUE, payload: { dollarValue } }),
};
