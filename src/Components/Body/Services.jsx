import { Paper } from '@mui/material'
import React, { useRef, useState } from 'react'
import { Data } from '../Data'
import { ArrowBackIos, ArrowBackIosNew, ArrowBackIosNewOutlined, ArrowForwardIosOutlined } from '@mui/icons-material'
import "../Body/Home.css"
import img from "../Assets/person1.png"

const Item_Width = 200

const Services = () => {
    const [scrollPosition, setScrollPosition] = useState(0)

    const containerRef = useRef()

    const handleScroll = (scrollAmount) => {
        const newScrollPosition = scrollPosition + scrollAmount 

        setScrollPosition(newScrollPosition)

        containerRef.current.scrollLeft = newScrollPosition
    }
  return (
    <>
        <h3 className=''>Our Services</h3>

    <div className="container-fluid">
        <div className="row">
        </div>
    <div
    ref={containerRef}
    style={{
        width:"100%",
        overflowX: "scroll",
        scrollBehavior: "smooth"
    }}>
        <div className='context'>
        <ArrowBackIosNewOutlined onClick={() => (handleScroll(-Item_Width))} className='bt my-auto'  />

        {Data.map((item) => {
            return (
                
                <Paper className='card mb-3' elevation={10} key={item.id}>
                    <div className="d-flex justify-content-between">
                    <p className='my-auto ms-auto'>{item.title}</p>
                   <img src={img} height="70%" width="50%" />

                {() => (handleScroll(-Item_Width))}
                    </div>
                   </Paper>
                
            )
        })}
        <ArrowForwardIosOutlined onClick= {() => (handleScroll(Item_Width))} className=' bt my-auto'  />

        </div>
    </div>
    </div>
    <div>


      

        </div>

        

    </>
  )
}

export default Services