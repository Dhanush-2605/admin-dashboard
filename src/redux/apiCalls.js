import { loginStart, loginSuccess, loginFailure } from "./userRedux";
import axios from "axios";
// import { publicRequest } from "
import { publicRequest, userRequest } from "../requestMethods";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
import { async } from "@firebase/util";
import { notifyFailure } from "../alert/alert";
import { notifySuccess } from "../alert/alert";
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
    notifySuccess("Product Deleted!!");
  } catch (err) {
    dispatch(deleteProductFail());
    notifyFailure(err);
  }
};

export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  console.log(product);
  try {
    const res = await userRequest.put(`/products/${id}`, product);
    console.log(res);
    dispatch(updateProductSuccess( {id, product}));
    res && notifySuccess("Sucessfully Updated");
  } catch (err) {
    dispatch(updateProductFail());
    notifyFailure(err);
  }
};

export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post("/products", product);

    dispatch(addProductSuccess(res.data));
    res && notifySuccess("Successfully Product Created");
  } catch (err) {
    dispatch(addProductFail());
  }
};

export const addUser = async (user) => {
  try {
    const res = await userRequest.post("auth/register", user);
    res && notifySuccess("Successfully User Created");
  } catch (err) {
    notifyFailure("User Creation Failed");
  }
};
export const updateUser = async (id, user, dispatch) => {
  try {
    const res = await userRequest.put(`users/${id}`, user);
    res && notifySuccess("Successfully User Updated");
  } catch (err) {
    notifyFailure("User Updation Failed!!");
  }
};

export const deleteUser = async (id) => {
  try {
    const res = await userRequest.delete(`users/${id}`);
    notifySuccess("Successfully User Deleted!!");
  } catch (err) {
    notifyFailure("User Deletion Failed");
  }
};


