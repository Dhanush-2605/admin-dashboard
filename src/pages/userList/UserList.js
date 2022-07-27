import "./userlist.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
// import { userRows } from "../../dummyData";
import { userRows } from "../../dummydata";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { userRequest } from "../../requestMethods";

const UserList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await userRequest.get("users");
      setData(res.data);
      console.log(res.data);
    };
    getData();
  }, []);
  console.log(data);

  const handleDelete = async (id) => {
    // setData(data.filter((item) => item.id !== id));
    console.log("deleted");
    try {
      const res = await userRequest.delete(`users/${id}`);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="userList">
      <table id="users">
        <tr>
          <th>ID</th>
          <th>PHOTO</th>
          <th>NAME</th>
          <th>EMAIL</th>
          <th>EDIT</th>
          <th>DELETE</th>
        </tr>
        {data.map((data) => {
          return (
            <tr>
              <th>{data._id}</th>
              <th>
                <img
                 
                  src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
                  alt="profile"
                  style={{ height: "25px", width: "25px" }}
                />
              </th>
              <th>{data.username}</th>
              <th>{data.email}</th>
              <th>
                <Link to={"/user/" + data._id}>
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
  );
};

export default UserList;
