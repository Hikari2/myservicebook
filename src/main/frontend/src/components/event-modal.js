import React from 'react'
import FaCheck from 'react-icons/lib/fa/check'
import {
  Modal,
  ModalHeader,
  ModalClose,
  ModalBody,
  ModalFooter
} from 'react-modal-bootstrap'

export default React.createClass({

  render () {
    return (
      <Modal className='eventModal' isOpen={this.props.isOpen} onRequestHide={this.props.hideModal}>
        <ModalHeader>
          <ModalClose onClick={this.props.hideModal}/>
          <div className='row'>
            <div className='col-md-4'><h2>{this.props.event_type}</h2></div>
            <div className='col-md-3 col-md-offset-4'><h2>{this.props.event_date}</h2></div>
          </div>
        </ModalHeader>
        <ModalBody>
          <textarea className='form-control' value={this.props.event_info} rows='3' />
          <br />
          <div className='row'>
            <div className='col-md-6'>
              <label>Confirmation</label>
              <input type='text' className='form-control' value={`${this.props.event_confirm_name}, ${this.props.event_confirm_company}`}/>
              <label>Attachments</label>
              <ul className='attachments-list'>
              {this.props.event_attachments.map((file) =>
                <li><a href='#'>{file}</a></li>)}
              </ul>
            </div>
            <div className='col-md-2'>
              <br />
              <FaCheck size={48} color={this.props.event_confirmed ? 'green' : '#7f7f7f'} />
            </div>
            <div className='col-md-4'>
              <button className='btn btn-default event-modal-button'><b>Edit event</b></button>
              <button className='btn btn-default event-modal-button'><b>Download Event</b></button>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <button className='btn btn-primary modalOK' onClick={this.props.hideModal} ><b>OK</b></button>
        </ModalFooter>
      </Modal>
    )
  }

})
