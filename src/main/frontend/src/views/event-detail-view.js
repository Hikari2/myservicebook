import React from 'react'
import API from '../api'
import LoadingIcon from '../components/loading-icon'
import JsonPretty from 'react-json-pretty'
import moment from 'moment'
import DetailPanel from '../components/detail-panel'

export default React.createClass({
  getInitialState () {
    return {
      event: null
    }
  },

  componentDidMount () {
    this.fetchEvent()
  },

  render () {
    return (
      this.state.event ? this.renderView() : <LoadingIcon />
    )
  },

  renderView () {
    return (
      <div className='event-detail'>
        <p className='id-label'>#{this.state.event.id}</p>
        <DetailPanel items={[{label: 'TOPIC', data: this.state.event.topic},
          {label: 'CONSUMER', data: this.state.event.consumer},
          {label: 'ENTITY ID', data: this.state.event.entity_id},
          {label: 'CHECKSUM', data: this.state.event.checksum},
          {label: 'EVENT TYPE', data: this.state.event.event_type},
          {label: 'EVENT VERSION', data: this.state.event.event_version},
          {label: 'EVENT TIME', data: this.state.event.event_time}
        ]}/>
        <div className='payload-section'>
          <p className='payload-label'>PAYLOAD DATA</p>
          <JsonPretty className='payload-panel' json={this.state.event.payload}/>
        </div>
      </div>
    )
  },

  fetchEvent () {
    API.Event
      .byId({id: this.props.routeParams.id})
      .then((response) => {
        let event = Object.assign({}, response.data)
        event.event_time = moment(new Date(event.event_time)).format('MMMM Do YYYY, h:mm:ss a')
        this.setState({event})
      })
  }
})
