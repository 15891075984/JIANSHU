import {combineReducers} from 'redux-immutable';
import {reducer as headerReducer} from '../common/header/store';
import{reducer as bodyReducer}from '../common/body/store';
 const reducer=combineReducers({
    header:headerReducer,
    body:bodyReducer
})

export default reducer;