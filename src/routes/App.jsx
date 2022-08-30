import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../containers/Home';
import { Checkout } from "../containers/Checkout";
import { Information } from "../containers/Information";
import { NotFound } from "../containers/NotFound";
import { Success } from "../containers/Success";
import { Payment } from "../containers/Payment";
import { Layout } from "../components/Layout";
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";

const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route  path="/checkout" element={<Checkout/>}></Route>
            <Route  path="/checkout/information" element={<Information/>}></Route>
            <Route  path="/checkout/payment" element={<Payment/>}></Route>
            <Route  path="/checkout/success" element={<Success/>}></Route>
            <Route path="*" element={<NotFound/>}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App