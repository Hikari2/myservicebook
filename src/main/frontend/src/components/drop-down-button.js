import React from 'react'

export default React.createClass({
  getInitialState () {
    return ({
      isOpen: false
    })
  },

  render () {
    return (
      <div className='drop-down-button'>
        <div className='button' onClick={() => this.setState({isOpen: !this.state.isOpen})}>
          <p>{this.props.title}</p>
        </div>
        {this.state.isOpen ? this.renderDropDown() : ''}
      </div>
    )
  },

  renderDropDown () {
    return (
      <div className='menu'>
        <ul>
          {
            this.props.options.map((data, i) => {
              return (
                <li
                  onClick={() => {
                    data.onClick()
                    this.setState({isOpen: !this.state.isOpen})
                  }}
                  key={`item-${i}`}>
                  {data.icon ? <i className={`fa ${data.icon}`} /> : ''}
                  <p>{data.label}</p>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
})
