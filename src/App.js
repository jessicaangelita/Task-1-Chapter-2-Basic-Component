import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage';
import ProductPage from './pages/productpage';
import ProductDetail from './pages/productdetailpage'
import UserPage from './pages/userpage';

//import './/App.css';



const App = () => {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path ="/" element={<HomePage/>}/>
        <Route path = "/Products" element={<ProductPage/>}/>
        <Route path = "/Users" element={<UserPage/>}/>
        <Route path ="/ProductDetail" element={<ProductDetail/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
