import React from 'react'
import Footer from '../components/footer'
import LoadingIcon from '../components/loading-icon'
import { login } from '../constants/data'

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
  getInitialState () {
    return ({
      loading: false,
      email: '',
      password: '',
      error: null
    })
  },

  onEmailChange (e) {
    this.setState({email: e.target.value})
  },

  onPasswordChange (e) {
    this.setState({password: e.target.value})
  },

  login () {
    this.setState({loading: true, error: ''})
    setTimeout(() => {
      this.setState({loading: false})
      if (this.verifyLogin()) {
        this.props.history.push('/overview')
      } else {
        this.setState({error: 'Something went wrong, make sure you have the right credentials'})
      }
    }, 2000)
  },

  verifyLogin () {
    let result = false
    login.forEach((data) => {
      if (data.email === this.state.email && data.password === this.state.password) {
        result = true
      }
    })
    return result
  },

  render () {
    return (
      <div className='login-view'>
        <div className='main-container'>
          <div className='title-wrapper'>
            <img className='house-logo' src={'http://i.imgur.com/gMHvxKo.png'} alt='logo'/>
            <p className='title'>MyServiceBook</p>
            <p className='sub-title'>A DIGITAL SERVICE BOOK FOR YOUR HOUSE</p>
          </div>
          {this.state.error ? <p className='erro-text'>{this.state.error}</p> : ''}
          {this.state.loading ? <LoadingIcon /> : this.renderForm()}
        </div>
        <Footer />
      </div>
    )
  },

  renderForm () {
    return (
      <div className='login-form'>
        <input type='email' onChange={this.onEmailChange} placeholder={options.email.placeholder} />
        <input type='password' onChange={this.onPasswordChange} placeholder={options.password.placeholder} />
        <input type='submit' onClick={this.login} className='submit-button' value='LOG IN'/>
        <input type='submit' className='register-button' value='REGISTER'/>
      </div>
    )
  }

})
