import React, { Component } from 'react'
import about from './About.module.css'

export class About extends Component {
  render() {
    return (
      <div className={about.About}>
        <h1>ABOUT</h1>
        <div className={about.icons}>
            <div className={about.line1}></div>
            <i class="fa-solid fa-star fs-2 my-3 mx-3"></i>
            <div className={about.line1}></div>
          </div>
          <div className={about.aboutcontent}>
            <div className={about.about1}>
              <p>Freelancer is a free bootstrap theme 
                created by Route. The download 
                includes the complete source files 
                including HTML, CSS, and JavaScript 
                as well as optional SASS stylesheets
                  for easy customization.</p>
            </div>
            <div className={about.about2}>
              <p>You can create your own custom 
                avatar for the masthead, change the 
                icon in the dividers, and add your 
                email address to the contact form to
                  make it fully functional!</p>
            </div>
          </div>
      </div>
    )
  }
}
