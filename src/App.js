
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/Login/Login";

function App() {


  return (
    <Router>
      {/* <Topbar /> */}
       <div className="container"> 
         {/* <Sidebar />  */}
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route  path="/users" element={<UserList />} />
          <Route  path="/user/:userId" element={<User />} />
          <Route  path="/newUser" element={<NewUser />} />
          <Route  path="/products" element={<ProductList />} />
          <Route  path="/product/:productId" element={<Product />} />
          <Route  path="/newproduct" element={<NewProduct />} />
          <Route  path="/login" element={<Login />} /> 

        </Routes>
       </div> 
    </Router>
  );
}

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route exact path="/login" element={<Login />} />

//         <Topbar />
//         <div className="container">
//           <Sidebar />
//           <Route exact path="/" element={<Home />} />

//           <Route exact path="/users" element={<UserList />} />
//           <Route exact path="/user/:userId" element={<User />} />
//           <Route exact path="/newUser" element={<NewUser />} />
//           <Route exact path="/products" element={<ProductList />} />
//           <Route exact path="/product/:productId" element={<Product />} />
//           <Route exact path="/newproduct" element={<NewProduct />} />
//         </div>
//       </Routes>
//     </Router>
//   );
// }

export default App;
