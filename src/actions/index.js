import { bindActionCreators } from "redux";

export const FETCH_START = 'FETCH_START';
export const FETCH_FAIL = 'FETCH_FAIL';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';

export const fetchStart = () => {
  return({type:FETCH_START});
}

export const fetchSuccess = (dog) => {
  return ({type:FETCH_SUCCESS, payload: dog });
}

export const fetchFail = (errorMessage) => {
  return ({type:FETCH_FAIL, payload: errorMessage});
}