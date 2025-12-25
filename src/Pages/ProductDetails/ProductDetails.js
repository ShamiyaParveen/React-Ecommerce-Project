import React, { useState } from 'react'
import ProductImage from '../../Component/ProductImage/ProductImage'
import ProductQuantity from '../../Component/ProductQuantity/ProductQuantity'

import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import { FaStar, FaRegStar } from "react-icons/fa"

import Products from '../../Component/ProductItem/Products'
import ProductDetailsSingle from '../../Component/ProductDetailsSingle/ProductDetailsSingle'
import AddCartButton from '../../Component/AddCartButton/AddCartButton'

/* ---------- TAB PANEL ---------- */
function TabPanel({ children, value, index }) {
  return value === index && <Box className="product-tab-content">{children}</Box>
}

const ProductDetails = () => {

  const [tabValue, setTabValue] = useState(0);
  const [rating, setRating] = useState(0);

   

  return (
    <>
      <div className="Product-single-page container">

        {/* PRODUCT ROW */}
        <div className="product-content">
          <ProductImage />

          <div className="product-details px-4">
            <ProductDetailsSingle />
            <ProductQuantity />
            <AddCartButton />

            <div className="footer-tags pt-5">
              <p>Category: <span>Meats & Seafood</span></p>
              <p>Tags: <span>chicken, natural, organic, healthy</span></p>
            </div>

            <div className='single-pro-ques py-4'>
              <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Product Details</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    This product is crafted using high-quality materials for durability and performance.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Shipping & Returns</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Fast delivery across India with easy 7-day returns.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>

        {/* TABS */}
        <div className="product-tabs-section pt-5">

          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={tabValue} onChange={(e, v) => setTabValue(v)}>
              <Tab label="DESCRIPTION" />
              <Tab label="ADDITIONAL INFORMATION" />
              <Tab label="REVIEWS (1)" />
            </Tabs>
          </Box>

          <TabPanel value={tabValue} index={0}>
            <p>Premium quality product designed for daily use with long-lasting freshness.</p>
            <p>Carefully packed to preserve taste and nutritional value.</p>
          </TabPanel>

          <TabPanel value={tabValue} index={1}>
            <p><strong>Weight:</strong> 500g</p>
            <p><strong>Storage:</strong> Refrigerated</p>
            <p><strong>Country:</strong> India</p>
          </TabPanel>

          {/* REVIEWS */}
          <TabPanel value={tabValue} index={2}>

            {/* REVIEW CARDS (UNCHANGED) */}
            <div className="review-qa-section">
              <h5 className="review-heading mb-4">Customer questions & answers</h5>
              <div className="row">
                {[
                  { name: "Rinku Verma", img: 47, date: "01/03/1993", text: "Quality and taste are excellent." },
                  { name: "Ankit Sharma", img: 32, date: "14/08/2022", text: "Fresh product and fast delivery." },
                  { name: "Pooja Singh", img: 12, date: "09/01/2023", text: "Amazing taste. Will order again." }
                ].map((r, i) => (
                  <div key={i} className="col-lg-4 col-md-6 col-12 mb-4">
                    <div className="review-card h-100">
                      <div className="review-top">
                        <span className="review-date">{r.date}</span>
                        <div className="review-stars">
                          <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </div>
                      </div>
                      <div className="review-avatar text-center">
                        <img src={`https://i.pravatar.cc/100?img=${r.img}`} alt="user" />
                        <h6>{r.name}</h6>
                      </div>
                      <p>{r.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ADD REVIEW FORM (UPDATED) */}
            <div className="add-review-form mt-5">

              <h4>Add a review</h4>
              <p className="form-note">
                Your email address will not be published. Required fields are marked *
              </p>

              {/* RATING */}
              <div className="rating-field mb-4">
                <label>Your rating <span>*</span></label>
                <div className="rating-stars">
                  {[1,2,3,4,5].map(num => (
                    <span key={num} onClick={() => setRating(num)}>
                      {rating >= num ? <FaStar /> : <FaRegStar />}
                    </span>
                  ))}
                </div>
              </div>

              {/* REVIEW */}
              <div className="mb-4">
                <label>Your review <span>*</span></label>
                <textarea rows="6" className="form-control"></textarea>
              </div>

              {/* NAME */}
              <div className="mb-4">
                <label>Name <span>*</span></label>
                <input type="text" className="form-control" />
              </div>

              {/* EMAIL */}
              <div className="mb-4">
                <label>Email <span>*</span></label>
                <input type="email" className="form-control" />
              </div>

              {/* CHECKBOX */}
              <div className="mb-4 form-check">
                <input type="checkbox" className="form-check-input" />
                <label className="form-check-label">
                  Save my name, email, and website in this browser for the next time I comment.
                </label>
              </div>

              <Button variant="contained">Submit</Button>
            </div>

          </TabPanel>

        </div>
      </div>


    <Products title="Related"/>
     <Products title="Recently Viewed"/>

    </>
  )
}

export default ProductDetails
