import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { loading } from './http';
import { regions } from './regions';
import { wineList } from './wineList';
import { wine } from './wine'
 
// here combineReducers is use to split the main reducer into smaller ones
export const reducer = combineReducers({
  // this one is a special reducer to sync the router with the redux store
  wine,
  wineList,
  regions,
  loading,
  routing: routerReducer
});
