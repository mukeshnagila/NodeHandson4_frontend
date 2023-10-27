import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Verify () {

    const token = localStorage.getItem('token');
    // console.log(token);
    const redirect = useNavigate();

    useEffect(() => {
        if(token){
            axios.get("https://nodehandson4-backend.onrender.com", {headers: {"Authorization": `Bearer ${token}`}} )
            // axios.get('http://localhost:2005/', {headers: {"Authorization": `Bearer ${token}`}} )

                .then((res) =>{
                    console.log(res.data)
                });
        }else{
            redirect('/login')
        }
    }, [token, redirect]);

    const handelLogout = () => {
        localStorage.removeItem("token")
        redirect('/login')
    }

    return(
        <>
            <h1>Home Page</h1><br/><br/>

            <h3 className='message'>HELLO USER HOW ARE YOU...........?</h3>
            <h4 className='message'>!........This is your Dashboard........!</h4>
            <div>
                <button onClick={handelLogout}>Log-Out</button>
            </div>
        </>
    )
}

export default Verify;