import React from "react";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import "./topbar.css";
import { logoutUser } from "../../redux/userRedux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom"

const Topbar = () => {
  const dispatch = useDispatch();
  const history=useHistory();
  const handleClick = () => {
    dispatch(logoutUser());
    history.push("/login");
  };
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Dhanushadmin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="topAvatar"
          />
          <div className="logout">
            <button onClick={handleClick}>Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
