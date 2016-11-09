import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  getInitialState () {
    return { focused: -1 }
  },

  clicked (index) {
    this.setState({focused: index})
  },

  render () {
    let self = this
    return (
      <div className='nav-bar'>
        <ul>
          <li className='nav-bar-logo'>
            <Link className='nav-bar-link' to={'/'}>
              <img className='icon' src={'/images/logo.png'} alt='logo' onClick={self.clicked.bind(self, 0)}/>
            </Link>
          </li>
          {
            this.props.options.map((item, index) => {
              let style = ''
              if (this.state.focused === index) {
                style = 'focused'
              }
              return (
                <li className={`nav-bar-option ${style}`} key={index}>
                  <Link className='nav-bar-link' to={item.link} onClick={self.clicked.bind(self, index)}>
                    <p>{item.label}</p>
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
})
