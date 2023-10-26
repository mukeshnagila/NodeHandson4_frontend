// import { useState } from 'react';
import './App.css';
import './CSS-Part/Style.css';
// import Login from './Components/Login';
// import Signup from './Components/Signup';
import AllRoutes from './Routing/AllRoutes';

function App() {
  // const [showSignup, setShowSignup] = useState(false);

  // const toggleForm = () => {
  //   setShowSignup(!showSignup);
  // };

  return (
    <div className="App">
      {/* <h2>This Is LogIn / SignUp Page</h2><br/> */}

      {/* <h1>{showSignup ? 'Signup' : 'Login'}</h1> */}
            <AllRoutes />
      
            {/* {showSignup ? <Signup /> : <Login />}
      <button className='switchbtn' onClick={toggleForm}>
            {showSignup ? 'Switch to Login' : 'Switch to Signup'}
      </button> */}


    </div>
  );
}

export default App;
