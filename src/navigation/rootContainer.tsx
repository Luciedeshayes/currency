import React, { useEffect } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route as RouteDom, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// Components
import { actions as appStateActions } from '../ribs/appState';
// Pages
// Ressources
import { getHistory } from '../utils/historyUtils';
import MainLoading from '../components/mainLoading/mainLoading';

// Pages*
const Header = React.lazy(() => import('../components/header/header'));
const CurrencyConverter = React.lazy(() => import('./routes/currencyConveter'));
const WeeklyCurrencyAverage = React.lazy(() => import('./routes/weeklyCurrencyAverage'));

const Route = RouteDom;
const history = getHistory();

interface RootContainerProps {
    setAppState: (status: boolean) => any,
}

const RootContainer = (props: RootContainerProps): JSX.Element => {
    const { setAppState } = props;

    useEffect(() => {
        setAppState(true);
    }, [setAppState]);

    return (
        <ConnectedRouter history={history}>
            <React.Suspense fallback={<MainLoading />}>
                <Header/>
                <Switch>
                    <Redirect push exact from="/" to="/currencyConveter" />
                    <Route exact path="/currencyConveter" component={CurrencyConverter} />
                    <Route exact path="/weeklyCurrencyAverage" component={WeeklyCurrencyAverage} />
                </Switch>
            </React.Suspense>
        </ConnectedRouter>
    );
};

const mapDispatchToProps = {
    setAppState: appStateActions.setAppState,
};


export default connect(null, mapDispatchToProps)(RootContainer);
