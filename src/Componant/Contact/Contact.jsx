
import React from 'react'

export default function Contact() {
  return (
    <>
    <div className="container text-center mt-5">
        <h1>CONATCT SECTION</h1>
        <div className='form-control mt-5'>
            <input type="text" className='w-100' placeholder='userName' />

            <input type="number" className='w-100 mt-5' placeholder='userAge' />

            <input type="email" className='w-100 mt-5' placeholder='useEmail' />
            <input type="password" className='w-100 mt-5' placeholder='usePassword' />

            <button className='btn btn-info mt-5'>send Massage</button>

        </div>
    </div>
    
    </>
  )
}
