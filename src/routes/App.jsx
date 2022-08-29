import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../containers/Home';
import { Checkout } from "../containers/Checkout";
import { Information } from "../containers/Information";
import { NotFound } from "../containers/NotFound";
import { Success } from "../containers/Success";
import { Payment } from "../containers/Payment";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route  path="/checkout" element={<Checkout/>}></Route>
        <Route  path="/checkout/information" element={<Information/>}></Route>
        <Route  path="/checkout/payment" element={<Payment/>}></Route>
        <Route  path="/checkout/success" element={<Success/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App