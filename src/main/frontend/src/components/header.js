import React from 'react'

export default React.createClass({

  render () {
    return (
      <div className='header'>
        <h1>{this.props.text}</h1>
        <div className='children'>{this.props.children}</div>
      </div>
    )
  }
})
