import React from 'react'
import { Link } from 'react-router'
import ViewHeader from '../components/view-header'
import FilterInputPanel from '../components/filter-input-panel'
import { createFilter } from 'react-search-input'
import DropDownButton from '../components/drop-down-button'
import { files } from '../constants/data'
import DeepMerge from 'deepmerge'
import Modal from 'react-modal'
import DropZone from 'react-dropzone'
import PDF from 'react-pdf'

const KEYS_TO_FILTERS = ['type', 'name']

export default React.createClass({
  getInitialState () {
    return ({
      folderModalOpen: false,
      dropModalOpen: false,
      dropModalType: '',
      value: 'Untitled',
      preview: '',
      files: files.slice(),
      pathString: 'Documents',
      searchTerm: ' '
    })
  },

  componentWillMount () {
    const options = [
      {
        label: 'Folder',
        icon: 'fa-folder-o',
        onClick: () => {
          this.openFolderModal()
        }
      },
      {
        label: 'Image',
        icon: 'fa-file-image-o',
        onClick: () => {
          this.setState({dropModalType: 'image'})
          this.openDropModal()
        }
      },
      {
        label: 'PDF',
        icon: 'fa-file-pdf-o',
        onClick: () => {
          this.setState({dropModalType: 'pdf'})
          this.openDropModal()
        }
      }
    ]
    this.setState({options})
  },

  render () {
    return (
      <div className='documents-view'>
        <ViewHeader heading={'DOCUMENTS'}/>
        <div className='filter-container'>
          <FilterInputPanel placeholder=' search' setTermFunction={this.setFilterTerm} />
          <DropDownButton title='New' options={this.state.options}/>
        </div>
        <div className='path-container'>
          <p>{this.getPathString()}</p>
        </div>
        <div className='main-container'>
          {this.renderFiles()}
        </div>
        {this.renderFolderModal()}
        {this.renderDropZoneModal()}
      </div>
    )
  },

  renderFiles () {
    let files = this.openPath()
    files = files.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    return files.map((item, i) => {
      if (item.type === 'folder') {
        return this.renderFolder(item, i)
      } else if (item.type === 'image') {
        return this.renderImage(item, i)
      } else if (item.type === 'pdf') {
        return this.renderPdf(item, i)
      } else {
        return (<div className='folder' />)
      }
    })
  },

  getPathString () {
    const path = this.props.location.query.path ? this.props.location.query.path : []
    let pathString = 'Documents'
    let folder = this.state.files.slice()
    path.forEach((pos) => {
      if (folder[pos].name) {
        pathString += ' / ' + folder[pos].name
      }
      folder = folder[pos].content
    })
    return pathString
  },

  openPath () {
    const path = this.props.location.query.path ? this.props.location.query.path : []
    let folder = this.state.files.slice()
    path.forEach((pos) => {
      folder = folder[pos].content
    })
    return folder
  },

  renderFolder (folder, index) {
    let path = this.props.location.query.path ? this.props.location.query.path.slice() : []
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

  renderPdf (pdf, index) {
    return (
      <div className='pdf' key={`item-${index}`}>
        <PDF file={pdf.url} scale={1}/>
        <p>{pdf.name}</p>
      </div>
    )
  },

  setFilterTerm (text) {
    this.setState({searchTerm: text})
  },

  newFolder (name) {
    const path = this.props.location.query.path ? this.props.location.query.path : []
    let folder = this.state.files.slice()
    path.forEach((pos) => {
      folder = folder[pos].content
    })
    folder.push({
      type: 'folder',
      name,
      content: []
    })

    this.setState({files: DeepMerge(folder, this.state.files)})
  },

  renderFolderModal () {
    return (
      <Modal
        ref='newFolderModal'
        style={customStyles}
        onRequestClose={this.closeFolderModal}
        isOpen={this.state.folderModalOpen}>
        <h1 ref='title'>New Folder</h1>
        <input
          onChange={(event) => { this.folderModalInputChange(event.target.value) }}
          placeholder='Untitled folder'
        />
        <br/>
        <div className='button-container'>
          <div className='button grey' onClick={this.closeFolderModal}>
            <p>Cancel</p>
          </div>
          <div className='button blue' onClick={() => {
            this.newFolder(this.state.value)
            this.closeFolderModal()
          }}>
            <p>Create</p>
          </div>
        </div>
      </Modal>
    )
  },

  openFolderModal () {
    this.setState({ folderModalOpen: true })
  },

  closeFolderModal () {
    this.setState({ folderModalOpen: false })
  },

  folderModalInputChange (value) {
    this.setState({ value })
  },

  newItem (type, name, src) {
    const path = this.props.location.query.path ? this.props.location.query.path : []
    let folder = this.state.files.slice()
    path.forEach((pos) => {
      folder = folder[pos].content
    })
    folder.push({
      type,
      name,
      url: src
    })

    this.setState({files: DeepMerge(folder, this.state.files)})
  },

  renderDropZoneModal () {
    return (
      <Modal
        ref='dropZoneModal'
        style={customStyles}
        onRequestClose={this.closeDropModal}
        isOpen={this.state.dropModalOpen}>
        <DropZone
          className='drop-zone'
          multiple={false}
          onDrop={(acceptedFiles, rejectedFiles) => {
            this.setState({preview: acceptedFiles[0].preview})
          }}
        >
          <div>Try dropping some files here, or click to select files to upload.</div>
        </DropZone>
        <div className='image'>
          {this.getPreview(this.state.dropModalType)}
        </div>
        <input
          onChange={(event) => { this.dropModalInputChange(event.target.value) }}
          placeholder={`Untitled ${this.state.dropModalType}`}
        />
        <br/>
        <div className='button-container'>
          <div className='button grey' onClick={this.closeImageModal}>
            <p>Cancel</p>
          </div>
          <div className='button blue' onClick={() => {
            this.newItem(this.state.dropModalType, this.state.value, this.state.preview)
            this.setState({preview: ''})
            this.closeDropModal()
          }}>
            <p>Create</p>
          </div>
        </div>
      </Modal>
    )
  },

  getPreview (type) {
    if (type === 'image') {
      return <div className='image-icon clickalbe' style={{backgroundImage: `url(${this.state.preview})`}}/>
    } else if (type === 'pdf') {
      return <PDF file={this.state.preview} scale={0.4} loading={(<p/>)}/>
    }
  },

  openDropModal () {
    this.setState({ dropModalOpen: true })
  },

  closeDropModal () {
    this.setState({ dropModalOpen: false })
  },

  dropModalInputChange (value) {
    this.setState({ value })
  }
})

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
