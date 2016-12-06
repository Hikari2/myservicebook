import React from 'react'
import PDF from 'react-pdf'

export default React.createClass({
  getInitialState () {
    return ({
      currentPage: 0,
      pages: 0
    })
  },

  render () {
    console.log(this.props.file + '!!!')
    return (
      <div className='pdf-modal'>
        <PDF file={this.props.file.url} onDocumentComplete={this._onDocumentComplete} />
        <div>
          <button onClick={this.prevPage}>Previous page</button>
          <button onClick={this.nextPage}>Next page</button>
        </div>
      </div>
    )
  }
})
