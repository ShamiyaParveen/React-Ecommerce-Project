import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import ProductItems from "../ProductItem/ProductItems";
import cta from '../../assets/images/cta.png'

const BestSeller = () => {
  const productcards = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
      <section className="homeproduct bg-white">
        <div className="container">
          {/* Slider Row */}
          <div className="row">
            <div className="col-3 d-none d-lg-block">
              <div className="d-flex flex-column justify-content-center">
               <img
                src="https://www.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Library-Sites-BibaSharedLibrary/en_IN/dw686f0f3a/A-AW25/embroidery-sept18.jpg"
                alt="Banner"
                className="img-fluid rounded mb-4"
              />
              <img
                src="https://www.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Library-Sites-BibaSharedLibrary/en_IN/dwce3d726f/A-AW25/A-DOW/g4-nov4.jpg"
                alt="Banner"
                className="img-fluid rounded"
              />
              </div>
             
            </div>
            <div className="col-lg-9 col-12 ">
              <div className="row mb-4">
                <div className="col-lg-7">
                  <p className="text-left sub-heading">Do not miss</p>
                  <h2 className="section-title text-left">
                    Best <span className="gradient-text"> Sellers</span>
                  </h2>
                </div>
                <div className="col-lg-5 align-self-center">
                  <Link to="/" className="see-all-link float-right">
                    <Button>View all</Button>
                  </Link>
                </div>
              </div>
              <Slider {...productcards} className="product-slider">
                <ProductItems />
                <ProductItems />
                <ProductItems />
                <ProductItems />
                <ProductItems />
                <ProductItems />
              </Slider>

              <div className="pt-3">
                <img src={cta} alt="Banner"
                className="img-fluid rounded mb-4"/>

                 <div class="discount-banner">
                  <div class="container d-flex justify-content-center align-items-center">
                    <div class="promo-text">
                      Super discount for your{" "}
                      <span class="promo-highlight">first purchase.</span>
                    </div>

                    <div class="coupon-code">FREE25BAC</div>

                    <div class="instruction-text">
                      Use discount code in checkout!
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BestSeller;
