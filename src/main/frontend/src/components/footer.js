import React from 'react'

export default React.createClass({

  render () {
    return (
      <div className='footer-distributed'>
        <div className='footer-left'>
          <h3>my<span>Service</span>Book</h3>
          <p className='footer-links'>
            <a href='#'>Home</a>
            ·
            <a href='#'>Pricing</a>
            ·
            <a href='#'>About</a>
            ·
            <a href='#'>FAQ</a>
            ·
            <a href='#'>Contact Us</a>
          </p>
          <p className='footer-company-name'>myServiceBook &copy; 2016</p>
        </div>
        <div className='footer-center'>
          <div>
            <i className='fa fa-map-marker'></i>
            <p><span>Royal Institiute of Technology, KTH</span> Stockholm, Sweden</p>
          </div>
          <div>
            <i className='fa fa-phone'></i>
            <p>+46 111 123456</p>
          </div>
          <div>
            <i className='fa fa-envelope'></i>
            <p><a href='mailto:support@myservicebook.com'>support@myservicebook.com</a></p>
          </div>
        </div>

        <div className='footer-right'>
          <p className='footer-company-about'>
            <span>Our Mission</span>
            myServiceBook is a digital service book for your house where you can keep track of, organise, share, and plan anything related to your home!
            So, all we want, is to make your life easier.
          </p>
          <div className='footer-icons'>
            <a href='#'><i className='fa fa-facebook'></i></a>
            <a href='#'><i className='fa fa-twitter'></i></a>
            <a href='#'><i className='fa fa-linkedin'></i></a>
          </div>
        </div>
      </div>
    )
  }
})
