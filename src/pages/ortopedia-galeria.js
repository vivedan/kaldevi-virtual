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
  const page = "Ortopedia - Galería";
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
        <Room 
          breakpoints={breakpoints} 
          listActive={listActive} 
          setLoading={setLoading} 
          welcome={welcome}
          panorama={'/pano_art1.jpg'}
          panoramaB={'/pano_art1_b.jpg'}
          detectorPosition={[85, 10, -12]}
          detectorRotation={[0, THREE.MathUtils.degToRad(-90), THREE.MathUtils.degToRad(-15)]}>
            <Arrow breakpoints={breakpoints} setLoading={setLoading} position={[35, 0, -20]} dir={"Ortopedia\nZona Técnica"} textpos={"right"} rotation={[0, THREE.MathUtils.degToRad(-90), 0]} scale={4} to={"/ortopedia-tecnica"}/>
            <Arrow breakpoints={breakpoints} setLoading={setLoading} position={[35, -7, -16]} dir={"Bienestar\nGaleria"} textpos={"left"} rotation={[0, THREE.MathUtils.degToRad(-90), -Math.PI/2]} scale={4} to={"/bienestar-galeria"}/>
            <Arrow breakpoints={breakpoints} setLoading={setLoading} position={[-15, -7, -40]} dir={"Entrada"} textpos={"left"} rotation={[0, THREE.MathUtils.degToRad(45), Math.PI]} scale={5} to={"/"}/>
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
