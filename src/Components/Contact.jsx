import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Styles/Contact.css";
import { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faHomeUser, faEnvelopeCircleCheck, faMobileAndroid } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Contact() {
  library.add(fas, faHomeUser, faEnvelopeCircleCheck, faMobileAndroid);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    let data = {
        userName: name,
        userEmail: email,
        textMessage: text
    }
    console.log(data);
    window.location.href = "/";
  }


  return (
    <div className="container-fluid" id="reachme">
      <div className="row">
        <div className="col-sm-6 d-flex justify-content-center align-items-center">
          <div className="detailsWrap d-flex flex-column justify-content-center">
            <div className="address d-flex">
              <div className="icon d-flex flex-column justify-content-center">
                <FontAwesomeIcon icon={faHomeUser} />
              </div>
              <div className="data mx-3">
                <h4><b>Address: </b></h4>
                <p>91/5 J.K. Street, Berkhamsted, Hertfordshire County-HP4 1HU, UK</p>
              </div>
            </div>
            <div className="email d-flex">
              <div className="icon d-flex flex-column justify-content-center">
                <FontAwesomeIcon icon={faEnvelopeCircleCheck} />
              </div>
              <div className="data mx-3">
                <h4><b>Email-Id: </b></h4>
                <p>aryandrums.uk@gmail.com, bookshow.aryan@gmail.com</p>
              </div>
            </div>
            <div className="phone d-flex">
              <div className="icon d-flex flex-column justify-content-center">
                <FontAwesomeIcon icon={faMobileAndroid} />
              </div>
              <div className="data mx-3">
                <h4><b>Mobile-No: </b></h4>
                <p>(+22)-01442-871397, (+22)-89652-52307</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 d-flex align-items-center justify-content-center">
          <div className="formWrap d-flex flex-column align-items-center justify-content-center">
            <h2>Reach Me for any Query</h2>
            <form onSubmit={(e) => handleFormSubmit(e)}>
              <label htmlFor="name">Your Name: </label><br />
              <input type="text" name="name" id="name" required onChange={(e) => setName(e.target.value)}/><br />

              <label htmlFor="email">Your Email: </label><br />
              <input type="email" name="email" id="email" required onChange={(e) => setEmail(e.target.value)}/><br />

              <label htmlFor="text">Your Message: </label><br />
              <input type="text" name="text" id="text" required onChange={(e) => setText(e.target.value)}/><br />

              <button type="submit">Submit-Form</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact