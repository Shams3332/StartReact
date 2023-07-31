import React, { Component } from 'react';
import foot from './Footer.module.css';

export class Footer extends Component {
  render() {
    return (
      <footer>
        <div>
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className={foot.content}>
                  <h3>LOCATION</h3>
                  <p>2215 John Daniel Drive</p>
                  <p>Clark, MO 65243</p>
                </div>

              </div>

              <div className="col-lg-4">
                <div className={foot.content}>
                  <h3>AROUND THE WEB</h3>
                  <div className="footicons d-flex justify-content-center">
                    <div className={foot.icon}>
                  <i class="fa-brands fa-facebook-f"></i>
                  </div>
                  <div className={foot.icon}>
                  <i class="fa-brands fa-twitter"></i>
                  </div>
                  <div className={foot.icon}>
                  <i class="fa-brands fa-linkedin-in"></i>
                  </div>
                  <div className={foot.icon}>
                  <i class="fa-solid fa-globe"></i>
                  </div>
                  </div>
                </div>

              </div>

              <div className="col-lg-4">
                <div className={foot.content}>
                  <h3>ABOUT FREELANCER</h3>
                  <p>Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>
                </div>

              </div>


            </div>
          </div>

          <div className={foot.foot}>
            <p>Copyright © Your Website 2021</p>

          </div>
          </div>
        </footer>
    )
  }
}

