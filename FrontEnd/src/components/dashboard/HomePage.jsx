import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom'; 
import { useState } from 'react';
import { useSelector } from 'react-redux';

// import 'table.jpg';
const HomePage = () => {
  const username=useSelector((state)=>state.user.username);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  
  return (
    // <div sx={{display:'flex'}}>
    <div className="home-page" sx={{display:'flex'}}>
      
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
        {/* <nav>
          <Link to="/ToHome" style={{textDecoration: 'none'}}>
          <li className="navbar-item">Home</li>
          </Link>
        </nav> */}
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
        <nav>
          <Link to="/feed" style={{textDecoration: 'none'}}>
          <li className="navbar-item">Feedback</li>
          </Link>
        </nav>
          {/* <li className="navbar-item">About</li> */}
          {/* <li className="navbar-item">Contact</li> */}
        <div className="search-container">
        <input type="text" placeholder="Search" className="search-input" />
        <button className="search-button">Search</button>
      </div>
      <li className="navbar-item dropDown" onClick={toggleDropdown} >
      <img src='profile.png' className='profile' alt='profile'></img>
            
            {isDropdownOpen && (
              <ul className="dropdown-content" >
                <nav>
                <Link to="/profile" style={{textDecoration:'none', color: 'white', listStyle:'none'}}>
                <li>Profile</li>
                </Link>
                </nav><br></br>

                <nav>
                <Link to="/account" style={{textDecoration:'none', color: 'white', listStyle:'none'}}>
                <li>Account</li>
                </Link>
                </nav><br></br>

                <nav>
                <Link to="/logout" style={{textDecoration:'none', color: 'white', listStyle:'none'}}>
                <li>Logout</li>
                </Link>
                </nav>
                
                {/* <nav>
                <Link to="/feed" style={{textDecoration:'none', color: 'white', listStyle:'none'}}>
                <li>Feedback</li>
                </Link>
                </nav> */}
              </ul>
            )}
       </li>
      {/* <nav>
          <Link to="/ToProfile" style={{textDecoration: 'none'}}>
          <li className="navbar-item">
            <img src='profile.png' className='profile' alt='profile'></img>

          </li>
          </Link>
        </nav> */}

        </ul>
      </nav>
    <h1>Welcome,{username}!!!</h1>
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
            
        
        <div className='img-card'>
            <img src='menu.webp' height='300px' width='380px' alt='tab'/>
            <h2>Food Order</h2>
            <nav>
              <Link to='/order'>
                <button className='click-button'>Click</button>
              </Link>
            </nav>

        </div>
    
        <div className='img-card'>
            <img src='party.avif' height='300px' width='380px' alt='tab'/>
            <h2>Hall Booking</h2>
            <nav>
            <Link to='/hall'>
            <button className='click-button'>Click</button>
            </Link>
            </nav>

        </div>
      </div>
      <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@s3restaurant.com</p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Address: 123 Main Street, City, Country</p>
        </div>
        <div className="footer-section">
          <h3>Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/table">Table Reservation</a></li>
            <li><a href="/order">Food Order</a></li>
            <li><a href="/hall">Hall Booking</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <ul className="social-links">
            <li><a href="https://www.facebook.com/s3restaurant">Facebook</a></li>
            <li><a href="https://www.twitter.com/s3restaurant">Twitter</a></li>
            <li><a href="https://www.instagram.com/s3restaurant">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} S^3 Restaurant. All rights reserved.</p>
      </div>
    </footer>
    </div>
    // </div>
  );
};

export default HomePage;
