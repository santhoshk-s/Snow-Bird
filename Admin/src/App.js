import Topbar from "./components/topbar/Topbar";
import './app.css'
import Home from "./pages/home/Home";
import {BrowserRouter as Router,Route, Routes, } from "react-router-dom"
import UserList from "./pages/userlist/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newuser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import Newproduct from "./pages/newProduct/Newproduct";
import ListList from "./pages/listList/ListList"
import List from "./pages/list/List"
import Login from "./pages/login/Login";
import { AuthContext } from "./context/authContext/AuthContex";
import { useContext } from "react";
import NewList from "./pages/newList/NewList";



function App() {
  const {user} = useContext(AuthContext)


  return (
    <Router>
     {user ?<Topbar />:<div></div>}
     <div className="container">
      <Routes>
        <Route  path="/login" element={user?<Home/>:<Login/>} /> 
        <Route exact path="/" element={user?<Home/>:<Login/>} />
        <Route  path="/users" element={<UserList />} />    
        <Route  path="/user/:userId" element={<User />} /> 
        <Route  path="/newUser" element={<NewUser />} /> 
        <Route  path="/lists" element={<ListList />} />    
        <Route  path="/list/:listId" element={<List />} /> 
        <Route  path="/newlist" element={<NewList />} /> 
        <Route  path="/movies" element={<ProductList />} />  
        <Route  path="/product/:productsId" element={<Product />} /> 
        <Route  path="/product" element={<ProductList />} /> 
        <Route  path="/newproduct" element={<Newproduct />}/>
      </Routes>
     </div> 
    </Router>
  )
}

export default App;
