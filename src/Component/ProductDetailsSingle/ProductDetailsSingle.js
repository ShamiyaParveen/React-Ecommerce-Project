import React, { useState } from 'react'
import { FaRegHeart } from "react-icons/fa";
import Rating from "@mui/material/Rating";


const ProductDetailsSingle = () => {
     const [activeSize, setActiveSize] = useState(null);

        const isActive = (index) => {
            setActiveSize(index);
        }

  return (
    <>
    
      <div className="product-details">
            <h2 className="product-title">
              All Natural Italian-Style Chicken Meatballs
            </h2>

             <div className="brand-info mb-2">
                <span className="label">Brand:</span>
                <span className="value">Welch's</span>
              </div>


            <div className="row py-2 pr-4  d-flex justify-content-between align-items-center">
              
              <div className="review-info">
                <Rating name="read-only" value={4} readOnly size="small" />
                <span className="review-count">(1 Review)</span>
              </div>
              <div className="row pr-5">
              <button className="icon-text-btn">
                <FaRegHeart size={18} /> 
              </button>
             
            </div>

            </div>

            <div className="price-wrapper">
              <span className="old-price">$9.35</span>
              <span className="new-price">$7.25</span>
              <span className="stock-status in-stock">IN STOCK</span>
            </div>

            <p className="description">
              Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus
              malesuada tincidunt. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra.
            </p>


            <div className="productSize d-flex align-items-center mb-3">
              <span>Size / Weight:</span>

              <ul className="list list-inline mb-0 pl-4">
                <li className="list-inline-item">
                  <a
                    className={`tag ${activeSize === 0 ? 'active' : ''}`}
                    onClick={() => isActive(0)}
                  >
                    50g
                  </a>
                </li>
                  <li className="list-inline-item">
                  <a
                    className={`tag ${activeSize === 1 ? 'active' : ''}`}
                    onClick={() => isActive(1)}
                  >
                   100g
                  </a>
                </li>
                  <li className="list-inline-item">
                  <a
                    className={`tag ${activeSize === 2 ? 'active' : ''}`}
                    onClick={() => isActive(2)}
                  >
                    200g
                  </a>
                </li>
                  <li className="list-inline-item">
                  <a
                    className={`tag ${activeSize === 3 ? 'active' : ''}`}
                    onClick={() => isActive(3)}
                  >
                    350g
                  </a>
                </li>
              </ul>
            </div>
              </div>
                     


                    
            
    
    </>
  )
}

export default ProductDetailsSingle;