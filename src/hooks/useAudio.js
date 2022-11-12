import { useState, useEffect, useRef } from 'react';
import { useSpring } from 'react-spring';

export default function useAudio(isActive){
    const [audio, setAudio] = useState(false);
    const audioRef = useRef();
    const musicRef = useRef();

    //const volumeAmbience = useSpring({volume: audio ? 1 : 0});
    //const volumeMusic = useSpring({volume: audio ? 1 : 0});

    useEffect(() => {
      if(!isActive){
        setAudio(true);
        
      }
    }, [isActive])
  
  
    useEffect(() => {
      if(audio){
        audioRef.current.play();

        //Start music at random point
        musicRef.current.currentTime = Math.floor(Math.random() * (musicRef.current.duration - 0 + 1) + 0)
        musicRef.current.volume = 0.1;
        musicRef.current.play();
        
      }else{
        audioRef.current.pause();
        musicRef.current.pause();
      }
    }, [audio])

    return {audioRef, musicRef, audio, setAudio}
}