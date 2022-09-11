import React, { Component, Suspense, useState, useEffect, useRef } from 'react';
import Room from '../components/RoomGaleria';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Blur from '../components/Blur';

import { useBreakpoint, BreakpointProvider } from 'gatsby-plugin-breakpoints';
import Audio from '../components/Audio';

import Overlay from '../components/LoaderOverlay';

import * as THREE from 'three';
import Arrow from '../components/Arrow';
import { Seo } from "../components/SEO"

const IndexPage = () => {
  const page = "Movilidad - Galería";
  const [welcome, setWelcome] = useState(true);
  const [audio, setAudio] = useState(false);
  const [listActive, setListActive] = useState(false);

  const breakpoints = useBreakpoint();
  const [loading, setLoading] = useState(true);
  const [giro, setGiro] = useState(false);

  return (
    <div>
      <Overlay visible={loading}/>
      {!welcome && <Header setAudio={setAudio} audio={audio} page={page} setListActive={setListActive} listActive={listActive}/>}
      <Footer giro={giro} setGiro={setGiro}/>
      <Blur page={page} setBlur={setWelcome} blur={welcome}>
        <Room 
          giro={giro}
          breakpoints={breakpoints} 
          listActive={listActive} 
          setLoading={setLoading} 
          welcome={welcome}
          panorama={'/pano_art3.jpg'}
          panoramaB={'/pano_art3_b.jpg'}
          detectorPosition={[85, 10, -3]}
          detectorRotation={[0, THREE.MathUtils.degToRad(-90), THREE.MathUtils.degToRad(10)]}>
          <Arrow breakpoints={breakpoints} setLoading={setLoading} position={[35, 0, 40]} dir={"Movilidad\nZona Técnica"} textpos={"left"} rotation={[0, THREE.MathUtils.degToRad(-110), Math.PI]} scale={5} to={"/movilidad-tecnica"}/>
          <Arrow breakpoints={breakpoints} setLoading={setLoading} position={[35, -13, 20]} dir={"Bienestar\nGaleria"} textpos={"right"} rotation={[0, THREE.MathUtils.degToRad(-100), -Math.PI/2]} scale={5} to={"/bienestar-galeria"}/>
          <Arrow breakpoints={breakpoints} setLoading={setLoading} position={[-35, -7, 5]} dir={"Entrada"} textpos={"right"} rotation={[0, THREE.MathUtils.degToRad(65), 0]} scale={5} to={"/"}/>
        </Room>
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
