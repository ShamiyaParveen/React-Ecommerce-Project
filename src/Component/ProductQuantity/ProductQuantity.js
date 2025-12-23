import React, { useState } from 'react'
import Button from "@mui/material/Button";
import { FaRegHeart } from "react-icons/fa";
import Rating from "@mui/material/Rating";
import { FaCartPlus } from "react-icons/fa6";


const ProductQuantity = () => {

        const [inputvalue, setInputValue] = useState(1);
        const [activeSize, setActiveSize] = useState(null);

        const isActive = (index) => {
            setActiveSize(index);
        }

          const minus = () =>{
              if(inputvalue !== 1 && inputvalue > 0){
                setInputValue(inputvalue-1)
              }
                
            }
        
                const plus = () =>{
                    setInputValue(inputvalue + 1);
            }

  return (
    <>

  {/* --- RIGHT COLUMN: DETAILS --- */}
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

          {/* Actions: Quantity & Add to Cart */}
                    <div className="action-wrapper">
                      <div className="qty-selector">
                        <button onClick={minus}>-</button>
                        <input type="text" value={inputvalue} />
                        <button onClick={plus}>+</button>
                      </div>
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
                     
                    </div>


                    
            
            </div>
    </>
  )
}

export default ProductQuantity