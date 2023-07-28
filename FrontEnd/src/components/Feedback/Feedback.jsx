import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './feedback.css';
// import Navbar from '../navbar/navbar';

const Feedback = () => {

const[formdata,setFormdata]= useState({
    email: '',
    name: '',
    subject: '',
    message: ''
   
  })
  const navigate = useNavigate();
  const handleChange = (e) => {
    e.preventDefault();
    setFormdata({ ...formdata, [e.target.id]: e.target.value })
    
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    
    axios.post('http://localhost:2023/addfeed', formdata)
      navigate('/Home');
    console.log(formdata);
  }
  
  
 
  return (
    <div className="down">
      {/* <Navbar/>  */}
        <center>
      <div className="login-form" style={{marginTop:'150px'}}>
        <h2>FEEDBACK</h2>
       
        <form onSubmit={handleSubmit} >
          <input
            type="email"
            placeholder="Email"
            id='email'
            onChange={handleChange}
            required
          />
          <input
            type="name"
            placeholder="Name"
            id='name'
            onChange={handleChange}
            required
          />
             <input
            type="name"
            placeholder="Subject"
            id='subject'
            onChange={handleChange}
            required
          />
            <input
            type="name"
            placeholder="Message"
            id='message'
            onChange={handleChange}
            required
          />
          <br/><br/>
          <nav>

          <button type='submit' onChange={handleSubmit}>Submit</button>
          </nav>
          
        </form>
           
      </div>
        </center>
    </div>

  );
};

export default Feedback;