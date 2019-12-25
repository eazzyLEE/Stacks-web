import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/stacks.png';
import polygon from '../../assets/polygon.png';
import secure from '../../assets/secure.png';

import profile from '../../assets/user.png';
import './index.css';

export default class StackId extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="id-top-box" />
          <div className="id-box-header">
            <img src={logo} alt="" className="logo" />
          </div>
          <div className="id-main">
            <p className="main-title">NGN 24,700.00</p>

            <p className="sub-title">Please enter your Stack ID</p>


            {/* <div className="email"> */}
              <div className="id-email-field">
                <div className="id-profile-box">
                  <img src={profile} alt='' className="user-profile" />
                </div>
                <input className="id-email-input" placeholder="SJ0042" />
              </div>
            {/* </div> */}

            <div className="dashed-border" />

            <p className="new-text">New to Stacks?</p>

            <p className="sign-in-reg"><Link to="/register"><u className="create-id-click">Click here </u></Link>to create an ID in seconds</p>
            <Link to="/cards"><u className="return-text">RETURN TO MERCHANT SITE</u></Link>
          </div>
          <img src={polygon} alt="" className="polygon" />
          <div className="secure-row">
            <img src={secure} alt="" className="secure-img" />
            <p className="secure-text">SECURED BY STACK</p>
          </div>
        </div>
      </div>
    )
  }
}
