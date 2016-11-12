import React from 'react'

export default React.createClass({

  render () {
    return (
      <div className='layout'>
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
})
