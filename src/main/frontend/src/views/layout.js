import React from 'react'
// import NavigationBar from './../components/nav-bar'
import Footer from '../components/footer'

export default React.createClass({

  render () {
    // const items = [{label: 'Timeline', link: '/event-overview'}, {label: 'Documents', link: '/documents'}]
        // <NavigationBar options={items}/>
    return (
      <div className='layout'>
        <main>
          {this.props.children}
        </main>
        <Footer />
      </div>
    )
  }
})
