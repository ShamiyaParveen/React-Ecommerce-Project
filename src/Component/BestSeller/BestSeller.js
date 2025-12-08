import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import ProductItems from "../ProductItem/ProductItems";

// 10 video


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

  const productcardimg = {
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
            <div className="col-3 sticky-section  d-none d-lg-block">
              <div className="d-flex flex-column justify-content-center">
               <img
                src="https://rukminim2.flixcart.com/www/1060/1560/promos/26/09/2023/6c3c5fe2-c236-4fa2-8d97-595e1e01da01.jpg?q=60"
                alt="Banner"
                className="img-fluid rounded mb-4"
              />
           
              </div>
             
            </div>
            <div className="col-lg-9 scroll-section col-12 ">
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

             

              <div className="row">
                <div className="col-12">
                   <div className="pt-4">
               
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
                <div className="col-12 text-center mt-4">


                                <Slider {...productcardimg} className="product-slider">
               <img
                src="https://www.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Library-Sites-BibaSharedLibrary/en_IN/dw686f0f3a/A-AW25/embroidery-sept18.jpg"
                alt="Banner"
                className="img-fluid rounded-imgages rounded mt-4"
              />
               <img
                src="https://www.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Library-Sites-BibaSharedLibrary/en_IN/dw0d13e6a8/A-AW25/lehenga-sept18.jpg"
                alt="Banner"
                className="img-fluid rounded-imgages rounded mt-4"
              />
               <img
                src="https://www.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Library-Sites-BibaSharedLibrary/en_IN/dw56504a45/A-AW25/indigo-sept18.jpg"
                alt="Banner"
                className="img-fluid rounded-imgages rounded mt-4"
              />
               <img
                src="https://www.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Library-Sites-BibaSharedLibrary/en_IN/dwd41efb54/A-AW25/posh-sept18.jpg"
                alt="Banner"
                className="img-fluid rounded-imgages rounded mt-4"
              />
                <img
                src="https://www.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Library-Sites-BibaSharedLibrary/en_IN/dwe6a14e4a/A-AW25/silk-sept18.jpg"
                alt="Banner"
                className="img-fluid rounded-imgages rounded mt-4"
              />
              </Slider>


                 
                </div>
              </div>



          

            </div>

          </div>
        </div>
      </section>

      <section className="mb-0">
        <img src="https://www.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Library-Sites-BibaSharedLibrary/en_IN/dw12071d92/A-AW25/wedding-oct4.jpg" alt="Banner"
        className="img-fluid "/>
      </section>
    </>
  );
};

export default BestSeller;
