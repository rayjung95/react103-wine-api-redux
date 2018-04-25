
import { SET_WINELIST } from '../actions/index'

export const wineList = (state = [], action) => {
    switch (action.type) {
      case SET_WINELIST:
        return [ ...action.wineList ];
      default:
        return state;
    }
  }