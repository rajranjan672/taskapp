import React from 'react'
import logo from "../Assets/logo.png"
import StarIcon from '@mui/icons-material/Star';
import tyre from "../Assets/tyre.jpg"

const TypesOfTyres = () => {
  return (
    <>
    <div className="container-fluid">
        <div className="row">
        <h3>Types Of Tyres</h3>

<div className="card col-10 col-sm-10 col-md-4 col-lg-4 col-xl-3 mx-4 my-2 p-1">
    <h4 className="card-title">
        <img src={logo} width={'40vw'} />
    </h4>
    <div className="card-body">
        <p>Super GripZ</p>
        <div className='d-flex justify-content-between'>
        <button className='h-100 my-auto' style={{backgroundColor:"#18db22", border:"none", paddingRight:'11px'}}>
        <StarIcon  style={{color:"white"}}/>
        <span style={{color:"white"}}>4.5</span>

        </button>
        <span >
        <img src={tyre}/>

        </span>
        </div>
       
    </div>
</div>

<div className="card col-10 col-sm-10 col-md-4 col-lg-4 col-xl-3 mx-4 my-2 p-2">
    <h4 className="card-title">
        <img src={logo} width={'40vw'} />
    </h4>
    <div className="card-body">
        <p>Super GripZ</p>
        <div className='d-flex justify-content-between'>
        <button className='h-100 my-auto' style={{backgroundColor:"#18db22", border:"none", paddingRight:'11px'}}>
        <StarIcon  style={{color:"white"}}/>
        <span style={{color:"white"}}>4.5</span>

        </button>
        <span >
        <img src={tyre}/>

        </span>
        </div>
       
    </div>
</div>

<div className="card col-10 col-sm-10 col-md-4 col-lg-4 col-xl-3 mx-4 my-2 p-2">
    <h4 className="card-title">
        <img src={logo} width={'40vw'} />
    </h4>
    <div className="card-body">
        <p>Super GripZ</p>
        <div className='d-flex justify-content-between'>
        <button className='h-100 my-auto' style={{backgroundColor:"#18db22", border:"none", paddingRight:'11px'}}>
        <StarIcon  style={{color:"white"}}/>
        <span style={{color:"white"}}>4.5</span>

        </button>
        <span >
        <img src={tyre}/>

        </span>
        </div>
       
    </div>
</div>

<div className="card col-10 col-sm-10 col-md-4 col-lg-4 col-xl-3 mx-4 my-2 p-2">
    <h4 className="card-title">
        <img src={logo} width={'40vw'} />
    </h4>
    <div className="card-body">
        <p>Super GripZ</p>
        <div className='d-flex justify-content-between'>
        <button className='h-100 my-auto' style={{backgroundColor:"#18db22", border:"none", paddingRight:'11px'}}>
        <StarIcon  style={{color:"white"}}/>
        <span style={{color:"white"}}>4.5</span>

        </button>
        <span >
        <img src={tyre}/>

        </span>
        </div>
       
    </div>
</div>

<div className="card col-10 col-sm-10 col-md-4 col-lg-4 col-xl-3 mx-4 my-2 p-2">
    <h4 className="card-title">
        <img src={logo} width={'40vw'} />
    </h4>
    <div className="card-body">
        <p>Super GripZ</p>
        <div className='d-flex justify-content-between'>
        <button className='h-100 my-auto' style={{backgroundColor:"#18db22", border:"none", paddingRight:'11px'}}>
        <StarIcon  style={{color:"white"}}/>
        <span style={{color:"white"}}>4.5</span>

        </button>
        <span >
        <img src={tyre}/>

        </span>
        </div>
       
    </div>
</div>
        </div>
    </div>
    

    

    </>
  )
}

export default TypesOfTyres