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

const IndexPage = () => {
  const page = "Bienestar - Galería";
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
          panorama={'/pano_art2.jpg'}
          panoramaB={'/pano_art2_b.jpg'}
          detectorPosition={[85, -4, -25]}
          detectorRotation={[0, THREE.MathUtils.degToRad(-90), THREE.MathUtils.degToRad(-10)]}>
          <Arrow breakpoints={breakpoints} setLoading={setLoading} position={[35, 0, -45]} dir={"Bienestar\nZona Técnica"} textpos={"right"} rotation={[0, THREE.MathUtils.degToRad(-70), 0]} scale={5} to={"/bienestar-tecnica"}/>
          <Arrow breakpoints={breakpoints} setLoading={setLoading} position={[35, -17, -25]} dir={"Movilidad\nGaleria"} textpos={"left"} rotation={[0, THREE.MathUtils.degToRad(-70), -Math.PI/2]} scale={5} to={"/movilidad-galeria"}/>
          <Arrow breakpoints={breakpoints} setLoading={setLoading} position={[-35, -6, -8]} dir={"Ortopedia\nGaleria"} textpos={"right"} rotation={[0, THREE.MathUtils.degToRad(55), -Math.PI/2]} scale={5} to={"/ortopedia-galeria"}/>
        </Room>
      </Blur>

      <Audio audio={audio} setAudio={setAudio} isActive={welcome}/>
      
    </div>
  )
}

export default IndexPage
