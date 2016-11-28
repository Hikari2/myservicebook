import React from 'react'
import ViewHeader from '../components/view-header'
import SearchInput from 'react-search-input'

const data = [
  {
    type: 'folder',
    name: 'Bathroom',
    content: [
      {
        type: 'image',
        url: 'http://kingfisher.scene7.com/is/image/Kingfisher/Project_Bathroom_Dream',
        name: 'paint_after'
      }
    ]
  },
  {
    type: 'folder',
    name: 'Bedroom',
    content: [
      {
        type: 'image',
        url: 'http://www.ikea.com/gb/en/images/rooms/ikea-clean-green-and-clutter-free-__1364315962817-s4.jpg',
        name: 'paint_after'
      }
    ]
  },
  {
    type: 'image',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Living_Room.jpg',
    name: 'paint_after'
  }
]

export default React.createClass({

  render () {
    return (
      <div className='documents-view'>
        <ViewHeader heading={'DOCUMENTS'}/>
        <div className='main-container'>
          <div className='left-container'>
          {
            data.map((item, i) => {
              if (item.type === 'folder') {
                return this.renderFolder(item, i)
              } else if (item.type === 'image') {
                return this.renderImage(item, i)
              } else {
                return (<div className='folder' />)
              }
            })
          }
          </div>
          <div className='right-container'>
            <SearchInput className='search-input' />
          </div>
        </div>
      </div>
    )
  },

  renderFolder (folder, index) {
    return (
      <div className='folder'>
        <div className='folder-icon'>
          <img src={'/images/folder.png'} alt='folder'/>
        </div>
        <p>{folder.name}</p>
      </div>
    )
  },

  renderImage (image, index) {
    return (
      <div className='image'>
        <div className='image-icon'>
          <img src={image.url} alt='image'/>
        </div>
        <p>{image.name}</p>
      </div>
    )
  }
})
