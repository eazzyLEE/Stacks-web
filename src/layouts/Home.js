import React, { Component } from 'react';
import logo from '../assets/stacks.png';
import profile from '../assets/user.png';
import mastercard from '../assets/mastercard.png';
import './styles.css';

export default class Home extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="top-box" />
          <div className="box-header">
            <img src={logo} alt="" className="logo" />
            <div>
              <p className="header-reference">REFERENCE ID</p>
              <p className="header-id">#994849839298</p>
            </div>
          </div>
          <div className="main">
            <p className="main-title">Get onboard with ease</p>

            <div className="name-grid">
              <div className="name-field">
                <div className="name-profile-box">
                  <img src={profile} alt='' className="user-profile" />
                </div>
                <input className="firstname-input" placeholder="First name" />
              </div>
              <div className="name-field">
                <div className="name-profile-box">
                  <img src={profile} alt='' className="user-profile" />
                </div>
                <input className="lastname-input" placeholder="Last name" />
              </div>
            </div>

            {/* <div className="email"> */}
              <div className="email-field">
                <div className="profile-box">
                  <img src={profile} alt='' className="user-profile" />
                </div>
                <input className="email-input" placeholder="Email address" />
              </div>
            {/* </div> */}

            <div className="card-form">
              <p className="flex-label">Name of Cardholder</p>
              <div class="card-row">
                <input className="card-input"/>
                <img src={mastercard} alt="" className="card-icon" />
              </div>
              <div className="card-details-row">
                <div className="card-number">
                  <p className="label">12 Digit Card Details</p>
                  <input className="card-number-input"/>
                </div>
                <div className="expiry">
                  <p className="label">Expiry Date</p>
                  <div className="card-expiry-row">
                    <input className="card-expiry-input"/>
                    <p className="stroke">/</p>
                    <input className="card-expiry-input"/>
                  </div>
                </div>
              </div>
              <div className="card-details-row">
                <div className="card-number">
                  <p className="label">Card Pin</p>
                  <input className="card-number-input"/>
                </div>
                <div className="expiry">
                  <p className="label">CVV2</p>
                  <input className="card-number-input"/>
                </div>
              </div>
            </div>

            <p className="pin-text">Create a Stack payment approval PIN</p>
            <div className="stack-pin-row">
              <div className="stack-pin">
                <input className="stack-pin-input" />
              </div>
              <div className="stack-pin">
                <input className="stack-pin-input" />
              </div>
              <div className="stack-pin">
                <input className="stack-pin-input" />
              </div>
              <div className="stack-pin">
                <input className="stack-pin-input" />
              </div>
            </div>

            <p className="sign-in">Sign In to your stacks account</p>
          </div>
        </div>
      </div>
    )
  }
}
