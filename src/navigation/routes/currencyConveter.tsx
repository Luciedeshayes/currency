import React from 'react';
import { connect } from 'react-redux';
import { API } from '../../ribs/appState/module';
import MainLoading from '../../components/mainLoading/mainLoading';
import TableCurrencyConverted from '../../components/tableCurrencyConverted/table';
import CurrencyConverterInput from '../../components/currencyConverterInput';

interface CurrencyConverterI {
    api: API,
}

const CurrencyConverter = React.memo(
    (props: CurrencyConverterI): JSX.Element => {
        const { api } = props;
    
        return (
            <React.Suspense fallback={<MainLoading />}>
                <div className="container">
                    <CurrencyConverterInput/>
                    <TableCurrencyConverted apiInitialized={api}/>
                </div>
            </React.Suspense>
        );
    }
);


const mapStateToProps = (state) => ({ 
    api: state.appState.api
})

export default connect(mapStateToProps, null)(CurrencyConverter);
