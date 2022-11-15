
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/Login/Login";

function App() {
const admin =  JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.isAdmin;


  return (
    <Router>
      {/* <Topbar /> */}
       <div className="container"> 
         {/* <Sidebar />  */}
        <Routes>
      {/* {isAdmin && ()} */}
          <Route exact path="/" element={<Home />} />

          <Route  path="/users" element={<UserList />} />
          <Route  path="/user/:userId" element={<User />} />
          <Route  path="/newUser" element={<NewUser />} />
          <Route  path="/products" element={<ProductList />} />
          <Route  path="/product/:productId" element={<Product />} />
          <Route  path="/newproduct" element={<NewProduct />} />
          <Route  path="/login" element={ admin ? <Navigate to="/" /> : <Login />} /> 

        </Routes>
       </div> 
    </Router>
  );
}



export default App;
