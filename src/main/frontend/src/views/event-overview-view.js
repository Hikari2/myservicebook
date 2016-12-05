import React from 'react'
// import API from '../api'
import Card from '../components/card'
import LoadingIcon from '../components/loading-icon'
import NoResultFound from '../components/no-result-found'
import TimeLine from '../components/time-line'
import ViewHeader from '../components/view-header'
import {createFilter} from 'react-search-input'
import moment from 'moment'
import _ from 'lodash'
import DatePicker from 'react-datepicker'
import Select from 'react-select'
import Dropzone from 'react-dropzone'

import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalClose,
  ModalBody,
  ModalFooter
} from 'react-modal-bootstrap'

import 'react-select/dist/react-select.css'
import 'react-datepicker/dist/react-datepicker.css'

const KEYS_TO_FILTERS = ['entity_id',
                        'event_type',
                        'event_room',
                        'event_info']

export default React.createClass({
  getInitialState () {
    return {
      events: null,
      searchTerm: '',
      modalIsOpen: false,
      startDate: moment(),
      modalType: '',
      modalRoom: '',
      modalDescription: '',
      modalContractor: '',
      modalAttachments: '',
      selectValue: [],
      selectOptions: []
    }
  },

  componentDidMount () {
    this.fetchEvents()
  },

  render () {
    return (
      <div className='event-overview'>
        <ViewHeader heading={'TIMELINE'}/>
        {this.renderAddEventModal()}
        <div className='row'>
          <div className='col-md-6'>
            <div className='col-md-8 inputMenu'>
              <Select multi simpleValue value={this.state.selectValue} placeholder='Select filters' options={this.state.selectOptions} onChange={this.handleSelectChange} />
            </div>
            <button className='btn btn-primary newEventButton' onClick={this.openModal}><b>Create new event</b></button>
          </div>
        </div>
        <div className='col-md-8'>
          {this.state.events ? this.renderFilteredEvents() : <LoadingIcon />}
        </div>
      </div>
    )
  },

  renderAddEventModal () {
    return (
      <Modal isOpen={this.state.modalIsOpen} onRequestHide={this.hideModal}>
        <ModalHeader>
          <ModalClose onClick={this.hideModal}/>
          <ModalTitle>Create New Event</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <h2>create new event</h2>
          <label>Event Type</label>
          <input type='text' value={this.state.modalType} onChange={this.handleInputChange.bind(this, 'modalType')} className='form-control' />
          <label>Room</label>
          <input type='text' value={this.state.modalRoom} onChange={this.handleInputChange.bind(this, 'modalRoom')} className='form-control' />
          <label>Date</label>
          <br />
          <DatePicker selected={this.state.startDate} onChange={this.handleDateChange} />
          <br />
          <label>Description</label>
          <textarea className='form-control' value={this.state.modalDescription} onChange={this.handleInputChange.bind(this, 'modalDescription')} rows='3'></textarea>
          <label>Contractor</label>
          <input type='email' value={this.state.modalContractor} onChange={this.handleInputChange.bind(this, 'modalContractor')} className='form-control' />
          <label>Attachments</label>
          <Dropzone className='dropdiv' onDrop={this.onDrop}>
            {this.renderDropzoneBody()}
          </Dropzone>
        </ModalBody>
        <ModalFooter>
          <button className='btn btn-default' onClick={this.hideModal}>Cancel</button>
          <button className='btn btn-primary' onClick={this.handleCreateEvent} >Create Event</button>
        </ModalFooter>
      </Modal>
    )
  },

  renderFilteredEvents () {
    let filtered_events = this.state.events.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    let cards = filtered_events.map((data) => {
      return (
        <Card
          event_type={data.event_type}
          event_date={data.event_date}
          event_time={data.event_time}
          event_room={data.event_room}
          event_info={data.event_info}
          event_confirmed={data.event_confirmed}
          event_confirm_name={data.event_confirm_name}
          event_confirm_company={data.event_confirm_company}
          event_attachments={data.event_attachments} />

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
        event_confirm_company: 'Johns Plumbering',
        event_attachments: []
      },
      {
        entity_id: 3456,
        event_room: 'Bedroom',
        event_info: '5 liters was needed',
        event_type: 'Painted Bedroom',
        event_date: 'Oct 24',
        event_confirmed: false,
        event_confirm_name: '',
        event_confirm_company: '',
        event_attachments: []

      },
      {
        entity_id: 1234,
        event_room: 'Livingroom',
        event_info: 'Only 3 walls',
        event_type: 'Painted Livingroom',
        event_date: 'Feb 7',
        event_confirmed: false,
        event_confirm_name: '',
        event_confirm_company: '',
        event_attachments: []

      },
      {
        entity_id: 1234,
        event_room: 'All',
        event_type: 'Broadband',
        event_date: 'Oct 7',
        event_confirmed: true,
        event_confirm_name: 'Fredric Johnson',
        event_confirm_company: 'Broadband Now AB',
        event_attachments: []
      }
    ]
    this.setState({events})
    this.formatFilters(events)
  },

  formatDates (events) {
    events.forEach((data, i) => {
      events[i].event_time = moment(new Date(events[i].event_time)).format('MMMM Do YYYY, h:mm:ss a')
    })
    return events
  },

  handleDateChange (date) {
    this.setState({
      startDate: date
    })
  },

  formatFilters (events) {
    let selectOptions = []
    if (events != null) {
      _.each(events, function (event) {
        selectOptions.push({label: event.event_type, value: event.event_type})
        selectOptions.push({label: event.event_room, value: event.event_room})
      })
    }
    this.setState({selectOptions})
  },

  handleSelectChange (selectValue) {
    this.setState({selectValue: selectValue, searchTerm: selectValue})
  },

  handleCreateEvent () {
    var newEvent = {
      entity_id: 1234,
      event_room: this.state.modalRoom,
      event_type: this.state.modalType,
      event_date: moment(this.state.startDate).format('MMM DD'),
      event_confirmed: false,
      event_confirm_name: '',
      event_confirm_company: '',
      event_info: this.state.modalDescription,
      event_attachments: this.state.attachments
    }
    this.setState({events: [newEvent].concat(this.state.events)})
    this.hideModal()
  },

  handleInputChange: function (name, e) {
    var change = {}
    change[name] = e.target.value
    this.setState(change)
  },

  setFilterTerm (text) {
    this.setState({searchTerm: text})
  },

  openModal () {
    this.setState({
      modalIsOpen: true
    })
  },

  hideModal () {
    this.setState({
      modalIsOpen: false
    })
  },

  onDrop (files) {
    this.setState({attachments: files.map((file) => file.name)})
  },

  renderDropzoneBody () {
    return (
      <div>
        Selected files:
        {this.state.attachments !== undefined ? (<ul>
        {this.state.attachments.map((fileName) =>
          <li>{fileName}</li>)}
        </ul>) : (0)}
      </div>
    )
  }

})
