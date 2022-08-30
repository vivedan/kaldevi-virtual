import React, { Component, Suspense, useState, useEffect } from 'react';

import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, PositionalAudio, Box, OrbitControls, Plane } from '@react-three/drei';

import { useSpring, animated, config } from 'react-spring';

import Model from './Model';

import '../styles/styles.css';

import Dome from './Dome';
import DomeOverlay from './DomeOverlay';
import ProductInfo from './ProductInfo';
import ImageInfo from './ImageInfo';
import Arrow from './Arrow';
import Comment from './Comment';
import CustomControls from './CustomControls';
import AudioClick from './AudioClick';
import UICircle from './UICircle';

function Room(props) {

    /* const [projectSelected, setProjectSelected] = useState(false);
    const [imageSelected, setImageSelected] = useState(false); */

    /* useEffect(()=>{
        console.log(projectSelected);
    }, [projectSelected]) */

    const [overlay, setOverlay] = useState(false);
    const [blur, setBlur] = useState(false);
    const [firstClick, setFirstClick] = useState(false);
    const [clicked, setClicked] = useState(false);

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


    return ( 
        <div className="main-cont">
            <animated.div style={{...canvasStyle}} onClick={() => setFirstClick(true)} >
                <Canvas onCreated={() => props.setLoading(false)} camera={ {fov: 60, near: 0.1, far: 1000, position: [0, 0, 1]} } flat linear >
                    <CustomControls breakpoints={props.breakpoints} autoRotate={firstClick}/>
                    {/* <OrbitControls 
                        enablePan={true} 
                        enableZoom={false} 
                        enableRotate={true} 
                        rotateSpeed={0.25}
                        autoRotate={false} 
                        autoRotateSpeed={0.5}
                        enableDamping
                        dampingFactor={0.08} /> */}
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
                            <group rotation={[0, THREE.MathUtils.degToRad(80), 0]}>
                                <group position={props.detectorPosition} >
                                    <Plane 
                                        
                                        scale={[13, 35, 1]} 
                                        rotation={props.detectorRotation}
                                        material-transparent
                                        material-opacity={0}
                                        onPointerEnter={()=>setOverlay(true)}
                                        onPointerLeave={()=>setOverlay(false)}
                                        onClick={()=> setClicked(!clicked)}>
                                            
                                    </Plane>
                                    <group position={[0, 0, 0]} rotation={[0, -Math.PI, 0]} scale={7}>
                                                <UICircle simple/>
                                    </group>
                                </group>
                                
                                <Dome panorama={props.panorama}/>
                                <DomeOverlay panorama={props.panoramaB} overlay={overlay} clicked={clicked} />
                                {props.children}
                                {(overlay || clicked) && <group>
                                    <Comment 
                                        position={[55, -10, -30]} 
                                        rotation={[0, THREE.MathUtils.degToRad(0), 0]} 
                                        scale={5} 
                                        lineHeight={100} 
                                        text={"Desde que me hicieron las plantillas en Kaldevi..."}
                                        />
                                    <Comment 
                                        position={[55, 0, 10]} 
                                        rotation={[0, THREE.MathUtils.degToRad(0), 0]} 
                                        scale={5} 
                                        lineHeight={100} 
                                        text={"El equipo de la ortopedia en Kaldevi es de 10."}
                                        />
                                </group>}
                            </group>
                    </Suspense>
                    
                </Canvas>
            </animated.div>
            <AudioClick clicked={blur} />
            {/* {projectSelected && <ProductInfo setProjectSelected={setProjectSelected}/> }
            {imageSelected && <ImageInfo setImageSelected={setImageSelected}/>} */}
        </div>
     );
}

export default Room;