import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import userDataReducer from './reducers/user';
import {loadAuthToken} from './local-storage';
import {setAuthToken, refreshAuthToken} from './actions/auth';
import globalDataReducer from './reducers/global';
import authReducer from './reducers/auth';
import nlmReducer from './reducers/nlm';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
        form: formReducer,
        auth: authReducer,
        user: userDataReducer,
        global: globalDataReducer,
        nlm: nlmReducer
    }),
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

// Hydrate the authToken from localStorage if it exist
const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
}

export default store;