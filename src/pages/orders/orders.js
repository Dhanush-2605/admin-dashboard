import React from "react";

import { useState } from "react";
import { useEffect } from "react";
import { userRequest } from "../../requestMethods";
import { Link } from "react-router-dom";
import { DeleteOutline } from "@material-ui/icons";
// import dualring from ".../Assests/dualring.js";
// import dualring from ".../"
import dualring from "../Assests/dualring.svg";
import "./orders.css";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    const getAllorders = async () => {
      try {
        const res = await userRequest.get("/orders");
        console.log(res);
        setAllOrders(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getAllorders();
  }, []);

  const handleDelete = async () => {
    try {
      // const res=await userRequest.delete(`orders/${}`);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(allOrders.length);
  return (
    <>
      {allOrders.length !== 0 ? (
        <>
          <div className="orderList">
            <div className="userList">
              <table id="users">
                <tr>
                  <th>ORDER ID</th>
                  <th>USER NAME</th>
                  <th>STATUS</th>
                  <th>PRICE</th>

                  <th>EDIT</th>
                  <th>DELETE</th>
                </tr>
                {allOrders.map((data) => {
                  return (
                    <tr>
                      <th>{data._id}</th>
                      <th>{data.name}</th>

                      <th>{data.status}</th>
                      <th>$ {data.amount}</th>
                      <th>
                        <Link to={"/order/" + data._id}>
                          <button className="userListEdit">Edit</button>
                        </Link>
                      </th>
                      <th>
                        {" "}
                        <DeleteOutline
                          className="userListDelete"
                          onClick={() => handleDelete(data._id)}
                        />
                      </th>
                    </tr>
                  );
                })}
              </table>
            </div>
          </div>
        </>
      ) : (
       <img src={dualring} alt="loading" />
      )}
    </>
  );
};

export default Orders;
