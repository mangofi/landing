import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import Icons from "./components/Icons";
import MangoLogo  from "./components/MangoLogo";

import Api from "./lib/api";
import {validateEmail} from "./lib/validations"

const App = () => {
  const [loading, setLoading] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [email, setEmail] = useState('');
  
  const onMailSubmit = async e => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      return
    }

    setLoading(true);

    await Api.emailSignup(email);

    setLoading(() => {
      setRegistered(true)

      return false
    })
  };
  
  const onEmailChange = (text) => {
    setEmail(text);
    setValidEmail(validateEmail(text));
  }
  
  const thankYouMessage = (
    <div className="mb-5">
      <p className="thank-you-text">Thank you for subscribing!</p>
      <p className="thank-you-text">We’ll notify you when we launch</p>
      <p className="more-info-text">
        In the meanwhile, you can connect with us below
      </p>
    </div>
  )

  return (
    <div className="bg-image">
      <div className="content">
        <h1 className="main-title text-center text-sm-left">The new flavor of DeFi</h1>
        <form onSubmit={onMailSubmit}>
          <div className="form-content">
            {registered ? thankYouMessage : (
              <>
                <div className="row">
                  <div className="col">
                    <h2 className="subtitle text-sm-left">Sign up for early access and launch updates</h2>
                  </div>
                </div>
                <div className="row email-wrapper no-gutters">
                  <div className="col email-container">
                    <input
                      className={`form-control email-input ${!validEmail && email.trim().length > 0 ? 'is-invalid' : ''}`}
                      id="email"
                      disabled={loading}
                      type="email"
                      placeholder="Enter email address"
                      autoFocus={true}
                      onChange={(event) => { onEmailChange(event.target.value) }}
                      value={email}
                    />
                    <button className="btn btn-primary btn-block btn-submit px-3 d-sm-none" disabled={loading || !validEmail}>
                      Notify me
                    </button>
                  </div>
                  <div className="col d-none d-sm-inline-block">
                    <button className="btn btn-primary btn-submit px-5 ml-2" disabled={loading || !validEmail}>
                      Notify me
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
          <Icons />
        </form>
      </div>
      <MangoLogo />
    </div>
  )
};

export default App;
