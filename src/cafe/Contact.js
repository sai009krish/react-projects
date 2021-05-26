import React from 'react';
import './Contact.css';


function Contact() {
    return (
        <div className="contact">
          <div className="left2">
           <h3> CONTACT US</h3>
           <h2>Here You Can Make A Reservation <br></br> Or Just walkin to our cafe</h2>
           <h4>Donec pretium est orci, non vulputate arcu hendrerit a. Fusce a eleifend <br></br>riqsie, namei sollicitudin urna diam, sed commodo purus porta ut.</h4>
             <div className="cards">
           <div className="card1">
           <h5>Phone Numbers</h5>
             <p>080-090-0990</p>
             <p>080-090-0880</p>
           </div>
           <div className="card2">
              <h5>Emails</h5>
              <p>hello@company.com</p>
              <p>info@company.com</p>
           </div>
           </div>
          </div>
          <div className="right2">
             <h2>Table Reservation</h2>
            <input type="text" placeholder="Your Name *"></input> 
            <input type="text" placeholder="Your Email Address"></input> <br></br>
            <input type="text" placeholder="Phone Number"></input> 
            <input type="text" placeholder="Number of Guests"></input> <br></br>
            <input type="date" placeholder="dd/mm/yyyy"></input> 
            <input type="time" placeholder="Time"></input> <br></br>
             <span><input type="text" placeholder="Message"></input> </span> <br></br>
             <a href="#">Make a Reservation</a>
          </div>
        </div>
    )
}

export default Contact;
