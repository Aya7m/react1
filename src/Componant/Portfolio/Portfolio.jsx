
import React from 'react'
import img1 from '../../images/poert1.png'
import img2 from '../../images/port2.png'
import img3 from '../../images/port3.png'
export default function Portfolio() {
  return (
    <>

    <div className="container text-center mt-5">
        <div className="row ">
            <h1>PORTFOLIO COMPONENT</h1>
            <div className="col-md-4 mt-5">
                <img src={img1} className='w-100' alt="" />

            </div>

            <div className="col-md-4 mt-5">
                <img src={img2} className='w-100' alt="" />

            </div>

            <div className="col-md-4 mt-5">
                <img src={img3} className='w-100' alt="" />

            </div>

            <div className="col-md-4 mt-5">
                <img src={img1} className='w-100' alt="" />

            </div>

            <div className="col-md-4 mt-5">
                <img src={img2} className='w-100' alt="" />

            </div>

            <div className="col-md-4 mt-5">
                <img src={img3} className='w-100' alt="" />

            </div>
        </div>
    </div>
    </>
  )
}
