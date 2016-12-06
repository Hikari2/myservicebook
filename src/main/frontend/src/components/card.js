import React from 'react'
import FaBed from 'react-icons/lib/fa/bed'
import FaStar from 'react-icons/lib/fa/star'

export default React.createClass({
  render () {
    return (
      <div className='card-wrapper'>
        <div className='col card-date'>
          {this.props.event_type ? this.renderEventLogo() : this.nothing()}
          {this.props.event_date ? this.renderEventDate() : this.nothing()}
        </div>
        <div className='card' style={{borderTopColor: this.props.color}}>
          <div className='col'>
            {this.props.event_type ? this.renderEventType() : this.nothing()}
            {this.props.event_room ? this.renderEventRoom() : this.nothing()}
            {this.props.event_info ? this.renderEventInfo() : this.nothing()}
          </div>
          <div className='col'>
            {this.renderEventConfimed(this.props.event_confirmed)}
            <p>By: {this.props.event_confirm_name ? this.props.event_confirm_name : '-'}</p>
            <p>{this.props.event_confirm_company ? this.props.event_confirm_company : this.nothing()}</p>
          </div>
          <div className='col'>
            <p>Attachments:</p>
          </div>
        </div>
      </div>
    )
  },

  renderEventLogo () {
    return (
      <div>
        <FaBed size={86} />
      </div>
    )
  },

  renderEventDate () {
    return (
      <div>
        <p className='row-date'>{this.props.event_date}</p>
      </div>
    )
  },

  renderEventRoom () {
    return (
      <div className='row'>
        <p>{`Room: ${this.props.event_room}`}</p>
      </div>
    )
  },

  renderEventInfo () {
    return (
      <div>
        <p>{`Info: ${this.props.event_info}`}</p>
      </div>
    )
  },

  renderEventType () {
    return (
      <div className='row event_type'>
        <p className='card-title'>{this.props.event_type}</p>
      </div>
    )
  },

  renderEventConfimed (isConfirmed) {
    return (
      <div className='row'>
        <p>Confirmed: </p>
        <div className='card-star'>{isConfirmed ? (<FaStar color='green' />) : (<FaStar color='#7f7f7f'/>)}</div>
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
