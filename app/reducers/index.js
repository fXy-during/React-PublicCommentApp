import { combineReducers } from 'redux';
import store from './store';
import userinfo from './userinfo';


const rootReducer = combineReducers({
    userinfo,  // dispatch
    store
})

export default rootReducer;