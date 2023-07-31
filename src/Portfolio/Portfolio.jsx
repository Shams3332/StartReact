/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import port from './Portfolio.module.css';

export  class Portfolio extends Component {
  render() {
    return (
      <>
      <div className={port.portfolio}>
        <h1>PORTFOLIO</h1>
        <div className={port.icons}>
            <div className={port.line1}></div>
            <i class="fa-solid fa-star fs-2 my-3 mx-3"></i>
            <div className={port.line1}></div>
          </div>
          
  <div className="container">

      <div className="row justify-content-center">
        {/* Portfolio Item 1*/}
        <div className="col-md-6 col-lg-4 mb-1 mt-3">
          <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
            <div className={port.portcontect}>
            <div className={port.portimg}>
              <img className='w-100 rounded-4' src='/image/asset 1.png'/>
            </div>
            <div className={port.layer}>                   
            <i class="fa-solid fa-plus"></i>
            </div>
          </div>



          </div>
        </div>
        {/* Portfolio Item 2*/}
        <div className="col-md-6 col-lg-4 mb-1 mt-3">
          <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal2">
            <div className={port.portcontect}>
            <div className={port.portimg}>
              <img className='w-100 rounded-4' src='/image/asset 2.png'/>
            </div>
            <div className={port.layer}>                   
            <i class="fa-solid fa-plus"></i>
            </div>
          </div>



          </div>
        </div>
        {/* Portfolio Item 3*/}
        <div className="col-md-6 col-lg-4 mb-1 mt-3">
          <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal3">
            <div className={port.portcontect}>
            <div className={port.portimg}>
              <img className='w-100 rounded-4' src='/image/asset 3.png'/>
            </div>
            <div className={port.layer}>                   
            <i class="fa-solid fa-plus"></i>
            </div>
          </div>



          </div>
        </div>
        {/* Portfolio Item 4*/}
        <div className="col-md-6 col-lg-4 mb-1 mt-3">
          <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal4">
            <div className={port.portcontect}>
            <div className={port.portimg}>
              <img className='w-100 rounded-4' src='/image/asset 4.png'/>
            </div>
            <div className={port.layer}>                   
            <i class="fa-solid fa-plus"></i>
            </div>
          </div>



          </div>
        </div>
        {/* Portfolio Item 5*/}
        <div className="col-md-6 col-lg-4 mb-1 mt-3">
          <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal5">
            <div className={port.portcontect}>
            <div className={port.portimg}>
              <img className='w-100 rounded-4' src='/image/asset 5.png'/>
            </div>
            <div className={port.layer}>                   
            <i class="fa-solid fa-plus"></i>
            </div>
          </div>



          </div>
        </div>
        {/* Portfolio Item 6*/}
        <div className="col-md-6 col-lg-4 mb-1 mt-3">
          <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal6">
            <div className={port.portcontect}>
            <div className={port.portimg}>
              <img className='w-100 rounded-4' src='/image/asset 6.png'/>
            </div>
            <div className={port.layer}>                   
            <i class="fa-solid fa-plus"></i>
            </div>
          </div>



          </div>
        </div>
      </div>

  </div>
</div>





<div>
  {/* Portfolio Modal 1*/}
  <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex={-1} aria-labelledby="portfolioModal1" aria-hidden="true">
    <div className="modal-dialog modal-xl">
      <div className="modal-content">
        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close" /></div>
        <div className="modal-body text-center pb-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                {/* Portfolio Modal - Title*/}
                <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Log Cabin</h2>
                {/* Icon Divider*/}
                <div className="divider-custom">
                  <div className="divider-custom-line" />
                  <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                  <div className="divider-custom-line" />
                </div>
                {/* Portfolio Modal - Image*/}
                <img className="img-fluid rounded mb-5" src='/image/asset 1.png' alt="..." />
                {/* Portfolio Modal - Text*/}
                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                <button className="btn btn-primary" data-bs-dismiss="modal">
                  <i className="fas fa-xmark fa-fw" />
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Portfolio Modal 2*/}
  <div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex={-1} aria-labelledby="portfolioModal2" aria-hidden="true">
    <div className="modal-dialog modal-xl">
      <div className="modal-content">
        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close" /></div>
        <div className="modal-body text-center pb-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                {/* Portfolio Modal - Title*/}
                <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Tasty Cake</h2>
                {/* Icon Divider*/}
                <div className="divider-custom">
                  <div className="divider-custom-line" />
                  <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                  <div className="divider-custom-line" />
                </div>
                {/* Portfolio Modal - Image*/}
                <img className="img-fluid rounded mb-5" src='/image/asset 2.png' alt="..." />
                {/* Portfolio Modal - Text*/}
                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                <button className="btn btn-primary" data-bs-dismiss="modal">
                  <i className="fas fa-xmark fa-fw" />
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Portfolio Modal 3*/}
  <div className="portfolio-modal modal fade" id="portfolioModal3" tabIndex={-1} aria-labelledby="portfolioModal3" aria-hidden="true">
    <div className="modal-dialog modal-xl">
      <div className="modal-content">
        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close" /></div>
        <div className="modal-body text-center pb-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                {/* Portfolio Modal - Title*/}
                <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Circus Tent</h2>
                {/* Icon Divider*/}
                <div className="divider-custom">
                  <div className="divider-custom-line" />
                  <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                  <div className="divider-custom-line" />
                </div>
                {/* Portfolio Modal - Image*/}
                <img className="img-fluid rounded mb-5" src='/image/asset 3.png' alt="..." />
                {/* Portfolio Modal - Text*/}
                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                <button className="btn btn-primary" data-bs-dismiss="modal">
                  <i className="fas fa-xmark fa-fw" />
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Portfolio Modal 4*/}
  <div className="portfolio-modal modal fade" id="portfolioModal4" tabIndex={-1} aria-labelledby="portfolioModal4" aria-hidden="true">
    <div className="modal-dialog modal-xl">
      <div className="modal-content">
        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close" /></div>
        <div className="modal-body text-center pb-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                {/* Portfolio Modal - Title*/}
                <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Controller</h2>
                {/* Icon Divider*/}
                <div className="divider-custom">
                  <div className="divider-custom-line" />
                  <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                  <div className="divider-custom-line" />
                </div>
                {/* Portfolio Modal - Image*/}
                <img className="img-fluid rounded mb-5" src='/image/asset 4.png' alt="..." />
                {/* Portfolio Modal - Text*/}
                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                <button className="btn btn-primary" data-bs-dismiss="modal">
                  <i className="fas fa-xmark fa-fw" />
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Portfolio Modal 5*/}
  <div className="portfolio-modal modal fade" id="portfolioModal5" tabIndex={-1} aria-labelledby="portfolioModal5" aria-hidden="true">
    <div className="modal-dialog modal-xl">
      <div className="modal-content">
        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close" /></div>
        <div className="modal-body text-center pb-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                {/* Portfolio Modal - Title*/}
                <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Locked Safe</h2>
                {/* Icon Divider*/}
                <div className="divider-custom">
                  <div className="divider-custom-line" />
                  <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                  <div className="divider-custom-line" />
                </div>
                {/* Portfolio Modal - Image*/}
                <img className="img-fluid rounded mb-5" src='/image/asset 5.png' alt="..." />
                {/* Portfolio Modal - Text*/}
                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                <button className="btn btn-primary" data-bs-dismiss="modal">
                  <i className="fas fa-xmark fa-fw" />
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Portfolio Modal 6*/}
  <div className="portfolio-modal modal fade" id="portfolioModal6" tabIndex={-1} aria-labelledby="portfolioModal6" aria-hidden="true">
    <div className="modal-dialog modal-xl">
      <div className="modal-content">
        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close" /></div>
        <div className="modal-body text-center pb-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                {/* Portfolio Modal - Title*/}
                <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Submarine</h2>
                {/* Icon Divider*/}
                <div className="divider-custom">
                  <div className="divider-custom-line" />
                  <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                  <div className="divider-custom-line" />
                </div>
                {/* Portfolio Modal - Image*/}
                <img className="img-fluid rounded mb-5" src='/image/asset 6.png' alt="..." />
                {/* Portfolio Modal - Text*/}
                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                <button className="btn btn-primary" data-bs-dismiss="modal">
                  <i className="fas fa-xmark fa-fw" />
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</>
          
    )
  }
}
