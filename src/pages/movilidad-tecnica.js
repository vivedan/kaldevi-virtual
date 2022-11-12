import React, { useState } from "react";
import Room from '../components/RoomTech';
import Footer from '../components/Footer';
import Header from '../components/Header';
import productData from "../other/productDataMovilidad";

import Blur from '../components/Blur';
import { useBreakpoint, BreakpointProvider } from 'gatsby-plugin-breakpoints';
import Audio from '../components/Audio';

import Overlay from "../components/LoaderOverlay";

import Arrow from "../components/Arrow";

import * as THREE from 'three';
import { Seo } from "../components/SEO"

const MovilidadTecnica = () => {
  const page = "Movilidad - Zona Técnica";
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
          productData={productData} 
          listActive={listActive} 
          setLoading={setLoading} 
          welcome={welcome}
          panorama={'/panos/pano_tech3.webp'}>
            <Arrow breakpoints={breakpoints} setLoading={setLoading} position={[-0, -10, 30]} rotation={[0, THREE.MathUtils.degToRad(180), -Math.PI/2]} dir={"Movilidad\nGalería"} textpos={"left"} scale={4} to={"/movilidad-galeria"} giro={giro}/>
            <Arrow breakpoints={breakpoints} setLoading={setLoading} position={[5, -10, -30]} rotation={[0, THREE.MathUtils.degToRad(0), -Math.PI/2]} dir={"Patio\nKaldevi"} textpos={"left"} scale={4} to={"/patio"} giro={giro}/>
          </Room>
      </Blur>
      <Audio audio={audio} setAudio={setAudio} isActive={welcome}/>
    </div>
  )
}

export default MovilidadTecnica

export function Head() {
  return(
    <Seo />
  )
}
