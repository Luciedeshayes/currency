import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { actions as appCurrencyConverterActions } from '../../ribs/currencyConverter';
import Strings from '../../resources/strings';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object().shape({
    dollarValue: yup.number().positive(),
});

export interface CurrencyConverterInputI {
    dollarValue: number,
    setCurrencyValue: (textCurrency: string) => any,
}

const CurrencyConverterInput = React.memo(
    (props: CurrencyConverterInputI): JSX.Element => {
        const { register, errors } = useForm({
            mode: 'onChange',
            resolver: yupResolver(schema)
          });

    const { dollarValue, setCurrencyValue } = props

        //Dispatch l'action de sauvegarder la propriété dollarValue dans le state global currencyConverter
        const handleChange = useCallback( (e) => setCurrencyValue(e.target.value.toLowerCase()) ,[setCurrencyValue])

        return(
                <div className="form-group">
                    <label htmlFor="">{Strings.currencyConverterInput.currencyConverter}</label>
                    <input type="number" value={dollarValue} onChange={handleChange} step="0.01" ref={register} name="dollarValue" id="dollarValue" className="form-control"/>
                    <p>{errors.dollarValue?.message}</p>
                </div> 
        )
    }
);

const mapStateToProps = (state) => ({ 
    dollarValue: state.currencyConverter.dollarValue 
})

const mapDispatchToProps = {
    setCurrencyValue: (dollarValue) => appCurrencyConverterActions.setCurrencyValue(dollarValue),
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyConverterInput);