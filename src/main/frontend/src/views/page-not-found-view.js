import React from 'react'
import {browserHistory} from 'react-router'

export default React.createClass({
  render () {
    return (
      <div className='page-not-found'>
        <p>Page not found!</p>
        <p className='back-button' onClick={this.goBack}>Click to go back!</p>
      </div>
    )
  },

  goBack () {
    browserHistory.goBack()
  }
})
