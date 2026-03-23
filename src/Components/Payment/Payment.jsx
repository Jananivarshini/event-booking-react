import React from 'react'
import paymentCSS from './../Payment/Payment.module.css'
import { useState } from 'react';
import Nav from '../Nav/Nav';

function Payment() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <><Nav/>
    <div className='container'>
    <div className={paymentCSS.name}>
      <h1>Book Your Event</h1>
      <form>
        <div>
          <label>Name:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div className={paymentCSS.email}
        >
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <button className='submit' type="submit">Pay Now</button>
      </form>
    </div>
    </div></>
  );
}

export default Payment;
  
