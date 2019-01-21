import {combineReducers} from 'redux';
import {reducer as article} from './article.reducer';
import {reducer as results} from './results.reducer';

const reducers = combineReducers({
    article,
    results
})

export default reducers
