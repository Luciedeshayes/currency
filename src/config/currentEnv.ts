export interface EnvironmentConfig {
    name: string;
    apiURL: string;
    apiVersion?: string;
}

const currentEnv: EnvironmentConfig = {
    name: process.env.NODE_ENV,
    apiURL: process.env.REACT_APP_API_URL,
};

const envConfig = {
    currentEnv,
};

export default envConfig;
