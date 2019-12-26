import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/stacks.png';
import polygon from '../../assets/polygon.png';
import verve from '../../assets/verve-stacks.png';
import visa from '../../assets/visa-stacks.png';
import checkbox from '../../assets/checkbox.png';
import mastercard from '../../assets/mastercard.png';
import forwardArrow from '../../assets/forward-arrow.png';
import addCircle from '../../assets/add-circle.png';

import './index.css';

export default class StackCards extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="cards-top-box" />
          <div className="cards-box-header">
            <img src={logo} alt="" className="logo" />
            <div>
              <p className="header-reference">REFERENCE ID</p>
              <p className="header-id">#994849839298</p>
            </div>
          </div>
          <div className="cards-main">
            <p className="main-title">NGN 24,700.00</p>

            <p className="hello-user">Hello, Samuel</p>
            <p className="user-intro">Please select a card and enter your Stack PIN to authorize payment</p>

            <div className="card-option">
              <img src={verve} alt="" className="merchant" />
              <p className="card-number">5399 **** 1444</p>
              <img src={checkbox} alt="" className="checkbox"/>
            </div>
            <div className="cards-dashed-border" />

            <div className="card-option">
              <img src={visa} alt="" className="merchant" />
              <p className="card-number">4322 **** 2343</p>
              <img src={checkbox} alt="" className="checkbox"/>
            </div>
            <div className="cards-dashed-border" />

            <div className="card-option">
              <img src={mastercard} alt="" className="merchant" />
              <p className="card-number">5233 **** 2014</p>
              <img src={checkbox} alt="" className="checkbox"/>
            </div>
            <div className="cards-dashed-border" />

            <button className="new-card-btn">
              <p className="btn-text">ADD A NEW CARD</p>
              <img src={addCircle} alt="" className="add-circle" />
            </button>
            <button className="new-card-btn">
              <p className="btn-text">AUTHORIZE PAYMENT</p>
              <img src={forwardArrow} alt="" className="add-circle" />
            </button>
            <u className="cards-return-text">RETURN TO MERCHANT SITE</u>
          </div>
          <img src={polygon} alt="" className="cards-polygon" />
        </div>
      </div>
    )
  }
}
