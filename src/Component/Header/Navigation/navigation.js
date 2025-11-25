import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { FaAngleDown } from "react-icons/fa6";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-3 navpart1'>
                    <Button className='allcategorybtn'>
                     <RxHamburgerMenu />  <span className='mx-2'> All Categories </span>  <FaAngleDown />
                    </Button>
                </div>
                <div className='col-lg-9 navpart2'>
                    <ul className=' list list-inline d-flex justify-content-end align-items-center mb-0'>
                        <li className='list-inline-item mx-3'><Link to="/">Home </Link></li>
                        <li className='list-inline-item mx-3'><Link to="/">Fashion  </Link></li>
                        <li className='list-inline-item mx-3'><Link to="/">Electronic</Link></li>
                        <li className='list-inline-item mx-3'><Link to="/">Bakery</Link></li>
                        <li className='list-inline-item mx-3'><Link to="/">Grocery</Link></li>
                         <li className='list-inline-item mx-3'><Link to="/">Mobiles</Link></li>
                          <li className='list-inline-item mx-3'><Link to="/">Blog</Link></li>
                        <li className='list-inline-item mx-3'><Link to="/">Contact </Link></li>

                    </ul>
                </div>
            </div>
        </div>
    </nav>

  )
}

export default Navigation;