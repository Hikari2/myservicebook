import React from 'react'
import ReactDOM from 'react-dom'

export default React.createClass({
  getInitialState () {
    return ({

    })
  },
  handleClick: function (e) {
    if (this.state.isOpen && !ReactDOM.findDOMNode(this).contains(e.target)) {
      this.setState({isOpen: false})
      return
    }
  },

  componentWillMount: function () {
    document.addEventListener('click', this.handleClick, false)
  },

  componentWillUnmount: function () {
    document.removeEventListener('click', this.handleClick, false)
  },

  render () {
    return (
      <div className='drop-down-button'>
        <div className='button'
          onClick={() => this.setState({isOpen: true})}>
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
                  onClick={() => { data.onClick() }}
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
