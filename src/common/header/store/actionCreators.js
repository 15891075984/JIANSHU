import * as constants from './constants'
import {fromJS} from 'immutable'
import axios from 'axios'
export const searchFocus=()=>({
    type:constants.SEARCH_FOCUS   //直接返回出去（{}）
})

export const searchBlur=()=>({
    type:constants.SEARCH_BLUR  //直接返回出去（{}）
})

export const changList=(data)=>({
    type:constants.CHANGE_LIST,
    data:fromJS(data)  //转化immutable
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