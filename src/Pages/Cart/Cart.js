import React from 'react';
import { FaTimes, FaMinus, FaPlus } from 'react-icons/fa';
import { 
  Button, 
  TextField, 
  LinearProgress, 
  Radio, 
  RadioGroup, 
  FormControlLabel, 
  Divider,
  Typography
} from '@mui/material';

const Cart = () => {
  // --- Static Data to match image ---
  const cartItems = [
    {
      id: 1,
      name: "All Natural Italian-Style Chicken Meatballs",
      price: 7.25,
      quantity: 1,
      image: "https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg",
    },
    {
      id: 2,
      name: "Angie's Boomchickapop Sweet & Salty Kettle Corn - Frito Lay, 1 KG",
      price: 7.99,
      quantity: 1,
      image: "https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg",
    }
  ];

  // --- Calculations ---
  const subtotal = 15.24;
  const shippingCost = 5.00;
  const total = 20.24;
  const freeShippingThreshold = 50.00;
  const neededAmount = (freeShippingThreshold - subtotal).toFixed(2);
  const progressValue = (subtotal / freeShippingThreshold) * 100;

  return (
    <div className="container py-5 ">
      {/* 1. Breadcrumb */}
      <div className="breadcrumb">
        HOME &nbsp; &gt; &nbsp; <span className="text-secondary">CART</span>
      </div>

      <div className="row">
        {/* ================= LEFT COLUMN: CART ITEMS ================= */}
        {/* Uses col-lg-8 (66% width on large screens), full width on mobile */}
        <div className="col-lg-8 mb-4">
          
          {/* Free Shipping Notice */}
          <div className="free-shipping-box mb-4">
            <Typography variant="body1" className="mb-3 text-secondary" sx={{ fontSize: '0.95rem' }}>
              Add <span className="fw-bold" style={{ color: '#e91e63' }}>${neededAmount}</span> to cart and get free shipping!
            </Typography>
            <LinearProgress
              variant="determinate" 
              value={progressValue} 
              className="shipping-progress"
            />
          </div>

          {/* Table Header (Desktop Only) */}
          {/* d-none (Hidden on Mobile) | d-md-flex (Visible on Tablet+) */}
          <div className="d-none d-md-flex row cart-header">
            <div className="col-md-6 ps-4">Product</div>
            <div className="col-md-2 text-center">Price</div>
            <div className="col-md-2 text-center">Quantity</div>
            <div className="col-md-2 text-end pe-4">Subtotal</div>
          </div>

          {/* Cart Items List */}
          {cartItems.map((item) => (
            <div key={item.id} className="row align-items-center cart-item-row">
              
              {/* Product Image & Name */}
              {/* col-md-6 (50% on desktop) | Full width on mobile */}
              <div className="col-md-6 d-flex align-items-center mb-3 mb-md-0 ps-md-4">
                <div className="img-wrapper">
                  <img src={item.image} alt={item.name} />
                </div>
                <span className="product-name">{item.name}</span>
              </div>

              {/* Price */}
              {/* col-md-2 (desktop) | col-4 (mobile) */}
              <div className="col-md-2 col-4 text-md-center text-muted fw-bold">
                ${item.price.toFixed(2)}
              </div>

              {/* Quantity Stepper */}
              {/* col-md-2 (desktop) | col-4 (mobile) */}
              <div className="col-md-2 col-4 text-center">
                <div className="qty-stepper">
                  <button className="qty-btn"><FaMinus size={10} /></button>
                  <span className="qty-value">{item.quantity}</span>
                  <button className="qty-btn"><FaPlus size={10} /></button>
                </div>
              </div>

              {/* Subtotal & Remove */}
              {/* col-md-2 (desktop) | col-4 (mobile) */}
              <div className="col-md-2 col-4 d-flex justify-content-end align-items-center pe-md-4">
                <span className="fw-bold mr-4 text-dark">${(item.price * item.quantity).toFixed(2)}</span>
                <FaTimes className="remove-icon" />
              </div>
            </div>
          ))}

          {/* Coupon and Remove All Buttons */}
          <div className="row mt-4 pt-2">
            {/* Input Section: Stacked on mobile, side-by-side on desktop */}
            <div className="col-md-6 d-flex mb-3 mb-md-0">
              <TextField 
                variant="outlined" 
                placeholder="Coupon code" 
                size="small" 
                fullWidth
                className="coupon-input"
                sx={{ mr: 2 }}
              />
              <Button variant="contained" disableElevation className="btn-blue">
                Apply coupon
              </Button>
            </div>
            
            {/* Remove Button Section */}
            <div className="col-md-6 text-end">
              <Button variant="contained" disableElevation className="btn-blue">
                Remove All
              </Button>
            </div>
          </div>
        </div>

        {/* ================= RIGHT COLUMN: CART TOTALS ================= */}
        {/* Uses col-lg-4 (33% width on large screens), full width on mobile */}
        <div className="col-lg-4">
          <div className="cart-totals-box">
            <h6 className="totals-title">Cart Totals</h6>
            
            <div className="d-flex justify-content-between mb-3 align-items-center">
              <span className="text-muted fw-bold" style={{ fontSize: '0.9rem' }}>Subtotal</span>
              <span className="fw-bold text-dark" style={{ fontSize: '1rem' }}>${subtotal}</span>
            </div>

            <Divider className="mb-3" />

            <div className="mb-3">
              <span className="text-muted fw-bold mb-2 d-block" style={{ fontSize: '0.9rem' }}>Shipping</span>
              
              <RadioGroup defaultValue="flat" name="shipping-group">
                {/* Flat Rate Option */}
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <FormControlLabel 
                    value="flat" 
                    control={<Radio size="small" className="radio-teal" />} 
                    label={<span className="shipping-label">Flat rate:</span>} 
                    className="m-0"
                  />
                  <span className="text-danger fw-normal" style={{ fontSize: '0.9rem' }}>${shippingCost.toFixed(2)}</span>
                </div>
                
                {/* Local Pickup Option */}
                <div className="d-flex justify-content-between align-items-center">
                  <FormControlLabel 
                    value="local" 
                    control={<Radio size="small" className="radio-teal" />} 
                    label={<span className="shipping-label">Local pickup</span>} 
                    className="m-0"
                  />
                </div>
              </RadioGroup>
              
              <div className="mt-3 text-end">
                <p className="mb-1 text-muted" style={{ fontSize: '0.85rem' }}>Shipping to <strong>AL</strong>.</p>
                <a href="#!" className="change-address-link">Change address</a>
              </div>
            </div>

            <Divider className="mb-4" />

            <div className="d-flex justify-content-between align-items-center mb-4">
              <span className="text-muted fw-bold" style={{ fontSize: '0.9rem' }}>Total</span>
              <span className="fw-bold fs-4 text-dark">${total}</span>
            </div>

            <Button fullWidth variant="contained" className="btn-checkout">
              Proceed to checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;