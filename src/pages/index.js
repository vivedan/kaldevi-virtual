import React, { Component, Suspense, useState, useEffect, useRef } from 'react';
import Room from '../components/RoomEntry';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Blur from '../components/Blur';

import { useBreakpoint, BreakpointProvider } from 'gatsby-plugin-breakpoints';
import Audio from '../components/Audio';

import Overlay from '../components/LoaderOverlay';
import { Seo } from "../components/SEO"

const IndexPage = () => {
  const page = "Hall Kaldevi";
  const [welcome, setWelcome] = useState(true);
  const [audio, setAudio] = useState(false);
  const [listActive, setListActive] = useState(false);

  const breakpoints = useBreakpoint();

  const [loading, setLoading] = useState(true);

  const [giro, setGiro] = useState(true);
 

  return (
    <div>
      <Overlay visible={loading}/>
      {!welcome && <Header setAudio={setAudio} audio={audio} page={page} setListActive={setListActive} listActive={listActive} giro={giro} setGiro={setGiro}/>}
      <Footer />
      <Blur page={page} setBlur={setWelcome} blur={welcome}>
        <Room breakpoints={breakpoints} listActive={listActive} setLoading={setLoading} welcome={welcome} giro={giro} />
      </Blur>
      
      <Audio audio={audio} setAudio={setAudio} isActive={welcome}/>

    </div>
  )
}

export default IndexPage

export function Head() {
  return(
    <Seo />
  )
}
