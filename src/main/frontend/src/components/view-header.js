import React from 'react'

export default React.createClass({

  render () {
    return (
      <div className='view-header'>
        <p>{this.props.heading}</p>
      </div>
    )
  }
})
