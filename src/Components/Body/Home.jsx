import React from 'react'
import ceat from "../Assets/myceat.jpg"
import "../Body/Home.css"
import { Call, LocationOn } from '@mui/icons-material'
import Services from './Services'
import TypesOfTyres from './TypesOfTyres'

const Home = () => {
  return (
    <>
      <img src={ceat} alt="" className='image ' />

<div className='container-fluid card'>
      {/* <div className="row align-center"> */}
        <h2 className='mx-1 py-2'>Your journey starts from here</h2>
        <div className='p-2'>
        <LocationOn className='me-1'/>
        <span>New, Delhi, 110034</span>
        </div>
        <div className='p-2'>
        <Call className='me-1'/>
        <span>9934054960</span>
        </div>

      {/* </div> */}
    </div>
    <Services />


      <TypesOfTyres />
   
    </>
  )
}

export default Home