import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { IoClose } from "react-icons/io5";
import { TfiFullscreen } from "react-icons/tfi";
import { IoMdCheckmark, IoMdHeartEmpty } from "react-icons/io";

// --- Mock Data for Images ---
const imgs = [
  "https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg",
  "https://images-magento.shoppersstop.com/pub/media/catalog/product/S25711GDNST03/S25711GDNST03_CORAL/S25711GDNST03_CORAL.jpg_2000Wx3000H",
  "https://img.freepik.com/free-photo/top-view-cooked-pasta-with-meat-sauce-inside-plate-dark-desk_23-2148564287.jpg",
];

const ProductModal = (props) => {
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState(imgs[0]);

  const handleQtyChange = (type) => {
    if (type === "dec" && qty > 1) setQty(qty - 1);
    if (type === "inc") setQty(qty + 1);
  };

  return (
    <Dialog
      open={true}
      onClose={props.closeProductModal}
      className="product-modal"
      maxWidth="lg" // Made slightly wider for better desktop view
      scroll="body" // Allows scrolling the page if modal is tall
    >
      <div className="modal-wrapper">
        {/* Close Button */}
        <IconButton className="close-btn" onClick={props.closeProductModal}>
          <IoClose />
        </IconButton>

        <div className="product-content">
          {/* --- LEFT COLUMN: IMAGES --- */}
          <div className="product-gallery">
            <div className="main-image-container">
              <span className="badge-custom badge-blue">23%</span>
              <span className="badge-custom badge-rec">RECOMMENDED</span>
              <img src={activeImg} alt="Product" className="main-img" />
            </div>

            <div className="thumbnail-list">
              {imgs.map((img, index) => (
                <div
                  key={index}
                  className={`thumb-item ${activeImg === img ? "active" : ""}`}
                  onClick={() => setActiveImg(img)}
                >
                  <img src={img} alt={`thumb-${index}`} />
                </div>
              ))}
            </div>
          </div>

          {/* --- RIGHT COLUMN: DETAILS --- */}
          <div className="product-details">
            <h2 className="product-title">
              All Natural Italian-Style Chicken Meatballs
            </h2>

            <div className="meta-row">
              <div className="brand-info">
                <span className="label">Brand:</span>
                <span className="value">Welch's</span>
              </div>
              <div className="review-info">
                <Rating name="read-only" value={4} readOnly size="small" />
                <span className="review-count">(1 Review)</span>
              </div>
              <div className="sku-info">
                <span className="label">SKU:</span>
                <span className="value">ZU49VOR</span>
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

            {/* Actions: Quantity & Add to Cart */}
            <div className="action-wrapper">
              <div className="qty-selector">
                <button onClick={() => handleQtyChange("dec")}>-</button>
                <input type="text" value={qty} readOnly />
                <button onClick={() => handleQtyChange("inc")}>+</button>
              </div>

              <Button
                variant="contained"
                className="add-to-cart-btn"
                disableElevation
              >
                Add to cart
              </Button>
            </div>

            <div className="wishlist-compare-row">
              <button className="icon-text-btn">
                <IoMdHeartEmpty size={18} /> Add to Wishlist
              </button>
              <button className="icon-text-btn">
                <TfiFullscreen size={16} /> Compare
              </button>
            </div>

            <hr className="divider" />

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