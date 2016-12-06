import React from 'react'
import ViewHeader from '../components/view-header'
import { contacts } from '../constants/data'

export default React.createClass({

  render () {
    return (
      <div className='contacts-view'>
        <ViewHeader heading={'CONTACTS'}/>
        <div className='main-container'>
        {
          contacts.map((contact, i) => {
            return (
              <div className='contact-card' key={`contact-${i}`}>
                <div className='heading'>{contact.companyName}</div>
                <div className='text'>{contact.name}</div>
                <div className='text'>{contact.phone}</div>
                <div className='text'>{contact.web}</div>
              </div>
            )
          })
        }
        </div>
      </div>
    )
  }
})
