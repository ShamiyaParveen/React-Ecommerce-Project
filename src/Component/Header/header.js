import { Link } from 'react-router-dom';
import img_logo from '../../assets/images/logo.png';
import CountryDropDown from '../CountryDropDown/country';
import { IoSearch } from "react-icons/io5";
import Button from '@mui/material/Button';
import { FiUser } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";
import SearchBox from './SearchBox/search';
import Navigation from './Navigation/navigation';
import { useContext } from 'react';
import { MyContext } from '../../App';


const Header = () => {

     const context = useContext(MyContext);
    
    
  return (
    <>
     <header className="header"> 
    <div className="container-fluid p-0">
         <p className=" top-head-background text-white p-2 text-center mb-0 fw-400" style={{fontSize:'12px'}}>Due to the COVID 19 epidemic, orders may be processed with a slight delay
        </p>
        </div>
        <div className="container">
      
        <div className="row py-3">
            <div className="col-lg-2 logowrapper d-flex align-items-center">
               <Link to={'/'}>
               <img src={img_logo} alt="logo1" className="img-fluid"/>
               </Link> 
            </div>
            <div className="col-lg-10 d-flex align-items-center justify-content-between part2">

              {
                context.countryList.length !== 0 && <CountryDropDown /> 
              }

                           

                    <SearchBox /> 
          

            <div className='part3 d-flex align-items-center'>
                <Button className='user-icon mr-3'>
                <FiUser />
                </Button>

                <div className='ml-auto' >
                    <span className='price'>$55.3</span>
                </div>

                <div className='position-relative ml-2'>
                    <Button className='cart-icon'>
                    <IoBagOutline />
                </Button>
                <span className='count d-flex justify-content-center align-items-center'>
                    1
                </span>
                </div>
                
            </div>


            </div>
        </div>
   </div>
    </header>

    <Navigation />
   
    

    </>
   
    );
};
export default Header;