// import Topbar from "./components/topbar/navbar/Topbar";
import Topbar from "./components/navbar/Topbar";

import Sidebar from "./components/sidebar/Sidebar";
import "./app.css";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import ProductList from "./pages/productList/productList";
import { Routes, Route } from "react-router-dom";
import User from "./pages/user/User";
// import NewUser from "./pages/newuser/NewUser";
import NewUser from "./pages/newuser/NewUser";
import Product from "./pages/product/Product";
function App() {
  return (
   
      <div className="App">
        <Topbar />
        <div className="container">
          <Sidebar />
          <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newuser" element={<NewUser />}/>
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/newproduct" element={<NewUser />}/>
          
          </Routes>
        </div>
      </div>
  
  );
}

export default App;
