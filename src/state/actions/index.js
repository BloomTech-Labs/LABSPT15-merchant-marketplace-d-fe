import React from 'react';
import {
  sleep,
  getExampleData,
  getProfileData,
  getDSData,
  postData,
} from '../../api/index';

export const FETCH_PRODUCTS_START = 'FETCH_PRODUCTS_START';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';

export const ADD_PRODUCT_START = 'ADD_PRODUCT_START';
export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS';
export const ADD_PRODUCT_ERROR = 'ADD_PRODUCT_ERROR';

export const ADD_ITEM_IMAGE_START = 'ADD_ITEM_IMAGE_START';
export const ADD_ITEM_IMAGE_SUCCESS = 'ADD_ITEM_IMAGE_SUCCESS';
export const ADD_ITEM_IMAGE_ERROR = 'ADD_ITEM_IMAGE_ERROR';

export const fetchProducts = authState => dispatch => {
  let oktaStore = JSON.parse(localStorage['okta-token-storage']);
  let oktaId = oktaStore.idToken.claims.sub;
  dispatch({ type: FETCH_PRODUCTS_START });
  getDSData(
    `${process.env.REACT_APP_API_URI}items/profile/${oktaId}`,
    authState
  )
    .then(response => {
      dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: response });
    })
    .catch(err => {
      dispatch({ type: FETCH_PRODUCTS_ERROR, payload: err });
    });
};

export const addItemImage = (authState, itemId, photoUrl) => dispatch => {
  dispatch({ type: ADD_ITEM_IMAGE_START });

  console.log('addItemImage');
  postData(
    process.env.REACT_APP_API_URI + 'photos',
    {
      url: photoUrl,
      item_id: itemId,
    },
    authState
  )
    .then(response => {
      console.log('success response', response);
      dispatch({ type: ADD_ITEM_IMAGE_SUCCESS, payload: response });
    })
    .catch(err => {
      dispatch({ type: ADD_ITEM_IMAGE_ERROR, payload: err });
    });
};

export const addProduct = (newProduct, authState) => dispatch => {
  dispatch({ type: ADD_PRODUCT_START });

  // Here will do the post request to the API

  // postData('http://localhost:8000', newProduct, authState) //Post request, placeholder url
  //   .then(response => {
  //     dispatch({ type: ADD_PRODUCT_SUCCESS, payload: response.data });
  //   })
  //   .catch(err => {
  //     dispatch({ type: ADD_PRODUCT_ERROR, payload: err });
  //   });
  dispatch({ type: ADD_PRODUCT_SUCCESS, payload: newProduct }); //This is for testing purposes
};
