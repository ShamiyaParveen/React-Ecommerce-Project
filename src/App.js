import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import Header from "./Component/Header/header";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

const MyContext = createContext();

function App() {
  const [countryList, setCountryList] = useState([]);
  const [loadingCountries, setLoadingCountries] = useState(true);
  const [countryError, setCountryError] = useState(null);

  useEffect(() => {
    getCountry();
  }, []);

   const getCountry = async () => {
      try {
        setLoadingCountries(true);
        setCountryError(null);

        const res = await axios.get(
          "https://restcountries.com/v3.1/all?fields=name,cca2"
        );

        console.log("Countries API response:", res.data);
        setCountryList(res.data || []);
      } catch (error) {
        console.error("Error fetching countries:", error);
        setCountryError(error);
      } finally {
        setLoadingCountries(false);
      }
    };


  const value = {
    countryList,
    loadingCountries,
    countryError,
  };

  return (
    <BrowserRouter>
      <MyContext.Provider value={value}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { MyContext };
