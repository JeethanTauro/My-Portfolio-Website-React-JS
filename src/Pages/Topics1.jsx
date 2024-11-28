import React from 'react'
import Navigation from '../Components/Navigation'
import Foot from '../Components/Foot'
import TechData from '../Components/TechData'
import { Outlet } from 'react-router-dom'
import CertificateButton from '../Components/CertificateButton'

 


function Topics1() {
  return (
    <>
     <TechData/>
     <CertificateButton/>

    </>
  )
}

export default Topics1