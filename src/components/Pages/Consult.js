import React from 'react';
import './Registration Form CSS.css'
  
const MultipleInputs = () => {
  
    return(
        <body>
  <form>
  <video src='/videos/vid1.mp4' autoPlay loop muted />
    <div class="loginbox">
    

    <h1>Book you're doctor now </h1>
    
    <p>Docotors ID Name</p>
    <input type="text" name=""  placeholder="Doctor UID" required/>
    <br></br> 
    <p>Doctor name</p>
    <input type="text" name="" placeholder="Doctor Name" required/>
    <br></br>
    <p>Date Of Consultancy</p>
    <input type="date" name="date" required/>
    <br></br>
    <p>User Mobile Number</p>
    <input type="tel" name="" placeholder="Your Mobile Number" required/>
    <br></br>
    <p>User Email ID</p>
    <input type="email" name="" placeholder="Your Email ID" />
    <br></br>
    <p>User Address</p>
    <input type="text" name="" placeholder="you're Address" required/>
    <br></br>
    <button type="submit">Click Here to book the doctor</button>
    </div> 
      </form>
    </body>
    )
  }
  export default MultipleInputs;