// import Topbar from "./components/topbar/navbar/Topbar";
import Topbar from "./components/navbar/Topbar";

import Sidebar from "./components/sidebar/Sidebar";
import "./app.css";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import ProductList from "./pages/productList/productList";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import User from "./pages/user/User";
// import NewUser from "./pages/newuser/NewUser";
import NewUser from "./pages/newuser/NewUser";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newproduct/NewProduct";
import Login from "./pages/login/Login";
import Order from "./pages/order/order";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
function App() {
  // const admin = JSON.parse(
  //   JSON.parse(localStorage.getItem("persist:root")).user
  // ).currentUser.isAdmin;
  const history = useHistory();
  const loginUser = useSelector((state) => state.user.currentUser);
  let admin = false;
  if (loginUser != null) {
    admin = loginUser.isAdmin;
  }
  console.log(admin);

  const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
  const currentUser = user && JSON.parse(user).currentUser;
  console.log(currentUser);
  // const TOKEN = currentUser?.accessToken;

  // const admin=true;
  console.log(admin);
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        {admin ? (
          <>
            <Topbar />
            <div className="container">
              <Sidebar />
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/users">
                <UserList />
              </Route>
              <Route path="/user/:userId">
                <User />
              </Route>
              <Route path="/newUser">
                <NewUser />
              </Route>
              <Route path="/products">
                <ProductList />
              </Route>
              <Route path="/product/:productId">
                <Product />
              </Route>
              <Route path="/newproduct">
                <NewProduct />
              </Route>
               <Route path="/order">
                <Order/>
              </Route> 
            </div>
          </>
        ) : (
          <h1>login</h1>
        )}
      </Switch>
    </Router>
  );
}

export default App;
