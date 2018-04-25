import * as WinesService from '../services/Wines';
import { SET_REGIONS, HTTP_LOADING, HTTP_LOADED, HTTP_ERROR, SET_WINELIST, SET_WINE } from './index'

export const fetchRegions = () => dispatch => {
  dispatch(setRegions([]));
  dispatch(setHttpLoading());
  return WinesService.fetchRegions().then(data => {
      dispatch(setHttpLoaded());
      dispatch(setRegions(data));
      return data;
  }, err => {
      dispatch(setHttpError(`error while fetching regions : ${err.message}`));
  });
}

export const setRegions = (regions) => {
    return {
      type: SET_REGIONS,
      regions
    };
  }

export const fetchWineList = (region) => dispatch => {
  dispatch(setHttpLoading());
  return WinesService.fetchWinesFrom(region).then(wineList=>{
    dispatch(setHttpLoaded());
    dispatch(setWinList(wineList));
    return wineList;
  }, err=>{
    dispatch(setHttpError(`error while fetching wineList from region: ${region} error message: ${err.message}`))
  })
}

export const setWinList = (wineList) => {
  return {
    type: SET_WINELIST,
    wineList
  }
}

export const fetchWine = (wineID) => dispatch => {
  dispatch(setHttpLoading())
  return WinesService.fetchWine(wineID).then(wine=>{
    dispatch(setHttpLoaded())
    dispatch(setWine(wine))
    return wine
  }, err=>{
    dispatch(setHttpError(`error while fetching wine from wineList, error message: ${err.message}`))
  })
}

export const setWine = (wine) => {
  return {
    type: SET_WINE,
    wine
  }
}


export const setHttpLoading = () => {
    return {
      type: HTTP_LOADING,
    };
  }
  
  export const setHttpLoaded = () => {
    return {
      type: HTTP_LOADED,
    };
  }
  
  export const setHttpError = (error) => {
    return {
      type: HTTP_ERROR,
      error
    };
  }

 