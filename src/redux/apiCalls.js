import { publicRequest, userRequest, BASE_URL } from "../requestMethods";
import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import {
  getProductStart,
  getProductSuccess,
  getProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure,
  updateProductStart,
updateProductSuccess,
updateProductFailure,
addProductStart,
addProductSuccess,
addProductFailure
} from "./productRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post(BASE_URL + "/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get(BASE_URL + "/products");
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

export const deleteProducts = async (id, dispatch) => {
    dispatch(deleteProductStart());
    try {
    //   const res = await userRequest.delete(BASE_URL + `/products/${id}`);
      dispatch(deleteProductSuccess(id));
    } catch (err) {
      dispatch(deleteProductFailure());
    }
  };

  export const updateProducts = async (id, product,  dispatch) => {
    dispatch(updateProductStart());
    try {
      dispatch(updateProductSuccess({id: id, product: product}));
    } catch (err) {
      dispatch(updateProductFailure());  
    }
  }; 

  export const addProducts = async (product, dispatch) => {
    dispatch(addProductStart());
    try {
      const res = await userRequest.post( BASE_URL + `/products`, {product});
      dispatch(addProductSuccess(res.data));
    } catch (err) {
      dispatch(addProductFailure());
    }
  };