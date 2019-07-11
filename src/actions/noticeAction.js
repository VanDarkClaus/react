import actionTypes from './actionTypes'
import { getTodoList } from '../requests'

//加载数据
export const loadNoticeData = (page = 1) => {
    return dispatch =>{
        getTodoList(page)
        .then(
            res => {
                dispatch({
                    type: actionTypes.LOAD_NOTICE_DATA,
                    payload: {
                        list: res.list
                    }
                })
            }
        )
    }
}

//标记已读
export const markReaded = id => {
    return dispatch => {
        dispatch({
            type: actionTypes.MARK_READED,
            payload: {
                id
            }
        })
    }
}

//全部标记已读
export const allMarkReaded = () =>{
    return dispatch => {
        setTimeout(()=>{
            dispatch({
                type:actionTypes.ALL_MARK_READED
            })
        },1000)
    }
}