import React, { useContext, useState } from 'react'
import { TfiFullscreen } from "react-icons/tfi";
import { FaRegHeart } from "react-icons/fa";
import Rating from "@mui/material/Rating";
import { MyContext } from '../../App';


const ProductItems = (props) => {

 const context  = useContext(MyContext);

const viewProductDetails = (id) => {
  context.setIsOpenProductModal(true);  
} 

  return (
    <>
    <div className={`product-slide ${props.itemView} p-2`}>
  <div className="card-focus">

    {/* IMAGE SECTION */}
    <div className="focus-image-container">
      <div className="discount-badge">-20%</div>

      <img
        src="https://images-magento.shoppersstop.com/pub/media/catalog/product/S25711GDNST03/S25711GDNST03_CORAL/S25711GDNST03_CORAL.jpg_2000Wx3000H"
        alt="Product"
      />

      <div className="focus-actions">
        <span>
          <FaRegHeart />
        </span>
        <span onClick={() => viewProductDetails(1)}>
          <TfiFullscreen />
        </span>
      </div>
    </div>

    {/* CONTENT SECTION */}
    <div className="focus-content">
      <h4 className="focus-title">
        Angie’s Sweet & Salty Kettle Corn
      </h4>
      <span className="focus-stock text-success">In Stock</span>
      <div className="focus-price-row">
        <div className="focus-price">$7.99</div>
        <div>
          <Rating name="read-only" value={4} readOnly size="small" />
        </div>
      </div>

      <button className="focus-btn">Add to Cart</button>
    </div>

  </div>
</div>

    


    </>
  )
}

export default ProductItems