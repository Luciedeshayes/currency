import { call } from 'redux-saga/effects';

export default function autoRestart(generator, name, maxRestartCount) {
    return function* autoRestarting(...args) {
        let restartIndex = 0;
        while (restartIndex < maxRestartCount) {
            try {
                // console.warn(`${restartIndex === 0 ? "starting" : "restarting"} saga ` + name);

                yield call(generator, args);
                break;
            } catch (e) {
                console.warn(`Unhandled error in '${generator.name}'`, e);

                // increment counter
                restartIndex++;
            }
        }
        // saga might finish without error
        if (restartIndex >= maxRestartCount) {
            console.warn('You have reach the maximum restart attempt for ' + name);
        }
    };
}
