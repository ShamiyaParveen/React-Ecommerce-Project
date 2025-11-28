import React, { useState } from "react";
import Button from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa6";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { IoSearch } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import Slide from '@mui/material/Slide';


const Transition = React.forwardRef(function Transition(
  props,ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDrodown = () => {

const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div>
      <Button className="countryDrop " onClick={()=>setIsOpenModal(true)}>
        <div className="d-flex flex-column align-items-start" 
         
        >
          <span className="location">Your Location </span>
          <span className="location-selector">Select a Location</span>
        </div>
        <span className="ml-auto FaAngleDown">
          <FaAngleDown />
        </span>
      </Button>

      <Dialog open={isOpenModal} onClose={()=>setIsOpenModal(false)}  TransitionComponent = {Transition}>
        <h5>Choose your Delivery Location</h5>
        <p>Enter your address and we will specify the offer for your area.</p>
        <Button className="close_" onClick={()=>setIsOpenModal(false)}><IoClose></IoClose></Button>

        <div className="headerSearch">
          <input type="text" placeholder="Search for products...." />
          <Button className="p-0">
            <IoSearch />
          </Button>
        </div>

        <ul className="countryList">
         <li className="countryItem"><Button onClick={()=>setIsOpenModal(false)}>India</Button></li>
          <li className="countryItem"><Button onClick={()=>setIsOpenModal(false)}>USA</Button></li>
          <li className="countryItem"><Button onClick={()=>setIsOpenModal(false)}>UK</Button></li>
          <li className="countryItem"><Button onClick={()=>setIsOpenModal(false)}>Canada</Button></li>
          <li className="countryItem"><Button onClick={()=>setIsOpenModal(false)}>Australia</Button></li> 
          <li className="countryItem"><Button onClick={()=>setIsOpenModal(false)}>Germany</Button></li>
          <li className="countryItem"><Button onClick={()=>setIsOpenModal(false)}>France</Button></li>
          <li className="countryItem"><Button onClick={()=>setIsOpenModal(false)}>Italy</Button></li>
          <li className="countryItem"><Button onClick={()=>setIsOpenModal(false)}>Spain</Button></li>
          <li className="countryItem"><Button onClick={()=>setIsOpenModal(false)}>Brazil</Button></li>
          <li className="countryItem"><Button onClick={()=>setIsOpenModal(false)}>Mexico</Button></li>
          <li className="countryItem"><Button onClick={()=>setIsOpenModal(false)}>Japan</Button></li>
          <li className="countryItem"><Button onClick={()=>setIsOpenModal(false)}>China</Button></li>
          <li className="countryItem"><Button onClick={()=>setIsOpenModal(false)}>South Korea</Button></li>
          <li className="countryItem"><Button onClick={()=>setIsOpenModal(false)}>Russia</Button></li>
          <li className="countryItem"><Button onClick={()=>setIsOpenModal(false)}>South Africa</Button></li>
          <li className="countryItem"><Button onClick={()=>setIsOpenModal(false)}>New Zealand</Button></li>
          <li className="countryItem"><Button onClick={()=>setIsOpenModal(false)}>Netherlands</Button></li>
          <li className="countryItem"><Button onClick={()=>setIsOpenModal(false)}>Sweden</Button></li>
          <li className="countryItem"><Button onClick={()=>setIsOpenModal(false)}>Norway</Button></li>
        </ul>


      </Dialog>
    </div>
  );
};

export default CountryDrodown;
