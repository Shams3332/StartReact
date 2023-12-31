/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import navbar from './Navbar.module.css';

export  class Navbar extends Component {
  render() {
    return (
      <>
    <nav className="navbar navbar-expand-lg fixed-top">
  <div className="container">
    <Link className="navbar-brand text-light fs-3 fw-bold" to="">START REACT</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-light py-2 rounded px-lg-3 fw-bold" aria-current="page" to={'Portfoli'}>PORTFOLIO</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light py-2 rounded px-lg-3 fw-bold" to={'About'}>ABOUT</Link>
        </li>       
        <li className="nav-item">
          <Link className="nav-link text-light py-2 rounded px-lg-3 fw-bold" to={'Contact'}>CONTACT</Link>
        </li>       
      </ul>
    
    </div>
  </div>
</nav>



      </>
    )
  }
}
