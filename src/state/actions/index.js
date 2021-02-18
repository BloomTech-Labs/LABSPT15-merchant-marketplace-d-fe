import React from 'react';
import {
  sleep,
  getExampleData,
  getProfileData,
  getDSData,
  postData,
  putData,
  deleteData,
} from '../../api/index';

export const FETCH_PRODUCTS_START = 'FETCH_PRODUCTS_START';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';

export const FETCH_ITEM_PHOTOS_START = 'FETCH_ITEM_PHOTOS_START';
export const FETCH_ITEM_PHOTOS_SUCCESS = 'FETCH_ITEM_PHOTOS_SUCCESS';
export const FETCH_ITEM_PHOTOS_ERROR = 'FETCH_PRODUCTS_ERROR';

export const FETCH_SELLER_INFO_START = 'FETCH_SELLER_INFO_START';
export const FETCH_SELLER_INFO_SUCCESS = 'FETCH_SELLER_INFO_SUCCESS';
export const FETCH_SELLER_INFO_ERROR = 'FETCH_SELLER_INFO_ERROR';

export const FETCH_TAGS_START = 'FETCH_TAGS_START';
export const FETCH_TAGS_SUCCESS = 'FETCH_TAGS_SUCCESS';
export const FETCH_TAGS_ERROR = 'FETCH_TAGS_ERROR';

export const ADD_PRODUCT_START = 'ADD_PRODUCT_START';
export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS';
export const ADD_PRODUCT_ERROR = 'ADD_PRODUCT_ERROR';

export const UPDATE_PRODUCT_START = 'UPDATE_PRODUCT_START';
export const UPDATE_PRODUCT_SUCCESS = 'UPDATE_PRODUCT_SUCCESS';
export const UPDATE_PRODUCT_ERROR = 'UPDATE_PRODUCT_ERROR';

export const UPDATE_SELLER_INFO_START = 'UPDATE_SELLER_INFO_START';
export const UPDATE_SELLER_INFO_SUCCESS = 'UPDATE_SELLER_INFO_SUCCESS';
export const UPDATE_SELLER_INFO_ERROR = 'UPDATE_SELLER_INFO_ERROR';

export const ADD_ITEM_IMAGE_START = 'ADD_ITEM_IMAGE_START';
export const ADD_ITEM_IMAGE_SUCCESS = 'ADD_ITEM_IMAGE_SUCCESS';
export const ADD_ITEM_IMAGE_ERROR = 'ADD_ITEM_IMAGE_ERROR';

export const ADD_ITEM_TAG_START = 'ADD_ITEM_TAG_START';
export const ADD_ITEM_TAG_SUCCESS = 'ADD_ITEM_TAG_SUCCESS';
export const ADD_ITEM_TAG_ERROR = 'ADD_ITEM_TAG_ERROR';

export const DELETE_ITEM_TAGS_START = 'DELETE_ITEM_TAGS_START';
export const DELETE_ITEM_TAGS_SUCCESS = 'DELETE_ITEM_TAGS_SUCCESS';
export const DELETE_ITEM_TAGS_ERROR = 'DELETE_ITEM_TAGS_ERROR';

export const ADD_TAGS_START = 'ADD_TAGS_START';
export const ADD_TAGS_SUCCESS = 'ADD_TAGS_SUCCESS';
export const ADD_TAGS_ERROR = 'ADD_TAGS_ERROR';

// Get the list of all products
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
      fetchSellerProfile(authState);
    })
    .catch(err => {
      dispatch({ type: UPDATE_SELLER_INFO_ERROR, payload: err });
    });

  fetchSellerProfile(authState);
};

// Get the list of all tags available to be added to a product
export const fetchTags = authState => dispatch => {
  dispatch({ type: FETCH_TAGS_START });
  return getDSData(`${process.env.REACT_APP_API_URI}tags`, authState)
    .then(response => {
      dispatch({ type: FETCH_TAGS_SUCCESS, payload: response });
      return response;
    })
    .catch(err => {
      dispatch({ type: FETCH_TAGS_ERROR, payload: err });
      return err;
    });
};

export const fetchItemPhotos = (authState, itemId) => dispatch => {
  dispatch({ type: FETCH_ITEM_PHOTOS_START });
  getDSData(`${process.env.REACT_APP_API_URI}photos/${itemId}`, authState)
    .then(response => {
      dispatch({ type: FETCH_ITEM_PHOTOS_SUCCESS, payload: response });
    })
    .catch(err => {
      dispatch({ type: FETCH_ITEM_PHOTOS_ERROR, payload: err });
    });
};

// Add an Image to a product
export const addItemImage = (authState, itemId, photoUrl) => dispatch => {
  dispatch({ type: ADD_ITEM_IMAGE_START });

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

// Add a tag to a product
export const addItemTag = (authState, itemId, tagId) => dispatch => {
  dispatch({ type: ADD_ITEM_TAG_START });

  postData(
    `${process.env.REACT_APP_API_URI}items/${itemId}/tag/${tagId}`,
    {
      tag_id: tagId,
      item_id: itemId,
    },
    authState
  )
    .then(response => {
      dispatch({ type: ADD_ITEM_TAG_SUCCESS, payload: response });
    })
    .catch(err => {
      dispatch({ type: ADD_ITEM_TAG_ERROR, payload: err });
    });
};

//Add a tag to be available for all the products
export const addTag = (authState, tag_name) => dispatch => {
  dispatch({ type: ADD_TAGS_START });

  return postData(
    process.env.REACT_APP_API_URI + 'tags',
    {
      tag_name: tag_name,
    },
    authState
  )
    .then(response => {
      console.log('Tag success response', response);
      dispatch({ type: ADD_TAGS_SUCCESS, payload: response });
      return response.data[0];
    })
    .catch(err => {
      dispatch({ type: ADD_TAGS_ERROR, payload: err });
      return err;
    });
};

// add a new product
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
};

export const updateProduct = (updatedProduct, authState) => dispatch => {
  dispatch({ type: UPDATE_PRODUCT_START });
  putData(
    `${process.env.REACT_APP_API_URI}item/${updatedProduct.id}`,
    {
      item_name: updatedProduct.item_name,
      quantity_available: updatedProduct.quantity_available,
      price_in_cents: updatedProduct.price_in_cents,
      description: updatedProduct.description,
      published: updatedProduct.published,
    },
    authState
  )
    .then(response => {
      dispatch({ type: UPDATE_PRODUCT_SUCCESS, payload: response.data[0] });
    })
    .catch(err => {
      dispatch({ type: UPDATE_PRODUCT_ERROR, payload: err });
      return err;
    });

  fetchItemPhotos(authState, updatedProduct.id);
};

export const deleteItemTags = (authState, itemId) => dispatch => {
  dispatch({ type: DELETE_ITEM_TAGS_START });
  deleteData(`${process.env.REACT_APP_API_URI}item/${itemId}/tags`, authState)
    .then(response => {
      dispatch({ type: DELETE_ITEM_TAGS_SUCCESS, payload: response });
    })
    .catch(err => {
      dispatch({ type: DELETE_ITEM_TAGS_ERROR, payload: err });
      return err;
    });
};
