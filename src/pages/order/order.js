import React from "react";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";
import { useLocation } from "react-router-dom";

import "./order.css";
const Order = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  console.log(id);
  const [orderData, setOrderData] = useState({});
  const [orderStatus, setOrderStatus] = useState({});
  useEffect(() => {
    const getOrder = async () => {
      try {
        const res = await userRequest.get(`/orders/find/${id}`);
        console.log(res);
        setOrderData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getOrder();
  }, [id]);
  const changeOrderStatus = async () => {
    try {
      const res = await userRequest.put(`/orders/${id}`, orderStatus);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
    console.log(orderStatus);
  };
  return (
    <div className="container">
      <div className="wrapper">
        <div className="left">
          <div className="user">
            <h1>Shipping Details</h1>
            <div>
              <h2>Name</h2>
              <span>{orderData.name}</span>
            </div>
            <div>
              <h2>Address</h2>
              <span>{orderData.address}</span>
            </div>
            <div>
              <h2>Phone</h2>
              <span>{orderData.number}</span>
            </div>
          </div>
          <div className="payment">
            <div>
              <h1>Payment Details</h1>
            </div>
            <div>
              Total Amount<span>{orderData.amount}</span>
            </div>
            <div>
              Status <span>{orderData.status}</span>
            </div>
          </div>
          <div className="order">
            <h1>Order Status</h1>
            <p>{orderData.status}</p>
          </div>
        </div>
        <div className="right">
          <div>
            <h2>Process Order</h2>
          </div>
          <div>
            <select
              name="pending"
              onChange={(event) => {
                setOrderStatus({ status: event.target.value });
              }}
            >
              <option value="Shipping">Shipping</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
          <div>
            <button onClick={changeOrderStatus}>Process</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
