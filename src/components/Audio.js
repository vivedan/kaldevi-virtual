import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';

export default function Audio({isActive, audio, setAudio}){
    //const [audio, setAudio] = useState(false);
    const audioRef = useRef();
    const musicRef = useRef();

    const volumeAmbience = useSpring({volume: audio ? 1 : 0});
    const volumeMusic = useSpring({volume: audio ? 0.1 : 0});

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
        musicRef.current.currentTime = Math.floor(Math.random() * (musicRef.current.duration - 0 + 1) + 0)
        musicRef.current.volume = 0;
        musicRef.current.play();

        fadeIn(audioRef, 0.9);
        fadeIn(musicRef, 0.1);
        
      }else{
        /* audioRef.current.pause();
        musicRef.current.pause(); */
        if(isActive){
          audioRef.current.pause();
          musicRef.current.pause();
        }else{
          fadeOut(audioRef);
          fadeOut(musicRef);
        }
        
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
      <div>
        <audio ref={audioRef} src="/audios/Kaldevi_ambience1.mp3" loop></audio>
        <audio ref={musicRef} src="/audios/Kaldevi_music_cut.mp3" loop></audio>
      </div>
    )
}