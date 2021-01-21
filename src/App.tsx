import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import configs from './config';
import RootContainer from './navigation/rootContainer';
import theme from './resources/style/theme';

export const store = configs.storeConfig.createReduxStore();

function App() {
    return (
        <ReduxProvider store={store}>
            <ThemeProvider theme={theme}>
                <RootContainer />
            </ThemeProvider>
        </ReduxProvider>
    );
}

export default App;
