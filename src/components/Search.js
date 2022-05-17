import React from 'react'
import Navbar from './Navbar'

const Search = () => {
  return (<>
  <Navbar/>
    <div>  <div classNameName="container">
          
    <div classNameName="row g-2">
          <div classNameName="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                
                      <div classNameName="row g-3 div.col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl 4"><label for="" className="form-label">search student</label> <input type="text" className="form-control"/></div>
                      <div classNameName="row g-3 div.col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl 4"><label for="" className="form-label"></label> </div>
                      
                     
                      <div classNameName="row g-3 div.col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl 4"><input type="button" value="search" className="btn btn-dark"/></div>
                </div>
          </div>
    </div></div>
    </>
  )
}

export default Search