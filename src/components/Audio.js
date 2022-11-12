import React, { useEffect, useRef} from 'react';


function Audio({isActive, audio, setAudio}){
    const audioRef = useRef();

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
      if(sound.current.volume > 0.01){
          sound.current.volume -= 0.01;
          setTimeout(() => fadeOut(sound), 2);
      }else{
          sound.current.volume = 0;
          sound.current.pause();
      }
    }

    function fadeIn(sound, finalVol){
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