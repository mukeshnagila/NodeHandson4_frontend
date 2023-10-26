import React from "react";
import { useNavigate } from "react-router-dom";

function Home () {

    const redirect = useNavigate();

    const handelRegister = () => {
            redirect('/signup')
    }
    return(
        <>
            <h1>Home Page</h1><br/><br/>

            <h3 className='message'>Welcome To This login-Signup Plateform</h3>
            <h4 className='message'>!........Click this Button register your details........!</h4>
            <div>
                <button onClick={handelRegister}>Go To Register</button>
            </div>
        </>
    )
}

export default Home;