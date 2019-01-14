import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './combined.reducer';

export default function configureStore() {
    const store = createStore(
        reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(thunk),
    );

    // global module:true
    if (module.hot) {
        module.hot.accept('./combinedReducer', () => {
            const nextReducer = require('./combined.reducer').default; // eslint-disable-line
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}