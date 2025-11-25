import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/home";
import Header from "./Component/Header/header";


function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>

   <Route path="/" exact="true" element={Home}></Route>

    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
