import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import { Link } from "react-router-dom";
import { userRequest } from "../../requestMethods";
import "./user.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { async } from "@firebase/util";
const User = () => {
  const id = useParams();
  const [currUser, setCurrUser] = useState({});
  const [data, setData] = useState({});

  const handleChange = (event) => {
    setData((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };
  useEffect(() => {
    const getData = async () => {
      const res = await userRequest.get(`users/find/${id.userId}`);
      setCurrUser(res.data);
      console.log(res.data);
    };
    getData();
  }, [id]);
  const handleClick = async (event) => {
    event.preventDefault();

    const res = await userRequest.put(`users/${id.userId}`, data);
    console.log(res);
    console.log(data);
  };

  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{currUser.username}</span>
              {/* <span className="userShowUserTitle">Software Engineer</span> */}
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{currUser.username}</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">10.12.1999</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">{currUser.phone}</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">{currUser.email}</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">{currUser.address}</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm" onSubmit={handleClick}>
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder={currUser.username}
                  className="userUpdateInput"
                  name="username"
                  onChange={handleChange}
                />
              </div>

              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder={currUser.email}
                  className="userUpdateInput"
                  name="email"
                  onChange={handleChange}
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder={currUser.phone}
                  className="userUpdateInput"
                  name="phone"
                  onChange={handleChange}
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder={currUser.address}
                  className="userUpdateInput"
                  name="address"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src={
                    "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" ||
                    currUser.img
                  }
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <div>
                <button className="userUpdateButton" onClick={handleClick}>
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
