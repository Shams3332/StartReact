import React, { Component } from 'react'
import cont from './Contact.module.css'

export  class Contact extends Component {
  render() {
    return (
      <div className={cont.contact}>
        <h1>CONTACT ME</h1>
        <div className={cont.icons}>
            <div className={cont.line1}></div>
            <i class="fa-solid fa-star fs-2 my-3 mx-3"></i>
            <div className={cont.line1}></div>
          </div>

          <form className='container w-50'>
          <div>
            <input
              type="text"
              className="form-control"
              id=""
              aria-describedby="emailHelp"
              placeholder="Name"
            ></input>
          </div>

          <div>
            <input
              type="text"
              className="form-control"
              id=""
              aria-describedby="emailHelp"
              placeholder="Phone Number"
            ></input>
          </div>

          <div>
            <input
              type="email"
              className="form-control"
              id=""
              placeholder="Email"
            ></input>
          </div>

          <div>
            <textarea
              className="form-control"
              id="txtarea"
              rows="4"
              placeholder="Message"
              maxlength="100"
            ></textarea>
          </div>
          <button type="submit" className={cont.btncontact}>
            Send 
          </button>
        </form>
    
      </div>
    )
  }
}
