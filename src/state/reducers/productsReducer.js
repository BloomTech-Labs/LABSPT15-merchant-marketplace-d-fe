import { requestStatus } from '../types/index';

const initialState = {
  products: [],
  getProductsStatus: requestStatus.ready,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productsReducer;
