import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Employees from './Pages/employees';
import SideHeader from './Pages/Side&header'; 
import Product from "./Pages/Product";
import Users from "./Pages/Users";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Pro from './Pages/Pro';
import Customers from './Pages/Customers';

// import {useEffect} from "react";


const App = () => {
 
  return (
    <>
    {/* <SideHeader/> */}
    {/* <Router>  */}
      <Routes>
        <Route path="signUp" element={< SignUp/>} />
        <Route path="signIn" element={< SignIn/>} />

        <Route path="/dashboard" element={<SideHeader/>} >
        <Route path="home" element={<Home />} />
        <Route path="employees" element={<Employees/>} />
        <Route path="products" element={<Product />} />
        <Route path="users" element={<Users />} /> 
        <Route path="Pro" element={< Pro/>} />
        <Route path="Customers" element={< Customers/>} />
        </Route>
        
      </Routes>
    {/* </Router> */}

    </>
  );
};

export default App;

