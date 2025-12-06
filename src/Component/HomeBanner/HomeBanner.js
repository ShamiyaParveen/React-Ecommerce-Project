import React from 'react'
import Slider from "react-slick";


const HomeBanner = () => {
  var bannerslider = {
   dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: true,   
  };
  return (
    <>





       <div className='homebannersection'>
      <div className='container-fluid p-0'>
      <div className='row'>
        <div className='col-lg-12'>
               <Slider {...bannerslider} >
                <div className='item'>
                    <img src='https://cmsimages.shoppersstop.com/Bank_to_Bag_Sale_Caroosuel_SS_1_962926f922/Bank_to_Bag_Sale_Caroosuel_SS_1_962926f922.jpg' alt='Banner1' className='img-fluid w-100'/>
                </div>

                 <div className='item'>
                    <img src='https://cmsimages.shoppersstop.com/PB_fest_main_kv_web_ce4cbdf46e/PB_fest_main_kv_web_ce4cbdf46e.png' alt='Banner1' className='img-fluid w-100'/>
                </div>
                 <div className='item'>
                    <img src='https://cmsimages.shoppersstop.com/Main_KV_web_742464bae8/Main_KV_web_742464bae8.png' alt='Banner1' className='img-fluid w-100'/>
                </div>
                </Slider> 
      </div>
      </div>
      
</div> 
    </div>
    </>
  )
}

export default HomeBanner