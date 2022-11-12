import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useSpring, animated } from 'react-spring';

//const audioRef = new Audio("/audios/Kaldevi_ambience1.mp3");

function Audio({isActive, audio, setAudio}){
    //const [audio, setAudio] = useState(false);
    //const audioSrc = "/audios/Kaldevi_ambience1.mp3";
    const audioRef = useRef();
    
    //const musicRef = useRef();

    //const [audioRef, setAudioRef] = useState(new Audio (audioSrc));

    //const volumeAmbience = useSpring({volume: audio ? 1 : 0});

    /* useEffect(() => {
      audioRef.current.play();
      console.log(audioRef)
    }, []) */

    useEffect(() => {
      if(!isActive){
        setAudio(true);
        
      }
    }, [isActive])
  
  
    useEffect(() => {
      if(audio){
        audioRef.current.volume = 0;
        audioRef.current.play();

        //Start music at random point
        //musicRef.current.currentTime = Math.floor(Math.random() * (musicRef.current.duration - 0 + 1) + 0)
        //musicRef.current.volume = 0;
        //musicRef.current.play();

        fadeIn(audioRef, 0.9);
        
      }else{
        audioRef.current.pause();
        //musicRef.current.pause();
        /* if(isActive){
          audioRef.current.pause();
        }else{
          fadeOut(audioRef);
        } */
        
      }
    }, [audio])


    function fadeOut(sound){
      //console.log(sound)
      if(sound.current.volume > 0.01){
          sound.current.volume -= 0.01;
          setTimeout(() => fadeOut(sound), 2);
      }else{
          sound.current.volume = 0;
          sound.current.pause();
      }
    }

    function fadeIn(sound, finalVol){
      //console.log(sound)
      //sound.current.play();
      if(sound.current.volume < finalVol){
          sound.current.volume += 0.01;
          setTimeout(() => fadeIn(sound, finalVol), 2);
      }
    }

    return (
      <div style={{display: "none"}}>
        <audio ref={audioRef} src="/audios/Kaldevi_music_cut.mp3" loop></audio>
      </div>
    )
}

export default Audio;