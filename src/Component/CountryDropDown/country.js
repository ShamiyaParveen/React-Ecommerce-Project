import React from 'react'
import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa6";

const countryDrodown= () => {
  return (
    <div>
          <Button className='countryDrop '>
            <div className='d-flex flex-column align-items-start'>
                    <span className='location'>Your Location </span>
                    <span className='location-selector'>Select a Location</span>
                    </div>
                    <span className='ml-auto FaAngleDown' ><FaAngleDown /></span> 
                </Button>
    </div>
  )
}

export default countryDrodown;