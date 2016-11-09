import React from 'react'

export default React.createClass({
  render () {
    return (
      <div className='time-line'>
        <div className='time-line-header'>
          <p className='time-line-title'>Entity ID: {this.props.title}</p>
        </div>
        {this.props.items.map((data, i) => {
          return (
            <div className='time-line-block' key={i}>
              <div className={`time-line-card ${this.getDirection(i)}`}>
                {data}
              </div>
              <div className={`time-line-pointer ${this.getDirection(i)}`}/>
              <div className={`time-line-path ${this.getDirection(i)}`}/>
            </div>
          )
        })}
      </div>
    )
  },

  getDirection (i) {
    return i % 2 === 0 ? 'left' : 'right'
  }
})
