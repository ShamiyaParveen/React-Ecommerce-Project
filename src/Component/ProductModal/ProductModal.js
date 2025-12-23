import React, { useContext, useState } from "react";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import { IoClose } from "react-icons/io5";
import { MyContext } from "../../App";
import ProductImage from "../ProductImage/ProductImage";
import ProductQuantity from "../ProductQuantity/ProductQuantity";
import { IoMdCheckmark } from "react-icons/io";


const ProductModal = (props) => {
  

    const context = useContext(MyContext);

  
 
  return (
    <Dialog
      open={true}
      onClose={()=>context.setIsOpenProductModal(false)}
      className="product-modal"
      maxWidth="lg" // Made slightly wider for better desktop view
      scroll="body" // Allows scrolling the page if modal is tall
    >
      <div className="modal-wrapper">
        {/* Close Button */}
        <IconButton className="close-btn" onClick={()=>context.setIsOpenProductModal(false)}>
          <IoClose />
        </IconButton>

        <div className="product-content">
          {/* --- LEFT COLUMN: IMAGES --- */}
          <ProductImage />

          {/* --- RIGHT COLUMN: DETAILS --- */}

             <div className="product-details-modal">


              <ProductQuantity />
 
            <hr className="divider" style={{marginTop:'70px'}} />

            <ul className="product-attributes">
              <li>
                <IoMdCheckmark className="check-icon" /> Type: <span>Organic</span>
              </li>
              <li>
                <IoMdCheckmark className="check-icon" /> MFG: <span>Jun 4.2021</span>
              </li>
              <li>
                <IoMdCheckmark className="check-icon" /> LIFE: <span>30 days</span>
              </li>
            </ul>

            <hr className="divider" />

            <div className="footer-tags">
              <p>
                Category: <span>Meats & Seafood</span>
              </p>
              <p>
                Tags: <span>chicken, natural, organic, healthy</span>
              </p>
            </div>
          </div>
          </div>
        </div>
    </Dialog>
  );
};

export default ProductModal;