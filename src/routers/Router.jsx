import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from '../pages/Home';
import Orderlist from '../pages/Orderlist';

const Router = () => {return(
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/orderlist" element={<Orderlist />} /> 
    </Routes>
     );
  
  
};

export default Router;


