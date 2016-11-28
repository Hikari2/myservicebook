import React from 'react'

export default React.createClass({

  render () {
    return (
      <div className='view-header' style={{backgroundImage: 'url(/images/city.jpg)'}}>
        <p>{this.props.heading}</p>
      </div>
    )
  }
})
