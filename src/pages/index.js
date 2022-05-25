import React, { Component, Suspense, useState, useEffect, useRef } from 'react';
import Room from '../components/RoomEntry';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Blur from '../components/Blur';
import useAudio from '../hooks/useAudio';

const IndexPage = () => {
  const page = "Kaldevi - Entrada";
  const [welcome, setWelcome] = useState(true);

  const {audioRef, musicRef, audio, setAudio} = useAudio(welcome);
 

  return (
    <div>
      {!welcome && <Header setAudio={setAudio} audio={audio} page={page}/>}
      {!welcome && <Footer />}
      <Blur page={page} setBlur={setWelcome} blur={welcome}>
        <Room />
      </Blur>
      
      <audio ref={audioRef} src="/audios/Kaldevi_ambience1.mp3" loop></audio>
      <audio ref={musicRef} src="/audios/Kaldevi_music_cut.mp3" loop></audio>
      
    </div>
  )
}

export default IndexPage
