import React, { useState } from 'react';
import './Delivery.css'; // Import your CSS file

const Delivery = () => {
  const [orderItems, setOrderItems] = useState([
    { name: 'Burger', price: 8.99, quantity: 0 },
    { name: 'Pizza', price: 10.99, quantity: 0 },
    { name: 'Fries', price: 3.99, quantity: 0 },
  ]);

  const handleQuantityChange = (index, quantity) => {
    const updatedItems = [...orderItems];
    updatedItems[index].quantity = quantity;
    setOrderItems(updatedItems);
  };

  const getTotalPrice = () => {
    let totalPrice = 0;
    orderItems.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice.toFixed(2);
  };

  return (
    <div className="food-delivery-container">
      <div className="header">
        <h1>Food Delivery</h1>
      </div>
      <div className="content">
        <div className="delivery-info">
          <h2>Delivery Address</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <textarea id="address" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input type="tel" id="phone" required />
            </div>
            <button type="submit">Place Order</button>
          </form>
        </div>
        <div className="order-summary">
          <h2>Order Summary</h2>
          <ul>
            {orderItems.map((item, index) => (
              <li key={index}>
                <span>{item.name}</span>
                <div className="quantity-controls">
                  <button
                    onClick={() =>
                      handleQuantityChange(index, item.quantity > 0 ? item.quantity - 1 : 0)
                    }
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleQuantityChange(index, item.quantity + 1)}>+</button>
                </div>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="total">
            <span>Total:</span>
            <span>${getTotalPrice()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
