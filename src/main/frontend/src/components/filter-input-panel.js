import React from 'react'
import SearchInput from 'react-search-input'

export default React.createClass({

  render () {
    return (
      <div className='filter-input-panel'>
        <div className='wrapper'>
          <span className='search-icon'>⚲</span>
          <SearchInput className='filter-input' placeholder={this.props.placeholder || ' Filter'} onChange={this.props.setTermFunction} />
        </div>
      </div>
    )
  }
})
