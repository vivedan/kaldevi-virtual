import React, { Component, Suspense, useState, useEffect } from 'react';

import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
//import { PerspectiveCamera, PositionalAudio, Box, OrbitControls } from '@react-three/drei';

import { useSpring, animated, config } from 'react-spring';

//import Model from './Model';

import '../styles/styles.css';

import Dome from './Dome';
//import ProductInfo from './ProductInfo';
//import ImageInfo from './ImageInfo';
//import Arrow from './Arrow';

//import Image from './Image';
import Video from './Video';
//import Overlay from './Overlay';
import AudioClick from './AudioClick';
import CustomControls from './CustomControlsLanding';

function Room(props) {

    /* const [projectSelected, setProjectSelected] = useState(false);
    const [imageSelected, setImageSelected] = useState(false); */

    /* useEffect(()=>{
        console.log(projectSelected);
    }, [projectSelected]) */

    const [overlay, setOverlay] = useState(true);
    const [clicked, setClicked] = useState(false);

    const [blur, setBlur] = useState(false);
    const [firstClick, setFirstClick] = useState(false);

    //DISCONNECT OVERLAYS AND BLUR BACKGROUND IF THE LIST OF ROOMS IS ACTIVE
    useEffect(() => {
        if(props.listActive){
            setBlur(true);
        }else{
            setBlur(false);
        }
    }, [props.listActive])

    const canvasStyle = {
        margin: "0",
        height: "100vh",
        width: "100vw",
    }

    useEffect(()=>{
        if(!clicked){
            setBlur(false);
        }else{
            setBlur(true)
        }
    }, [clicked])

    

    return ( 
        <div className="main-cont">
            
            <animated.div style={{...canvasStyle}} onClick={() => setFirstClick(true)} >
                {/* <div className="blurBackground"></div> */}
                <Canvas 
                onCreated={() => props.setLoading(false)}
                camera={ {fov: 60, near: 0.1, far: 1000, position: [0, 0, 1]} } 
                flat 
                linear >
                    <CustomControls breakpoints={props.breakpoints} autoRotate={firstClick} giro={props.giro} welcome={props.welcome}/>

                    <Suspense fallback={null}>
                            
                            <group rotation={[0, THREE.MathUtils.degToRad(-100), 0]}>
                                <Dome panorama={'/Kaldevi_pano_landing.jpg'}/>
                                
                            </group>
                    </Suspense>
                    
                </Canvas>
                
            </animated.div>
            
            {clicked && <Video setClicked={setClicked} />}
            {/* {projectSelected && <ProductInfo setProjectSelected={setProjectSelected}/> }
            {imageSelected && <ImageInfo setImageSelected={setImageSelected}/>} */}
            <AudioClick clicked={blur} />
            
        </div>
     );
}

export default Room;