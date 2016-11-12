import React from 'react'

export default React.createClass({
  render () {
    return (
      <div className='card' style={{borderTopColor: this.props.color}}>
        {this.props.event_type ? this.renderEventType() : this.nothing()}
        {this.props.entity_id ? this.renderEntityId() : this.nothing()}
        {this.props.created_at ? this.renderCreatedAt() : this.nothing()}
        {this.props.event_time ? this.renderEventTime() : this.nothing()}
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

  renderEntityId () {
    return (
      <div className='row entity_id'>
        <p className='row-label'>ENTITY ID</p>
        <p className='row-value'>{this.props.entity_id}</p>
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

  renderEventTime () {
    return (
      <div className='row event_time'>
        <p className='row-label'>EVENT TIME</p>
        <p className='row-value'>{this.props.event_time}</p>
      </div>
    )
  },

  nothing () {

  }
})
