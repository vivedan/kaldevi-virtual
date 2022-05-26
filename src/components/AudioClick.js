import React, { useState, useRef, useEffect } from 'react';

function AudioClick(props) {
    const audioRef = useRef();

    useEffect(()=>{
        if(props.clicked){
            if(props.navigation){
                audioRef.current.volume = 1;
                audioRef.current.src = "/audios/Kaldevi_click2.mp3"
                audioRef.current.play();
            }else{
                audioRef.current.volume = 0.3;
                audioRef.current.src = "/audios/Kaldevi_click1.mp3"
                audioRef.current.play();
            }
        }
    }, [props.clicked])

    return (
        <audio ref={audioRef} ></audio>
    );
}

export default AudioClick;