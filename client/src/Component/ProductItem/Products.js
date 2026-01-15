import React from 'react'
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import ProductItems from './ProductItems';


const Products = (props) => {
    const productcards = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

  return (
    <>
         <section className="homeproduct">
  <div className="container">
    
  <div className="row mb-4">
            <div className="col-lg-7">
              <p className="text-left sub-heading">Our Shop</p>
              <h2 className="section-title text-left">  {props.title} <span className="gradient-text">Products</span></h2>
              </div>
               <div className="col-lg-5 align-self-center">
              <Link to='/' className="see-all-link float-right"><Button>View all</Button></Link>
              </div>
            </div>



    {/* Slider Row */}
    <div className="row">
      <div className="col-12">
        <Slider {...productcards} className="product-slider">
         <ProductItems />
          <ProductItems />
           <ProductItems />
            <ProductItems />
             <ProductItems />
              <ProductItems />

         
        </Slider>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Products