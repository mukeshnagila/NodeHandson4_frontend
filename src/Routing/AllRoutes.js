import React from "react"
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import Signup from "../Components/Signup";
import Login from "../Components/Login";
import Verify from "../Components/Verify";

function AllRoutes () {
    return(
        <>
            <div className="header">
                <NavLink style={({isActive}) => ({color : isActive ? "blue" : "aliceblue"})} className="link" to="/">Home</NavLink>
                <NavLink style={({isActive}) => ({color : isActive ? "blue" : "aliceblue"})} className="link" to="/SignUp">SignUp</NavLink>
                <NavLink style={({isActive}) => ({color : isActive ? "blue" : "aliceblue"})} className="link" to="/LogIn">LogIn</NavLink>
                <NavLink style={({isActive}) => ({color : isActive ? "blue" : "aliceblue"})} className="link" to="/Verify">Verify</NavLink>
            </div><br/><br/>
            <div className="body">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Verify" element={<Verify />} />
                    <Route path="/Signup" element={<Signup />} />
                    <Route path="/Login" element={<Login />} />
                </Routes>
            </div>
        </>
    )
}

export default AllRoutes;