// import React, { useState } from 'react';
// import './login.css'; // Import the CSS file
// import {  useNavigate } from 'react-router-dom';
// import {Link }from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { setUsername } from './actions';

// const LoginPage = () => {
//   const navigate = useNavigate();
//    const dispatch=useDispatch();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       setError('Please enter your email and password.');
//       return;
//     }

//     if (!validateEmail(email)) {
//       setError('Please enter a valid email address.');
//       return;
//     }

//     // Handle login logic here
//     console.log('Logging in with email:', email, 'and password:', password);

//     // Navigate to the home page upon successful login
//     dispatch(setUsername(email));
//     navigate('/home');
//   };

//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   return (
//     <div className="login-page">
//       <h1>Login</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Email:</label>
//           <input type="email" value={email} onChange={handleEmailChange} />
//         </div>
//         <div className="form-group">
//           <label>Password:</label>
//           <input type="password" value={password} onChange={handlePasswordChange} />
//         </div>
//         {error && <div className="error">{error}</div>}
//         <nav>
//           <button type="submit" className="login-button">Login</button><br></br>
//           {/* <Link to="/home" className="home-link">Home</Link> */}
//         </nav>
//           <nav>
//           <p1>Don't have an account?</p1>
//             <Link to='/SignUp' style={{textDecoration:'none'}}>SignUp</Link>
//           </nav>

//       </form>
//     </div>
//   );
// };

// export default LoginPage;
//  import the required modules


import React, { useState } from 'react';
import './login.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setUsername } from './actions';

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please enter your email and password.');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Make API call to login endpoint
    axios
      .post('http://localhost:2020/log/addl', { email, password })
      .then((response) => {
        // Handle successful login
        const userData = response.data;
        dispatch(setUsername(userData.email));
        navigate('/home');
      })
      .catch((error) => {
        // Handle login errors
        setError('Invalid email or password.');
      });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        {error && <div className="error">{error}</div>}
        <nav>
          <button type="submit" className="login-button">
            Login
          </button>
          <br />
          {/* <Link to="/home" className="home-link">Home</Link> */}
        </nav>
        <nav>
          <p1>Don't have an account?</p1>
          <Link to="/SignUp" style={{ textDecoration: 'none' }}>
            SignUp
          </Link>
        </nav>
      </form>
    </div>
  );
};

export default LoginPage;
