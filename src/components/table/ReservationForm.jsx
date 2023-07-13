import React, { useState } from 'react';
import './ReservationForm.css';
import {Link} from 'react-router-dom';

function ReservationForm() {
  const [bookingName, setBookingName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [partySize, setPartySize] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
  };

  return (
    <div className="App">
      <h1>Table Reservation Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="booking-name">Booking Name:</label>
          <input
            type="text"
            id="booking-name"
            value={bookingName}
            onChange={(e) => setBookingName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="party-size">Party Size:</label>
          <input
            type="number"
            id="party-size"
            value={partySize}
            onChange={(e) => setPartySize(e.target.value)}
            min="1"
            required
          />
        </div>
        <div className="form-group">
          <nav>
          <Link to="/tables">
          <input type="submit" value="Submit" />
          </Link>
          </nav>
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;
