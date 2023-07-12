import React from 'react';
import {Link } from 'react-router-dom';
// import './About.css';
import './HomePage.css';
function AboutPage() {
  return (
    <div>
        <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {/* <li>
          <Link to="/about">About</Link>
        </li> */}
        {/* Add more navigation links */}
      </ul>
    </nav>
      <h1>About</h1>
      <p>Welcome to our restaurant management system! We are dedicated to providing an efficient and seamless experience for both restaurant staff and customers.</p>
      <p>Our system allows restaurant owners to manage reservations, track orders, manage menus, and analyze sales data. Customers can easily make reservations, browse menus, and provide feedback.</p>
      <p>We strive to enhance the dining experience and streamline operations to ensure customer satisfaction and business success.</p>
      
    </div>
    
  );
}

export default AboutPage;
