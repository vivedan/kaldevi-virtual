import React, { Component, Suspense, useState, useEffect, useRef } from 'react';
import Room from '../components/RoomGaleria';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Blur from '../components/Blur';
//import useAudio from '../hooks/useAudio';


import { useBreakpoint, BreakpointProvider } from 'gatsby-plugin-breakpoints';
import Audio from '../components/Audio';

const IndexPage = () => {
  const page = "Ortopedia - Galería";
  const [welcome, setWelcome] = useState(true);
  const [audio, setAudio] = useState(false);
  //const {audioRef, musicRef, audio, setAudio} = useAudio(welcome);

  const breakpoints = useBreakpoint();

  return (
    <div>
      {!welcome && <Header setAudio={setAudio} audio={audio} page={page}/>}
      {!welcome && <Footer />}
      <Blur page={page} setBlur={setWelcome} blur={welcome}>
        <Room breakpoints={breakpoints}/>
      </Blur>

      <Audio audio={audio} setAudio={setAudio} isActive={welcome}/>
      
      {/* <audio ref={audioRef} src="/audios/Kaldevi_ambience1.mp3" loop></audio>
      <audio ref={musicRef} src="/audios/Kaldevi_music_cut.mp3" loop></audio> */}
    </div>
  )
}

export default IndexPage
