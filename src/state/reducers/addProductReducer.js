import { requestStatus } from '../types/index';

const initialState = {
  newProduct: {},
  getProductsStatus: requestStatus.ready,
};

const addProductReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default addProductReducer;
