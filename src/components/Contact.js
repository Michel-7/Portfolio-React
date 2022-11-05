import React from "react";

function Contact(props) {
  return (
    <div className="contact" id="contact">
      <div className="c-us">
        <h2>Contact Me</h2>
      </div>
      <div className="container">
        <div className="contactInfo">
          <div className="box">
            <div className="icon">
              <i className="bi bi-geo-alt"></i>
            </div>
            <div className="text">
              <h3>Address</h3>
              <p>Beirut,Lebanon</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <i className="bi bi-telephone"></i>{" "}
            </div>
            <div className="text">
              <h3>Phone</h3>
              <p>71908924</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <i className="bi bi-envelope"></i>{" "}
            </div>
            <div className="text">
              <h3>Email</h3>
              <p>Aoun.M@outlook.com</p>
            </div>
          </div>
        </div>
        <div className="contactForm">
          <form action="https://formsubmit.co/Aoun.M@outlook.com" method="POST">
            <h2>Send Message</h2>
            <div className="inputBox">
              <input type="text" name="name" required="required" />
              <span>Full Name</span>
            </div>
            <div className="inputBox">
              <input type="text" name="email" required="required" />
              <span>Email</span>
            </div>
            <div className="inputBox">
              <textarea name="message" required="required"></textarea>
              <span>Message...</span>
            </div>
            <div className="inputBox">
              <input type="submit" name="" value="Send" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
