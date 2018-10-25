import * as constants from './constants'
import {fromJS} from 'immutable'
import axios from 'axios'
export const searchFocus=()=>({
    type:constants.SEARCH_FOCUS   
})
export const searchBlur=()=>({
    type:constants.SEARCH_BLUR  
})
export const mouseEnter=()=>({
    type:constants.MOUSE_ENTER
})
export const mouseLeave=()=>({
    type:constants.MOUSE_LEAVE
})
export const changePage=(page)=>({
    type:constants.CHANGE_PAGE,
    page
})
const changList=(data)=>({
    type:constants.CHANGE_LIST,
    data:fromJS(data),
    totalPage:Math.ceil(data.length/10) //转化immutable
})
export const getList=()=>{
    return (dispatch)=>{
        axios.get("https://easy-mock.com/mock/5baa15726d85f81e16ad4847/example/getList")
            .then((res)=>{
                const data=res.data;
                dispatch(changList(data.data));
            }).catch((err)=>{
                console.error(err)
            })
    }
}