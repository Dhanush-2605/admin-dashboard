import React from "react";

import { useState } from "react";
import { useEffect } from "react";
import { userRequest } from "../../requestMethods";
import { Link } from "react-router-dom";
import { DeleteOutline } from "@material-ui/icons";
import { DataGrid } from "@material-ui/data-grid";
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

  const handleDelete = async (id) => {
    try {
      const res = await userRequest.delete(`orders/${id}`);
    } catch (err) {
      console.log(err);
    }
  };

  const columns = [
    { field: "_id", headerName: "Order ID", width: 220 },
    {
      field: "name",
      headerName: "User Name",
      width: 200,
    },
    { field: "status", headerName: "Status", width: 200 },
    {
      field: "amount",
      headerName: "Amount",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/order/" + params.row._id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  console.log(allOrders.length);
  return (
    <div className="productList" style={{ height: "100%" }}>
      <DataGrid
        rows={allOrders}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        checkboxSelection
      />
    </div>
  );
};

export default Orders;
