import React from 'react'

export default React.createClass({
  render () {
    return (
      <div className='card' style={{borderTopColor: this.props.color}}>
        {this.props.event_type ? this.renderEventType() : this.nothing()}
        {this.props.event_name ? this.renderEventName() : this.nothing()}
        {this.props.created_at ? this.renderCreatedAt() : this.nothing()}
        {this.props.event_image ? this.renderEventImage() : this.nothing()}
      </div>
    )
  },

  renderEventType () {
    return (
      <div className='row event_type'>
        <p className='row-label'>EVENT TYPE</p>
        <p className='row-value'>{this.props.event_type}</p>
      </div>
    )
  },

  renderEventName () {
    return (
      <div className='row event_name'>
        <p className='row-label'>EVENT NAME</p>
        <p className='row-value'>{this.props.event_name}</p>
      </div>
    )
  },

  renderCreatedAt () {
    return (
      <div className='row created_at'>
        <p className='row-label'>CREATED AT</p>
        <p className='row-value'>{this.props.created_at}</p>
      </div>
    )
  },

  renderEventImage () {
    return (
      <div className='row event_image'>
        <p className='row-label'>EVENT IMAGE</p>
        <p className='row-value'>{this.props.event_image}</p>
      </div>
    )
  },

  nothing () {

  }
})
