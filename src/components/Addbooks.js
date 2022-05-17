import React from 'react'
import Navbar from './Navbar'

const Addbooks = () => {
  return (
<>

  <Navbar/>


<div class="container">
           <div class="row">
                 <div class="col col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                       <div class="row col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                         <label for="" class="form-label">booktitle</label>
                         <input type="text" class="form-control"/>
                       </div>
                       <div class="row col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                             <div class="col col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                              <label for="" class="form-label">author</label>
                              <input type="text" class="form-control"/>
                             </div>
                             <div class="col col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                              <label for="" class="form-label">price</label>
                              <input type="text" class="form-control"/>
                             </div>
                       </div>
                       <div class="row g-3 col col-12 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                        <label for="" class="form-label"></label>     
                        <input type="button" value="submit" class="btn btn-success"/></div>

                 </div>
           </div>
     </div>
       </>
  )
}

export default Addbooks