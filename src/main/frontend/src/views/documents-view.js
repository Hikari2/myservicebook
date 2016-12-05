import React from 'react'
import { Link } from 'react-router'
import ViewHeader from '../components/view-header'
import FilterInputPanel from '../components/filter-input-panel'
import Select from 'react-select'
import { files } from '../constants/data'
import {createFilter} from 'react-search-input'

const selectOptions = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' }
]

const KEYS_TO_FILTERS = ['type', 'name']

export default React.createClass({
  getInitialState () {
    return ({
      pathString: 'Documents',
      searchTerm: ' '
    })
  },

  render () {
    return (
      <div className='documents-view'>
        <ViewHeader heading={'DOCUMENTS'}/>
        <div className='filter-container'>
          <FilterInputPanel placeholder=' search' setTermFunction={this.setFilterTerm} />
          <Select
            name='form-field-name'
            value='one'
            options={selectOptions}
            onChange={() => { console.log('!') }}
          />
        </div>
        <div className='path-container'>
          <p>{this.getPathString()}</p>
        </div>
        <div className='main-container'>
          {this.renderFiles()}
        </div>
      </div>
    )
  },

  renderFiles () {
    let files = this.openPath()
    console.log(files)
    files = files.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    return files.map((item, i) => {
      if (item.type === 'folder') {
        return this.renderFolder(item, i)
      } else if (item.type === 'jpg') {
        return this.renderImage(item, i)
      } else {
        return (<div className='folder' />)
      }
    })
  },

  getPathString () {
    const path = this.props.location.query.path || []
    let pathString = 'Documents'
    let folder = files.slice()
    path.forEach((pos) => {
      if (folder[pos].name) {
        pathString += ' / ' + folder[pos].name
      }
      folder = folder[pos].content
    })
    return pathString
  },

  openPath () {
    const path = this.props.location.query.path || []
    let folder = files.slice()
    path.forEach((pos) => {
      folder = folder[pos].content
    })
    return folder
  },

  renderFolder (folder, index) {
    let path = this.props.location.query.path || []
    path.push(index)
    return (
      <div className='folder' key={`item-${index}`}>
        <Link to={{pathname: '/documents/', query: {path}}}>
          <div className='folder-icon-wrapper clickalbe'>
            <div className='folder-icon' style={{backgroundImage: 'url(/images/folder.png)'}}/>
          </div>
        </Link>
        <p>{folder.name}</p>
      </div>
    )
  },

  renderImage (image, index) {
    return (
      <div className='image' key={`item-${index}`}>
        <div className='image-icon clickalbe' style={{backgroundImage: `url(${image.url})`}}/>
        <p>{image.name}</p>
      </div>
    )
  },

  setFilterTerm (text) {
    this.setState({searchTerm: text})
  }
})
