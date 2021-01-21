const appConfig = {
    useCrashReporter: process.env.NODE_ENV !== 'development',
    useReduxDevTools: process.env.NODE_ENV === 'development' && true,
    useReduxLogger: process.env.NODE_ENV === 'development' && true,
};

export default appConfig;
