import React from 'react';


const About = () => {
  return (
    <>

      <div className="container aboutsection py-5">
        <div className="row align-items-center">
          {/* LEFT COLUMN: Marketing Text */}
          <div className="col-lg-7 text-content pe-lg-5">

               <div className="row mb-2">
                <div className="col-lg-12">
                  <p className="text-left sub-heading">Do not miss</p>
                  <h2 className="section-title text-left">
                    Best <span className="gradient-text"> Sellers</span>
                  </h2>
                </div>
              
              </div>

            <div className="feature-block">
              <p className="feature-desc text-dark">
               Adaptive products empower you to offer highly personalized shopping experiences by allowing every item to be configured across sizes, colors, and other unique variants—ensuring your products are as dynamic as your customers’ needs. With automated stock management, inventory levels for each variant update in real time, giving you complete accuracy and eliminating manual effort. Paired with built-in upselling and cross-selling tools, you can effortlessly increase revenue and boost customer retention by recommending the right products at the perfect moment.
              </p>
            </div>
           
          </div>

          {/* RIGHT COLUMN: Interactive Card */}
          <div className="col-lg-5">
            <div className="product-card-container">
            <img src="https://www.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Library-Sites-BibaSharedLibrary/en_IN/dw3cebc518/A-AW25/ct-anarkali-sept19.jpg" alt="Product" className="product-image" />
             

            
            </div>
          </div>
          {/* END RIGHT COLUMN */}
        </div>
      </div>
    </>
  );
};

export default About;
