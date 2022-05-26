import React, { Component, Suspense, useState, useEffect } from "react";
import Room from '../components/RoomTech';
import Footer from '../components/Footer';
import Header from '../components/Header';
import productData from "../other/productDataOrtopedia";

import Blur from '../components/Blur';
import { useBreakpoint, BreakpointProvider } from 'gatsby-plugin-breakpoints';
import Audio from '../components/Audio';

import Overlay from "../components/LoaderOverlay";

const OrtopediaTecnica = () => {
  const page = "Ortopedia - Zona Técnica";
  const [welcome, setWelcome] = useState(true);
  const [audio, setAudio] = useState(false);
  const [listActive, setListActive] = useState(false);

  const breakpoints = useBreakpoint();

  const [loading, setLoading] = useState(true);

  return (
    <div>
      <Overlay visible={loading}/>
      {!welcome && <Header setAudio={setAudio} audio={audio} page={page} setListActive={setListActive} listActive={listActive}/>}
      <Footer />
      <Blur page={page} setBlur={setWelcome} blur={welcome}>
        <Room breakpoints={breakpoints} productData={productData} listActive={listActive} setLoading={setLoading}/>
      </Blur>
      <Audio audio={audio} setAudio={setAudio} isActive={welcome}/>
    </div>
  )
}

export default OrtopediaTecnica
