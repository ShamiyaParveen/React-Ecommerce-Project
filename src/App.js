import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import Header from "./Component/Header/header";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Footer from "./Component/Footer/Footer";
import ProductModal from "./Component/ProductModal/ProductModal";
import Listing from "./Pages/Listing/Listing";

const MyContext = createContext();

function App() {
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [isOpenProductModal, setIsOpenProductModal] = useState(false);

  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries");
  }, []);

  const getCountry = async (url) => {
    const responsive = await axios.get(url).then((res)=>{
      setCountryList(res.data.data);
      console.log(res.data.data);
      
    })

  }

  const value = {
    countryList,
   selectedCountry,
    setSelectedCountry,
    setIsOpenProductModal,
    isOpenProductModal
  };

  return (
    <BrowserRouter>
      <MyContext.Provider value={value}>
        <Header />
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/cat/:id" exact={true} element={<Listing />} />
        </Routes>
        <Footer />

        
            {
              isOpenProductModal === true && <ProductModal />
            }

      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { MyContext };
