import React, { useState } from 'react'
import ProductModal from '../ProductModal/ProductModal'
import { TfiFullscreen } from "react-icons/tfi";
import { FaRegHeart } from "react-icons/fa";

const ProductItems = () => {

  const [isOpenProductModal, setIsOpenProductModal] = useState(false);

const viewProductDetails = (id) => {
  setIsOpenProductModal(true);  
} 
const closeProductModal = () => {
  setIsOpenProductModal(false);  
}
  return (
    <>
    
     <div className="product-slide p-2">
            <div className="card-focus">
              <div className="focus-image-container">
                <div className="discount-badge">-20%</div>

                <img
                  src="https://images-magento.shoppersstop.com/pub/media/catalog/product/S25711GDNST03/S25711GDNST03_CORAL/S25711GDNST03_CORAL.jpg_2000Wx3000H"
                  alt="Product"
                />
                <div className="focus-actions">
                  <span><FaRegHeart /></span>
                  <span onClick={()=>viewProductDetails(1)}><TfiFullscreen /></span>
                </div>
              </div>
              <div className="focus-content">
                <div className="focus-price-row">
                  <div className="focus-price">$7.99</div>
                  <div className="focus-rating">⭐ 4.5</div>
                </div>
                <h4 className="focus-title">
                  Angie’s Sweet & Salty Kettle Corn
                </h4>
                <button className="focus-btn">Add to Cart</button>
              </div>
            </div>
          </div>
    

            {
              isOpenProductModal === true && <ProductModal closeProductModal ={closeProductModal} />
            }


    </>
  )
}

export default ProductItems