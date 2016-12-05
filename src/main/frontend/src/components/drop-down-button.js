import React from 'react'
import Modal from 'react-modal'

const customStyles = {
  overlay: {
    zIndex: '2'
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    padding: '25px 50px',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

export default React.createClass({
  getInitialState () {
    return ({
      isOpen: false,
      value: 'Untitled folder',
      onClick: () => console.log('No function for modal')
    })
  },

  openModal (onClick) {
    this.setState({ modalIsOpen: true })
    this.setState({onClick})
  },

  closeModal () {
    this.setState({ modalIsOpen: false })
  },

  handleInputChange (value) {
    this.setState({value})
  },

  render () {
    return (
      <div className='drop-down-button'>
        <div className='button' onClick={() => this.setState({isOpen: !this.state.isOpen})}>
          <p>{this.props.title}</p>
        </div>
        <Modal
          ref='mymodal'
          style={customStyles}
          onRequestClose={this.closeModal}
          isOpen={this.state.modalIsOpen}>
          <h1 ref='title'>New Folder</h1>
          <input
            onChange={(event) => { this.handleInputChange(event.target.value) }}
            placeholder='Untitled folder'
          />
          <br/>
          <div className='button-container'>
            <div className='button grey' onClick={this.closeModal}>
              <p>Cancel</p>
            </div>
            <div className='button blue' onClick={() => {
              this.state.onClick(this.state.value)
              this.closeModal()
            }}>
              <p>Create</p>
            </div>
          </div>
        </Modal>
        {this.state.isOpen ? this.renderDropDown() : ''}
      </div>
    )
  },

  renderDropDown () {
    return (
      <div className='menu'>
        <ul>
          {
            this.props.options.map((data, i) => {
              return (
                <li
                  onClick={() => {
                    data.modal ? this.openModal(data.onClick) : data.onClick()
                    this.setState({isOpen: !this.state.isOpen})
                  }}
                  key={`item-${i}`}>
                  {data.icon ? <i className={`fa ${data.icon}`} /> : ''}
                  <p>{data.label}</p>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
})
