import{ fromJS } from 'immutable'
import axios from 'axios'
const defaultState=fromJS({
    topicList:[],
    allList_things:[],
    nav_List_Right:[],
    actor_recom_Lists:[]
});
export default(state=defaultState,action)=>{
    switch(action.type){
        case "changBodyData":
        console.log(action)
        return state.merge({
            actor_recom_Lists:fromJS(action.actor_recom_Lists),
            topicList:fromJS(action.topicList),
            allList_things:fromJS(action.allList_things),
            nav_List_Right:fromJS(action.nav_List_Right),
        })
        default:
            return state;
    }
}