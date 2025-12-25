import React from 'react'
import Button from "@mui/material/Button";
import { FaCartPlus } from "react-icons/fa6";

const AddCartButton = () => {
  return (
    <>
    
    <div>
         <Button
                        variant="contained"
                        className="add-to-cart-btn mr-2"
                        disableElevation
                      >
                       <FaCartPlus className='mr-2'/> Add to cart
                      </Button>
                        <Button
                        variant="contained"
                        className="add-to-cart-btn1 mx-2"
                        disableElevation
                      >
                        Buy Now
                      </Button>
    </div>
    
    </>
  )
}

export default AddCartButton