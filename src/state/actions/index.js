import axios from 'axios';
import {
  sleep,
  getExampleData,
  getProfileData,
  getDSData,
} from '../../api/index';
import { useOktaAuth } from '@okta/okta-react';

export const FETCH_PRODUCTS_START = 'FETCH_PRODUCTS_START';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';

export const fetchProducts = () => dispatch => {
  const { authState } = useOktaAuth();
  dispatch({ type: FETCH_PRODUCTS_START });

  //   setTimeout(() => {
  //     getDSData("http://localhost:8000", authState)
  //       .then((response) => {
  //         dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: response.data });
  //       })
  //       .catch(err => {
  //         dispatch({ type: FETCH_PRODUCTS_ERROR, payload: err });
  //       });
  //   }, 1000);
};
