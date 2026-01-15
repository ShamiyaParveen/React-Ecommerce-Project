import React from 'react'
import { IoSearch } from "react-icons/io5";
import Button from '@mui/material/Button';

const SearchBox = () => {
  return (

            <div className='headerSearch'>
                <input type="text" placeholder='Search for products....' />
                <Button className='p-0'>
                    <IoSearch />
                </Button>
            </div>


  )
}

export default SearchBox;