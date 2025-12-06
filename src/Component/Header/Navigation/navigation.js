import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { FaAngleDown } from "react-icons/fa6";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from "react-icons/md";
//20 min

const Navigation = () => {
  return (
    <nav>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-3 navpart1'>
                   <div className='cartwrapper'>
                     <Button className='allcategorybtn'>
                     <RxHamburgerMenu />  <span className='mx-2'> All Categories </span>  <FaAngleDown />
                    </Button>
                      <div className='sidebar-menu'>
                        <ul className='list-unstyled m-0 p-0'>
                            <li><Link to="/">Electronics</Link></li>

                            <li className='next-menu'><Link to="/">Fashion</Link> <MdKeyboardArrowRight className='ml-auto'/>
                            <div className='category-submenu'>
                            <ul className='list-unstyled m-0 p-0'>
                                <li><Link to="/">Clothing</Link></li>
                                <li><Link to="/">Footwear</Link></li>
                                <li><Link to="/">Accessories</Link></li>
                            </ul>
                        </div>
                            </li>
                            <li><Link to="/">Home & Living</Link></li>

                            <li className='next-menu'><Link to="/">Beauty</Link> <MdKeyboardArrowRight className='ml-auto'/>
                             <div className='category-submenu'>
                            <ul className='list-unstyled m-0 p-0'>
                                <li><Link to="/">foundation</Link></li>
                                <li><Link to="/">Lipstick</Link></li>
                                <li><Link to="/">Eyeliner</Link></li>
                                <li><Link to="/">Skincare</Link></li>
                                <li><Link to="/">Haircare</Link></li>
                                <li><Link to="/">Fragrance</Link></li>
                                <li><Link to="/">Personal Care</Link></li>
                               
                            </ul>
                        </div>
                            </li>
                            <li><Link to="/">Sports</Link></li>
                            <li><Link to="/">Toys</Link></li>
                            <li><Link to="/">Automotive</Link></li>
                        </ul>
                     </div>
                   </div>
                </div>
                <div className='col-lg-9 navpart2'>
                    <ul className=' list list-inline d-flex justify-content-end align-items-center mb-0'>
                        <li className='list-inline-item mx-3'><Link to="/">Home </Link></li>
                        <li className='list-inline-item mx-3'><Link to="/">Men  </Link>
                        <div className='submenu'>
                            <ul className='list-unstyled m-0 p-0'>
                                <li><Link to="/">Clothing</Link></li>
                                <li><Link to="/">Footwear</Link></li>
                                <li><Link to="/">Accessories</Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className='list-inline-item mx-3'><Link to="/">Women</Link>
                        <div className='submenu'>
                         <ul className='list-unstyled m-0 p-0'>
                                <li><Link to="/">Western Wear</Link></li>
                                <li><Link to="/">Indian Wear</Link></li>
                                <li><Link to="/">Jewellery</Link></li>
                                <li><Link to="/">Footwear</Link></li>
                                <li><Link to="/">Accessories</Link></li>
                                <li><Link to="/">Bags & Wallet </Link></li>
                            </ul>
                            </div>
                        </li>
                        <li className='list-inline-item mx-3'><Link to="/">Kids</Link>
                         <div className='submenu'>
                         <ul className='list-unstyled m-0 p-0'>
                                <li><Link to="/">Girls</Link></li>
                                <li><Link to="/">Boys</Link></li>
                                <li><Link to="/">Baby Care</Link></li>
                                <li><Link to="/">Toys</Link></li>
                            </ul>
                            </div>
                        </li>
                        <li className='list-inline-item mx-3'><Link to="/">Beauty</Link>
                        <div className='submenu'>
                         <ul className='list-unstyled m-0 p-0'>
                                <li><Link to="/">Makeup</Link></li>
                                <li><Link to="/">Skincare</Link></li>
                                <li><Link to="/">Haircare</Link></li>
                                <li><Link to="/">Fragrance</Link></li>
                                <li><Link to="/">Personal Care</Link></li>
                            </ul>
                            </div>
                        </li>
                         <li className='list-inline-item mx-3'><Link to="/">Watches</Link>
                         <div className='submenu'>
                         <ul className='list-unstyled m-0 p-0'> 
                                <li><Link to="/">Men's Watches</Link></li>
                                <li><Link to="/">Women's Watches</Link></li>
                            </ul>
                            </div>
                         </li>
                          <li className='list-inline-item mx-3'><Link to="/">Gifts</Link>
                          <div className='submenu'>
                         <ul className='list-unstyled m-0 p-0'> 
                                <li><Link to="/">For Her</Link></li>
                                <li><Link to="/">For Him</Link></li>
                                <li><Link to="/">For Kids</Link></li>
                                <li><Link to="/">Occasions</Link></li>
                            </ul>
                            </div>
                          </li>
                        <li className='list-inline-item mx-3'><Link to="/">Contact </Link></li>

                    </ul>
                </div>
            </div>
        </div>
    </nav>

  )
}

export default Navigation;