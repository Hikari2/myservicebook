import React from 'react'

export default React.createClass({
  render () {
    return (
      <div className='time-line'>
        <div className='time-line-header'>
        </div>
        {this.props.items.map((data, i) => {
          return (
            <div className='time-line-block' key={i}>
              <div className={`time-line-path ${this.getDirection(i)}`}/>
              <div className={`time-line-card ${this.getDirection(i)}`}>
                {data}
              </div>
            </div>
          )
        })}
      </div>
    )
  },

  getDirection (i) {
    return 'left'
  }
})
