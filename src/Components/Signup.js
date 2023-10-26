import React, { useState } from 'react';
import axios from 'axios';
import '../CSS-Part/Style.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    number: '',
    password: ''
  });

  const redirect = useNavigate();

  // const [store, setsrore] = useState([]);

  const [responseMessage, setResponseMessage] = useState('');

  const handleInput = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // console.log(data);

    const { name, email, number, password } = data;

    if (!name || !email || !number || !password) {
        alert("Please fill out all fields before submitting.");
        return;
    }

    axios.post('https://nodehandson4-backend.onrender.com/api/register', data)
      // .then((res) => console.log(res.data))
      .then((res) => {
        console.log(res.data)
        setResponseMessage(res.data.message);
        // setsrore(res.data)
        localStorage.setItem('token', res.data.token);
        redirect('/login');
      })
      .catch((err) => console.log(err));

    setData({
      name: '',
      email: '',
      number: '',
      password: ''
    });
  };
  // console.log(store);

  return (
    <>
    <div className="log_Sign"> {/* Updated class name */}
        
        <h3 className='message'>{responseMessage}</h3> 

        <form>
          <h2>Fill Signup Details</h2>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={data.name}
              onChange={handleInput}
            />
          </div><br/>
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
              type="number"
              name="number"
              placeholder="Mobile"
              value={data.number}
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
          <button onClick={handleSignup}>Signup</button>
        </form> 
    </div><br/>
  </>  
  );
};

export default Signup;
