import React, { useState } from 'react';
import Room from '../components/RoomGaleria';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Blur from '../components/Blur';

import { useBreakpoint, BreakpointProvider } from 'gatsby-plugin-breakpoints';
import Audio from '../components/Audio';

import Overlay from '../components/LoaderOverlay';

import * as THREE from 'three';
import Arrow from '../components/Arrow';
import { Seo } from "../components/SEO";

import commentsData from '../other/commentsBienestarData';

const IndexPage = () => {
  const page = "Bienestar - Galería";
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
          setGiro={setGiro}
          breakpoints={breakpoints} 
          listActive={listActive} 
          setLoading={setLoading} 
          welcome={welcome}
          panorama={'/panos/pano_art2.webp'}
          panoramaB={'/panos/pano_art2_b.webp'}
          detectorPosition={[85, -4, -25]}
          detectorRotation={[0, THREE.MathUtils.degToRad(-90), THREE.MathUtils.degToRad(-10)]}
          comments={commentsData}
          commentColor={"yellow"}>
          <Arrow breakpoints={breakpoints} setLoading={setLoading} position={[35, 0, -45]} dir={"Bienestar\nZona Técnica"} textpos={"right"} rotation={[0, THREE.MathUtils.degToRad(-70), 0]} scale={5} to={"/bienestar-tecnica"} giro={giro}/>
          <Arrow breakpoints={breakpoints} setLoading={setLoading} position={[35, -17, -25]} dir={"Movilidad\nGaleria"} textpos={"left"} rotation={[0, THREE.MathUtils.degToRad(-70), -Math.PI/2]} scale={5} to={"/movilidad-galeria"} giro={giro}/>
          <Arrow breakpoints={breakpoints} setLoading={setLoading} position={[-35, -6, -8]} dir={"Ortopedia\nGaleria"} textpos={"right"} rotation={[0, THREE.MathUtils.degToRad(55), -Math.PI/2]} scale={5} to={"/ortopedia-galeria"} giro={giro}/>
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
