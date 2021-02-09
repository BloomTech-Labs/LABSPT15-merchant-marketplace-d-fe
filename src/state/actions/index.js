import React from 'react';
import {
  sleep,
  getExampleData,
  getProfileData,
  getDSData,
  postData,
  putData,
} from '../../api/index';

export const FETCH_PRODUCTS_START = 'FETCH_PRODUCTS_START';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';

export const FETCH_SELLER_INFO_START = 'FETCH_SELLER_INFO_START';
export const FETCH_SELLER_INFO_SUCCESS = 'FETCH_SELLER_INFO_SUCCESS';
export const FETCH_SELLER_INFO_ERROR = 'FETCH_SELLER_INFO_ERROR';

export const UPDATE_SELLER_INFO_START = 'UPDATE_SELLER_INFO_START';
export const UPDATE_SELLER_INFO_SUCCESS = 'UPDATE_SELLER_INFO_SUCCESS';
export const UPDATE_SELLER_INFO_ERROR = 'UPDATE_SELLER_INFO_ERROR';

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

export const fetchSellerProfile = authState => dispatch => {
  let oktaStore = JSON.parse(localStorage['okta-token-storage']);
  let oktaId = oktaStore.idToken.claims.sub;
  dispatch({ type: FETCH_SELLER_INFO_START });
  getProfileData(`${process.env.REACT_APP_API_URI}profile/${oktaId}`, authState)
    .then(response => {
      dispatch({ type: FETCH_SELLER_INFO_SUCCESS, payload: response });
    })
    .catch(err => {
      dispatch({ type: FETCH_SELLER_INFO_ERROR, payload: err });
    });
};

export const updateSellerProfile = (newData, authState) => dispatch => {
  let oktaStore = JSON.parse(localStorage['okta-token-storage']);
  let oktaId = oktaStore.idToken.claims.sub;

  dispatch({ type: UPDATE_SELLER_INFO_START });
  putData(
    `${process.env.REACT_APP_API_URI}profile`,
    { ...newData, id: oktaId },
    authState
  )
    .then(response => {
      dispatch({ type: UPDATE_SELLER_INFO_SUCCESS, payload: response });
    })
    .catch(err => {
      dispatch({ type: UPDATE_SELLER_INFO_ERROR, payload: err });
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
      console.log('Photo success response', response);
      dispatch({ type: ADD_ITEM_IMAGE_SUCCESS, payload: response });
    })
    .catch(err => {
      dispatch({ type: ADD_ITEM_IMAGE_ERROR, payload: err });
    });
};

export const addProduct = (newProduct, authState) => dispatch => {
  const oktaStore = JSON.parse(localStorage['okta-token-storage']);
  const seller_profile_id = oktaStore.idToken.claims.sub;
  dispatch({ type: ADD_PRODUCT_START });
  return postData(
    process.env.REACT_APP_API_URI + 'item',
    { ...newProduct.item, seller_profile_id },
    authState
  )
    .then(response => {
      dispatch({ type: ADD_PRODUCT_SUCCESS, payload: response.data });
      return response.data[0];
    })
    .catch(err => {
      dispatch({ type: ADD_PRODUCT_ERROR, payload: err });
      return err;
    });
  // dispatch({ type: ADD_PRODUCT_SUCCESS, payload: newProduct }); //This is for testing purposes
};
