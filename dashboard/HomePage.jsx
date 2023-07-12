import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom'; 
// import 'table.jpg';
const HomePage = () => {
  return (
    
    <div className="home-page" >
      <nav className="navbar" sx={{display:"flex"}}>
        <ul className="navbar-list">
        <nav>
        <Link to="/log" style={{textDecoration: 'none'}}>
         <li className="navbar-item">Login</li>
        </Link>
        </nav>
        <nav>
        <Link to="/Sign"style={{textDecoration: 'none'}}>
         <li className="navbar-item">SignUp</li>
        </Link>
        </nav>
        {/* <li className="navbar-item">SignUp</li> */}
        <nav>
          <Link to="/ToHome" style={{textDecoration: 'none'}}>
          <li className="navbar-item">Home</li>
          </Link>
        </nav>
        <nav>
          <Link to="/ToAbout" style={{textDecoration: 'none'}}>
          <li className="navbar-item">About</li>
          </Link>
        </nav>
        <nav>
          <Link to="/ToContact" style={{textDecoration: 'none'}}>
          <li className="navbar-item">Contact</li>
          </Link>
        </nav>
          {/* <li className="navbar-item">About</li> */}
          {/* <li className="navbar-item">Contact</li> */}
        <div className="search-container">
        <input type="text" placeholder="Search" className="search-input" />
        <button className="search-button">Search</button>
      </div>
        </ul>
      </nav>
    
      <h1>S^3 Restaurant</h1>
      <div className="featured">
        {/* <img className="image" alter='tab'></img> */}
        <div className='img-card'>
            <img src='table.jpg' height='300px' width='380px' alt='tab'/>
            <h2>Table Reservation</h2>
            <nav>
            <Link to="/table">
            <button className='click-button'>Click</button>
            </Link>
            </nav>    
        </div>
            
      {/* <div className="featured"> */}
        {/* <img className="image" alter='tab'></img> */}
        <div className='img-card'>
            <img src='menu.webp' height='300px' width='380px' alt='tab'/>
            <h2>Food Order</h2>
            <button className='click-button'>Click</button>

        </div>
      {/* </div> */}
      {/* <div className="featured"> */}
        <div className='img-card'>
            <img src='combo1.jpg' height='300px' width='380px' alt='tab'/>
            <h2>Offers Combo</h2>
            <button className='click-button'>Click</button>

        </div>
      </div>
    </div>
  );
};

export default HomePage;
