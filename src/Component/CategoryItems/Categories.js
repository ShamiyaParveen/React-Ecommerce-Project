import React from 'react'
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

const Categories = () => {
      const cartegoryslider = {
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
    
      <section className="section-pad">
        <div className="container">
          <div className="row mb-4">
            <div className="col-lg-7">
              <p className="text-left sub-heading">All Categories</p>
              <h2 className="section-title text-left">Shop by <span className="gradient-text">Category</span></h2>
              </div>
               <div className="col-lg-5 align-self-center">
              <Link to='/' className="see-all-link float-right"><Button>View all</Button></Link>
              </div>
            </div>
         <div className="category-section">
  <Slider {...cartegoryslider}>

    <div>
      <div className="category-item">
        <div className="cat-img-box">
          <img
            src="https://cmsimages.shoppersstop.com/Accessorize_web_ccea56e0de/Accessorize_web_ccea56e0de.png"
            alt="Accessories"
          />
        </div>
        <h3 className="cat-title">Accessories</h3>
        <p className="cat-count">120 Products</p>
      </div>
    </div>

    <div>
      <div className="category-item">
        <div className="cat-img-box">
          <img
            src="https://cmsimages.shoppersstop.com/Lee_Wrangler_c2ee5b0968/Lee_Wrangler_c2ee5b0968.png"
            alt="Denim"
          />
        </div>
        <h3 className="cat-title">Men's Denim</h3>
        <p className="cat-count">85 Products</p>
      </div>
    </div>

    <div>
      <div className="category-item">
        <div className="cat-img-box">
          <img
            src="https://cmsimages.shoppersstop.com/Caprese_web_306bcad023/Caprese_web_306bcad023.png"
            alt="Handbags"
          />
        </div>
        <h3 className="cat-title">Women’s Handbags</h3>
        <p className="cat-count">42 Products</p>
      </div>
    </div>

    <div>
      <div className="category-item">
        <div className="cat-img-box">
          <img
            src="https://cmsimages.shoppersstop.com/Biba_web_5335bd4fbe/Biba_web_5335bd4fbe.png"
            alt="Ethnic Wear"
          />
        </div>
        <h3 className="cat-title">Ethnic Wear</h3>
        <p className="cat-count">67 Products</p>
      </div>
    </div>

    <div>
      <div className="category-item">
        <div className="cat-img-box">
          <img
            src="https://cmsimages.shoppersstop.com/Skechers_puma_Deals_Card_Web_90e142232c/Skechers_puma_Deals_Card_Web_90e142232c.png"
            alt="Footwear"
          />
        </div>
        <h3 className="cat-title">Footwear</h3>
        <p className="cat-count">29 Products</p>
      </div>
    </div>

  </Slider>
</div>

        </div>
      </section>
    
    </>
  )
}

export default Categories