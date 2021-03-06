import React, { Component, Suspense, useState, useEffect } from 'react';

import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, PositionalAudio, Box, OrbitControls } from '@react-three/drei';

import { useSpring, animated, config } from 'react-spring';

import Model from './Model';

import '../styles/styles.css';

import Dome from './Dome';
import ProductInfo from './ProductInfo';
import ImageInfo from './ImageInfo';
import Arrow from './Arrow';

import Image from './Image';
import Video from './Video';
import Overlay from './Overlay';
import AudioClick from './AudioClick';
import CustomControls from './CustomControls';

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
        filter: blur ? "blur(8px)" : "blur(0px)",
        mixBlendMode: props.welcome ? "hard-light" : "normal",
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
                    <CustomControls breakpoints={props.breakpoints} autoRotate={firstClick}/>
                    {/* <ambientLight />
                    <pointLight position={[10, 10, 10]} /> */}

                    <Suspense fallback={null}>
                            {/* <Model 
                                position={[-70, -12.5, 50]} 
                                rotation={[0, THREE.MathUtils.degToRad(45), 0]} 
                                scale={8.1}
                                setProjectSelected={setProjectSelected}
                                projectSelected={projectSelected}
                                setImageSelected={setImageSelected}
                                /> */}
                            <group rotation={[0, THREE.MathUtils.degToRad(-100), 0]}>
                                <Dome panorama={'/pano_entry.jpg'}/>
                                <Arrow breakpoints={props.breakpoints} setLoading={props.setLoading} position={[35, 0, 20]} dir={"Ortopedia\nZona T??cnica"} textpos={"left"} rotation={[0, -Math.PI/2, Math.PI]} scale={4} to={"/ortopedia-tecnica"}/>
                                <Arrow breakpoints={props.breakpoints} setLoading={props.setLoading} position={[25, -7, 0]} dir={"Patio\nKaldevi"} textpos={"left"} rotation={[0, -Math.PI/2, -Math.PI/2]} scale={4} to={"/patio"}/>
                                <Arrow breakpoints={props.breakpoints} setLoading={props.setLoading} position={[-10, 0, 40]} dir={"Ortopedia\nGaler??a"} textpos={"right"} rotation={[0, THREE.MathUtils.degToRad(180), 0]} scale={4} to={"/ortopedia-galeria"}/>

                                <Image 
                                    position={[99, 18, -205]} 
                                    src={"/Kaldevi_25years_screen.jpg"} 
                                    rotation={[0, THREE.MathUtils.degToRad(-45), 0]} 
                                    scale={10} 
                                    size={[13, 8]}
                                    setClicked={setClicked}/>
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