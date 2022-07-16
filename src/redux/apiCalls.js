import { loginStart, loginSuccess, loginFailure } from "./userRedux";
import axios from "axios";
// import { publicRequest } from "
import { publicRequest, userRequest } from "../requestMethods";

import {
  getProductStart,
  getProductSuccess,
  getProductFail,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFail,
  updateProductStart,
  updateProductSuccess,
  updateProductFail,
  addProductStart,
  addProductSuccess,
  addProductFail,
} from "./productRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
    console.log(res.data);
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("/products");
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFail());
  }
};

export const deleteProducts = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    const res = await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    dispatch(deleteProductFail());
  }
};

export const updateProduct = async (id,product,dispatch) => {
  dispatch(updateProductStart());
  console.log(product);
  try {
    const res = await userRequest.put(`/products/${id}`,product);
    console.log(res);
    dispatch(updateProductSuccess({id,product}));
  } catch (err) {
    dispatch(updateProductFail());
  }
};

export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post("/products",product);
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFail());
  }
};
