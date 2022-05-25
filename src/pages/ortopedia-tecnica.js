import React, { Component, Suspense, useState, useEffect } from "react";
import Room from '../components/RoomTech';
import Footer from '../components/Footer';
import Header from '../components/Header';
import productData from "../other/productDataOrtopedia";

const OrtopediaTecnica = () => {
  const page = "Ortopedia - Zona Técnica";
  const [listActive, setListActive] = useState(false);
  return (
    <div>
      <Header page={page} setListActive={setListActive} listActive={listActive} />
      <Room productData={productData} listActive={listActive}/>
      <Footer />
    </div>
  )
}

export default OrtopediaTecnica
