/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import star  from './Start.module.css';

export class Start extends Component {
  render() {
    return (
      <div className={star.start}>
        <div className={star.startcontect}>
        <img className=' w-50' src='/image/asset 0.svg'/>
          <h1>START REACT</h1>
          <div className={star.icons}>
            <div className={star.line1}></div>
            <i class="fa-solid fa-star fs-2 my-3 mx-3"></i>
            <div className={star.line1}></div>
          </div>
          <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
    )
  }
}

