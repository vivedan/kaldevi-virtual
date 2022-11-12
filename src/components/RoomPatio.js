import React, { Suspense, useState, useEffect } from 'react';

import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
//import { PerspectiveCamera, PositionalAudio, Box, OrbitControls } from '@react-three/drei';

import { useSpring, animated, config } from 'react-spring';

//import Model from './Model';

import '../styles/styles.css';

import Dome from './Dome';
//import ProductInfo from './ProductInfo';
import ImageInfo from './ImageInfoPatio';
import Arrow from './Arrow';

import Image from './ImagePatio';
import patioData from '../other/patioData';
import AudioClick from './AudioClick';
import CustomControls from './CustomControls';

import Comment from './Comment';
import commentsPatioData from '../other/commentsPatioData';

function Room(props) {

    /* const [projectSelected, setProjectSelected] = useState(false);
    const [imageSelected, setImageSelected] = useState(false); */

    /* useEffect(()=>{
        console.log(projectSelected);
    }, [projectSelected]) */

    const [clicked, setClicked] = useState(false);
    const [imageSelected, setImageSelected] = useState(null);
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

    useEffect(()=>{
        if(!imageSelected){
            setBlur(false);
        }else{
            setBlur(true)
        }
    }, [imageSelected])

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
                    <CustomControls breakpoints={props.breakpoints} autoRotate={firstClick} giro={props.giro} setGiro={props.setGiro} welcome={props.welcome}/>
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
                        <group rotation={[0, THREE.MathUtils.degToRad(90), 0]}>
                            <Dome panorama={'/panos/pano_patio.webp'}/>
                            
                            <Arrow breakpoints={props.breakpoints} setLoading={props.setLoading} position={[35, 0, 0]} dir={"Ortopedia\nZona Técnica"} textpos={"right"} rotation={[0, -Math.PI/2, 0]} scale={4} to={"/ortopedia-tecnica"} giro={props.giro}/>
                            <Arrow breakpoints={props.breakpoints} setLoading={props.setLoading} position={[2, -8, -25]} dir={"Bienestar\nZona Técnica"} textpos={"right"} rotation={[0, 0, -Math.PI/2]} scale={4} to={"/bienestar-tecnica"} giro={props.giro}/>
                            <Arrow breakpoints={props.breakpoints} setLoading={props.setLoading} position={[-25, -12, 15]} dir={"Movilidad\nZona Técnica"} textpos={"left"} rotation={[0, THREE.MathUtils.degToRad(110), -Math.PI/2]} scale={5} to={"/movilidad-tecnica"} giro={props.giro}/>
                            <Arrow breakpoints={props.breakpoints} setLoading={props.setLoading} position={[10, -5, 35]} dir={"Entrada"} textpos={"right"} rotation={[0, THREE.MathUtils.degToRad(225), -Math.PI/2]} scale={4} to={"/"} giro={props.giro}/>

                            <Image 
                                position={[310, -65, -395]} 
                                src={"/patio_2_handle.jpg"} 
                                rotation={[0, THREE.MathUtils.degToRad(-55), 0]} 
                                scale={20} 
                                size={[6.5, 14]}
                                index={0}
                                data={patioData}
                                setClicked={setClicked}
                                setImageSelected={setImageSelected}/>
                            <Image 
                                position={[-282, -135, 600]} 
                                src={"/patio_3_handle.jpg"} 
                                rotation={[0, THREE.MathUtils.degToRad(-190), 0]} 
                                scale={42} 
                                size={[6.5, 14]}
                                index={1}
                                data={patioData}
                                setClicked={setClicked}
                                setImageSelected={setImageSelected}/>
                            <Image 
                                position={[-382, -115, -400]} 
                                src={"/patio_1_handle.jpg"} 
                                rotation={[0, THREE.MathUtils.degToRad(-300), 0]} 
                                scale={35} 
                                size={[6.5, 14]}
                                index={2}
                                data={patioData}
                                setClicked={setClicked}
                                setImageSelected={setImageSelected}/>

                            <group>
                                <Comment 
                                    position={[55, -20, -20]} 
                                    rotation={[0, THREE.MathUtils.degToRad(0), 0]} 
                                    scale={5} 
                                    lineHeight={100} 
                                    color={"white"}
                                    text={commentsPatioData[0]}
                                    />
                                <Comment 
                                    position={[55, -20, 30]} 
                                    rotation={[0, THREE.MathUtils.degToRad(0), 0]} 
                                    scale={5} 
                                    lineHeight={100} 
                                    color={"white"}
                                    text={commentsPatioData[1]}
                                    />
                            </group>
                        </group>
                    </Suspense>
                    
                </Canvas>
            </animated.div>
            {/* {projectSelected && <ProductInfo setProjectSelected={setProjectSelected}/> }*/}
            {imageSelected && <ImageInfo data={patioData} imageSelected={imageSelected} setImageSelected={setImageSelected}/>} 
            <AudioClick clicked={blur} />
        </div>
     );
}

export default Room;