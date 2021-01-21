import { createBrowserHistory } from 'history';

let history = createBrowserHistory();

export function getHistory() {
    if (!history) {
        history = createBrowserHistory();
    }
    return history;
}
