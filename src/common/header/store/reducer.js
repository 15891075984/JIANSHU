import * as constants from './constants'
import{ fromJS } from 'immutable'

const defaultState=fromJS({//使用immutable
    focused:false,
    list:[]
});
export default(state=defaultState,action)=>{
    switch(action.type){
        case constants.SEARCH_FOCUS:
        return state.set("focused",true)
        case constants.SEARCH_BLUR:
        return state.set("focused",false)
        case constants.CHANGE_LIST:
        return state.set("list",action.data)  //list数据改变
    }
    return state;
}