import React from 'react'
import Footer from '../components/footer'

const options = {
  email: {
    placeholder: 'Email'
  },
  password: {
    placeholder: 'Password'
  },
  submitButton: {
    text: 'Submit'
  }
}

export default React.createClass({
  propTypes: {
    options: React.PropTypes.object,
    onChange: React.PropTypes.func,
    onSubmit: React.PropTypes.func
  },

  onChange (e) {
    if (this.props.onChange) {
      this.props.onChange(e.target, e.target.value, e)
    }
  },

  onSubmit (e) {
    e.preventDefault()
    if (this.props.onSubmit) {
      this.props.onSubmit(e)
    }
  },

  render () {
    return (
      <div className='login-view'>
        <div className='main-container' style={{backgroundImage: 'url(/images/city.jpg)'}}>
          <div className='title-wrapper'>
            <img className='house-logo' src={'/images/house.png'} alt='logo'/>
            <p className='title'>MyServiceBook</p>
            <p className='sub-title'>A DIGITAL SERVICE BOOK FOR YOUR HOUSE</p>
          </div>
          <form className='login-form'>
            <input type='email' onChange={this.onChange} placeholder={options.email.placeholder} />
            <input type='password' onChange={this.onChange} placeholder={options.password.placeholder} />
            <input type='submit' className='submit-button' value='LOG IN'/>
            <input type='submit' className='register-button' value='REGISTER'/>
          </form>
        </div>
        <Footer />
      </div>
    )
  }
})
