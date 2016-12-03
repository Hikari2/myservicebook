import React from 'react'
// import API from '../api'
import Card from '../components/card'
import LoadingIcon from '../components/loading-icon'
import NoResultFound from '../components/no-result-found'
import Header from '../components/header'
import FilterInputPanel from '../components/filter-input-panel'
import TimeLine from '../components/time-line'
import {createFilter} from 'react-search-input'
import moment from 'moment'
import { Link } from 'react-router'

const KEYS_TO_FILTERS = ['entity_id']

export default React.createClass({
  getInitialState () {
    return {
      events: null,
      searchTerm: ' '
    }
  },

  componentDidMount () {
    this.fetchEvents()
  },

  render () {
    return (
      <div className='event-overview'>
        <Header>
          <FilterInputPanel setTermFunction={this.setFilterTerm}/>
        </Header>
        {this.state.events ? this.renderFilteredEvents() : <LoadingIcon />}
      </div>
    )
  },

  renderFilteredEvents () {
    let filtered_events = this.state.events.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    let cards = filtered_events.map((data) => {
      return (
        <Link className='event-link' to={`/event-detail/${data.id}`}>
          <Card 
            event_type={data.event_type}
            event_date={data.event_date} 
            event_time={data.event_time} 
            event_room={data.event_room}
            event_info={data.event_info}
            event_confirmed={data.event_confirmed}
            event_confirm_name={data.event_confirm_name}
            event_confirm_company={data.event_confirm_company} />
        </Link>
      )
    })
    return (
      <div className='events'>
        {filtered_events.length > 0 ? <TimeLine items={cards} title={this.props.routeParams.entityId}/> : <NoResultFound/>}
      </div>
    )
  },

  fetchEvents () {
    // API.Event
    //   .byEntityId({entityId: this.props.routeParams.entityId})
    //   .then((response) => {
    //     let sorted_events = response.data.sort(function (eventA, eventB) { return new Date(eventA.event_time) - new Date(eventB.event_time) })
    //     let events = this.formatDates(sorted_events)
    //     this.setState({events})
    // })

    const events = [
      {
        entity_id: 1234,
        event_room: 'Kitchen',
        info: 'leakage',
        event_type: 'Plumbering',
        event_date: 'Nov 7',
        event_info: 'leakage',
        event_confirmed: true,
        event_confirm_name: 'John Johnson',
        event_confirm_company: 'Johns Plumbering'
      },
      {
        entity_id: 3456,
        event_room: 'Bedroom',
        event_info: '5 liters was needed',
        event_type: 'Painted Bedroom',
        event_date: 'Oct 24'
      },
      {
        entity_id: 1234,
        event_room: 'Livingroom',
        event_info: 'Only 3 walls',
        event_type: 'Painted Livingroom',
        event_date: 'Feb 7'
      },
      {
        entity_id: 1234,
        event_room: 'All',
        event_type: 'Broadband',
        event_date: 'Oct 7',
        event_confirmed: true,
        event_confirm_name: 'Fredric Johnson',
        event_confirm_company: 'Broadband Now AB'
      },
    ]
    this.setState({events})
  },

  formatDates (events) {
    events.forEach((data, i) => {
      events[i].event_time = moment(new Date(events[i].event_time)).format('MMMM Do YYYY, h:mm:ss a')
    })
    return events
  },

  setFilterTerm (text) {
    this.setState({searchTerm: text})
  }
})
