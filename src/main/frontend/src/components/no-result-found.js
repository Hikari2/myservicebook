import React from 'react'

export default React.createClass({
  render () {
    return (
      <div className='no-result-found'>
        <img src={'/images/nothing.png'} alt='nothing found'/>
      </div>
    )
  }
})
