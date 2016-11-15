import React from 'react'
import NavigationBar from './../components/nav-bar'

export default React.createClass({

  render () {
    const items = [{label: 'Timeline', link: '/event-overview'}, {label: 'Documents', link: '/documents'}]

    return (
      <div className='layout'>
        <NavigationBar options={items}/>
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
})
