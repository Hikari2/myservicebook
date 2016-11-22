import React from 'react'

export default React.createClass({
  propTypes: {
    options: React.PropTypes.object,
    onChange: React.PropTypes.func,
    onSubmit: React.PropTypes.func
  },

  onChange (e) {
    if (this.props.onChange) {
      this.props.onChange(e.target, e.target.value, e)
    };
  },

  onSubmit (e) {
    e.preventDefault()
    if (this.props.onSubmit) {
      this.props.onSubmit(e)
    };
  },

  render () {
    let options = {
      email: {
        // label: 'Email',
        placeholder: 'Email'
      },
      password: {
        // label: 'Password',
        placeholder: 'Password'
      },
      submitButton: {
        text: 'Submit'
      }
    }
    options = Object.assign(options, this.props.options || {})
    return <div className='login-auth'>
      <div className='Intro'>
        <h3>my<span>Service</span>Book</h3>
        <text className='moto'>A DIGITAL SERVICE BOOK FOR YOUR HOUSE</text>
      </div>
      <form className='login-form'>
        <div className='email'>
          <label>{options.email.label}</label>
          <input type='email' onChange={this.onChange} className='form-control' placeholder={options.email.placeholder} />
        </div>
        <div className='pwd'>
          <label>{options.password.label}</label>
          <input type='password' onChange={this.onChange} className='form-control' placeholder={options.password.placeholder} />
        </div>
        <div className='submit'>
          <input className='submit-button' value='Log In' type='submit'/>
        </div>
        <div className='register'>
          <input className='register-button' value='Register' type='submit'/>
        </div>
      </form>
    </div>
  }
})
