import React, { useState } from "react";
import Sidebar from "../../Component/Sidebar/Sidebar";
import Slider from "react-slick";
import ProductItems from "../../Component/ProductItem/ProductItems";
import Button from "@mui/material/Button";
import { IoMdMenu } from "react-icons/io";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { IoGrid } from "react-icons/io5";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { FaAngleDown } from "react-icons/fa";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Listing = () => {
  var bannershop = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const openDropDown = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [dropNum, setdropNum] = useState(null);
  const openDropDownnum = Boolean(dropNum);
  const handleClick1 = (event) => {
    setdropNum(event.currentTarget);
  };
  const handleClose1 = () => {
    setdropNum(null);
  };

  return (
    <>
      <section className="listing-section">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <Sidebar />
            </div>
            <div className="col-9 mt-5">
              <div className="shop-banner-img pt-3">
                <Slider {...bannershop}>
                  <div className="item">
                    <img
                      src="https://www.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Library-Sites-BibaSharedLibrary/en_IN/dwafbae111/A-A-EOSS/EOSS-Main-Banner4.jpg"
                      alt="Banner1"
                      className="img-fluid w-100 rounded"
                    />
                  </div>

                  <div className="item">
                    <img
                      src="https://www.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Library-Sites-BibaSharedLibrary/en_IN/dw16895c1f/A-A-EOSS/EOSS-Main-Banner5.jpg"
                      alt="Banner1"
                      className="img-fluid w-100 rounded"
                    />
                  </div>
                  <div className="item">
                    <img
                      src="https://www.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Library-Sites-BibaSharedLibrary/en_IN/dwe8af84b8/A-A-EOSS/EOSS-newarrval-Banner2.jpg"
                      alt="Banner1"
                      className="img-fluid w-100 rounded"
                    />
                  </div>
                </Slider>
              </div>
              <div className="shop-filter px-2 my-4 d-flex justify-content-between align-items-center">
                <div>
                  <Button className="active">
                    <IoMdMenu />
                  </Button>
                  <Button>
                    <IoGrid />
                  </Button>
                  <Button>
                    <BsGrid3X3GapFill />
                  </Button>
                  <Button>
                    <TfiLayoutGrid4Alt />
                  </Button>
                </div>

                <div className="filteration ml-auto pr-3">
                  <span onClick={handleClick}>
                    Sort by <FaAngleDown />
                  </span>
                  <Menu
                    id="basic-menu"
                    className="filtershort"
                    anchorEl={anchorEl}
                    open={openDropDown}
                    onClose={handleClose}
                    slotProps={{
                      list: {
                        "aria-labelledby": "basic-button",
                      },
                    }}
                  >
                    <MenuItem onClick={handleClose}>
                      Short by popularity
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      Short by Avarage Rating
                    </MenuItem>
                    <MenuItem onClick={handleClose}>Short by Latest</MenuItem>
                    <MenuItem onClick={handleClose}>
                      Short by Price: Low to High
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      Short by Price: High to Low
                    </MenuItem>
                  </Menu>

                  <span onClick={handleClick1}>
                    Show <FaAngleDown />
                  </span>
                  <Menu
                    id="basic-menu"
                    className="numdropmenu"
                    anchorEl={dropNum}
                    open={openDropDownnum}
                    onClose={handleClose1}
                    slotProps={{
                      list: {
                        "aria-labelledby": "basic-button",
                      },
                    }}
                  >
                    <MenuItem onClick={handleClose1}>2</MenuItem>
                    <MenuItem onClick={handleClose1}>4</MenuItem>
                    <MenuItem onClick={handleClose1}>6</MenuItem>
                    <MenuItem onClick={handleClose1}>8</MenuItem>
                    <MenuItem onClick={handleClose1}>10</MenuItem>
                  </Menu>
                </div>
              </div>

              <div className="row">
                <div className="col-4 px-0">
                  <ProductItems />
                </div>
                 <div className="col-4 px-0">
                  <ProductItems />
                </div>
                 <div className="col-4 px-0">
                  <ProductItems />
                </div>
                </div>



            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Listing;
