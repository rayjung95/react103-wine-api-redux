import { SET_WINE } from '../actions/index'

export const wine = (state={},action) => {
    switch(action.type){
        case SET_WINE:
            return action.wine
        default:
            return state
    }

}