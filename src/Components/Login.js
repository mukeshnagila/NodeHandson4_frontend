import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const handleLogin = () => {
  //   // Handle login logic here
  //   console.log('Email:', email);
  //   console.log('Password:', password);
  // };
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const redirect = useNavigate();

  // const [store, setsrore] = useState(null);

  const [responseMessage, setResponseMessage] = useState('');

  const handleInput = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // console.log(data);

    const { email, password } = data;

    if (!email || !password) {
        alert("Please fill out all fields before submitting.");
        return;
    }

    if(email && password){
    axios.post('https://nodehandson4-backend.onrender.com/api/login', data)
    // axios.post('http://localhost:2005/api/login', data)

      // .then((res) => console.log(res.data))

        .then((res) => {
          console.log(res.data)
          setResponseMessage(res.data.message);
          // setsrore(res.data)
          alert(res.data.message);
          localStorage.setItem('token', res.data.token);
          if(res.data.message === "Login failed. Email not found." || res.data.message === "User is not correct. Please enter the correct details"){
              redirect('/login');
          }else{
               redirect('/Verify');
          }
        })
        .catch((err) => console.log(err));
      }else{
        // setsrore("Please enter email and password.");
        redirect("/register");
      }

    setData({
      email: '',
      password: ''
    });
  };
  // console.log(store);

  return (
    <>
      <div className='log_Sign'>
        <h1 className='message'>{responseMessage}</h1>
        <h2>Fill Login Details</h2>
        <form>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={data.email}
                onChange={handleInput}
              />
            </div><br/>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={data.password}
                onChange={handleInput}
              />
            </div><br/>
            <button onClick={handleLogin}>Login</button>
        </form>    
      </div><br/>
    </>
  );
}

export default Login;
