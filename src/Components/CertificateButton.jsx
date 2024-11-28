import React from 'react'
import { Link } from 'react-router-dom'

function CertificateButton() {
  return (
    <>

    <div className='flex justify-center'>
       <Link to="/certificatesPage">
        <button className='border-solid border-2 border-black p-2 mt-4 mb-4 hover:bg-yellow-200 rounded-lg transistion duration-300'>
        Certifications
        </button>
        </Link>

    </div>
     
    
    
    
    </>
  )
}

export default CertificateButton
