import React from 'react'
import Navbar from './Navbar'

const Viewbooks = () => {
      var booklist={
            "title":"balarama","price":"200"
      }
  return (
       <> <Navbar/>
    <div className='container'>
          <div className='row'>
              
          
          <div className='col'>
                {booklist.title}
          </div>
          <div className='col'>
                {booklist.price}
          </div>
          </div>
          </div></>
  )
}

export default Viewbooks