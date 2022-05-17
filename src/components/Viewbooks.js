import { getValue } from '@testing-library/user-event/dist/utils'
import React from 'react'
import Navbar from './Navbar'

const Viewbooks = () => {
      var booklist=[{
            "title":"balarama","price":"200"},{
                  "title":"balarama","price":"200"},{
                  "title":"balarama","price":"200"}
      
      ]
     
  return (
       <> <Navbar/>

<div class="container">
      <div class="row">
            <div class="vol col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                  <div class="row g-3">{booklist.map((value,key)=>{
                        return   <div class="col col-12 col-sm-6 col-md-6 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                        <div class="card" >
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
  </div>
</div>
                 
                        
                  </div>
                        
                  
                  })}</div>
            </div>
      </div>
</div>
          </>
  )
}

export default Viewbooks