import React from 'react';
import './Registration Form CSS.css'
  
const MultipleInputs = () => {
  
    return(
        <body>
  <form>
  <video src='/videos/vid1.mp4' autoPlay loop muted />
    <div class="loginbox">
    

    <h1>Order Here</h1>
    
    <p>Tablets Name</p>
    <input type="text" name=""  placeholder="Medicines names" required/>
    <br></br> 
    <p>Quantity</p>
    <input type="text" name="" placeholder="enter quantity" required/>
    <br></br>
    <p>DOB</p>
    <input type="date" name="" required/>
    <br></br>
    <p>Mobile Number</p>
    <input type="tel" name="" placeholder="Your Mobile Number" required/>
    <br></br>
    <p>Email ID</p>
    <input type="email" name="" placeholder="Your Email ID" />
    <br></br>
    <p>Address</p>
    <input type="text" name="" placeholder=" Address" required/>
    <br></br>
    <button type="submit">Click to order</button>
    </div> 
      </form>
    </body>
    )
  }
  export default MultipleInputs;