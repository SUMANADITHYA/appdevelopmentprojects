import React, { useState } from 'react';
import './tables.css';
function Tables() {
  const [bookingStatus, setBookingStatus] = useState(false);

  // Function to handle booking submission
  const handleBookingSubmit = () => {
    // Perform booking logic here
    // If booking is successful, set the bookingStatus to true
    setBookingStatus(true);
  };

  return (
    <div className="booking-container">
      {bookingStatus ? (
        <p className="success-message">Your table is booked successfully!</p>
      ) : (
        <div className="booking-form">
          {/* Booking form goes here */}
          <button onClick={handleBookingSubmit}>Book Table</button>
        </div>
      )}
    </div>
  );
}

export default Tables;
