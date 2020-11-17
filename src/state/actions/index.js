import {
  sleep,
  getExampleData,
  getProfileData,
  getDSData,
  postData,
} from '../../api/index';
import { useOktaAuth } from '@okta/okta-react';

export const FETCH_PRODUCTS_START = 'FETCH_PRODUCTS_START';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';

export const ADD_PRODUCT_START = 'ADD_PRODUCT_START';
export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS';
export const ADD_PRODUCT_ERROR = 'ADD_PRODUCT_ERROR';

export const fetchProducts = () => dispatch => {
  const { authState } = useOktaAuth();
  dispatch({ type: FETCH_PRODUCTS_START });

  setTimeout(() => {
    getDSData('http://localhost:8000', authState)
      .then(response => {
        dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: FETCH_PRODUCTS_ERROR, payload: err });
      });
  }, 1000);
};

export const addProduct = newProduct => dispatch => {
  const { authState } = useOktaAuth();
  dispatch({ type: ADD_PRODUCT_START });

  postData('http://localhost:8000', newProduct, authState) //Post request, placeholder url
    .then(response => {
      dispatch({ type: ADD_PRODUCT_SUCCESS, payload: response.data });
    })
    .catch(err => {
      dispatch({ type: ADD_PRODUCT_ERROR, payload: err });
    });
};
