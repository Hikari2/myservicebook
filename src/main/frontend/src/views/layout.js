import React from 'react'
import NavigationBar from './../components/nav-bar'
import Footer from '../components/footer'

export default React.createClass({

  render () {
    const items = [
      {label: 'TIMELINE', link: '/overview'},
      {label: 'DOCUMENTS', link: '/documents'},
      {label: 'CONTATCTS', link: '/contacts'}
    ]
    return (
      <div className='layout'>
        <NavigationBar options={items}/>
        <main>
          {this.props.children}
        </main>
        <Footer />
      </div>
    )
  }
})
