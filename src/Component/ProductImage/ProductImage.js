import React, { useState } from 'react'



// --- Mock Data for Images ---
const imgs = [
  "https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg",
  "https://images-magento.shoppersstop.com/pub/media/catalog/product/S25711GDNST03/S25711GDNST03_CORAL/S25711GDNST03_CORAL.jpg_2000Wx3000H",
  "https://img.freepik.com/free-photo/top-view-cooked-pasta-with-meat-sauce-inside-plate-dark-desk_23-2148564287.jpg",
];


const ProductImage = () => {
      const [activeImg, setActiveImg] = useState(imgs[0]);
  return (
    <>
          <div className="product-gallery sticky">
            <div className="main-image-container">
              <span className="badge-custom badge-blue text-dark">20%</span>
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
    </>
  )
}

export default ProductImage