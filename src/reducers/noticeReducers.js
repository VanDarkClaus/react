import actionTypes from '../actions/actionTypes'

var inintState = [11]

export default (state = inintState, action) => {
        switch(action.type){
            case actionTypes.LOAD_NOTICE_DATA:
                return action.payload.list
            case actionTypes.MARK_READED: 
                return state.map(item =>{
                    if(item.id === action.payload.id){
                        item.isComplated = !item.isComplated
                    } 
                    return item
                })
            case actionTypes.ALL_MARK_READED:
                return state.map(item => {
                    item.isComplated = true
                    return item
                })
            default: 
                return state
        }
}