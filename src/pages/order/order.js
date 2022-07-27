import React from "react";
import classes from "./order.module.css";
const Order = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}></div>
        <div className={classes.user}></div>
        <div className={classes.product}></div>
        <div className={classes.order}></div>

        <div className={classes.right}></div>
        <select name="pending">
          <option value="Shipping">Volvo</option>
          <option value="Delivered">Saab</option>
        </select>
      </div>
    </div>
  );
};

export default Order;
