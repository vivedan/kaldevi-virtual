import React, { Component, Suspense, useState, useEffect } from 'react';

import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, PositionalAudio, Box, OrbitControls } from '@react-three/drei';



import Model from './Model';

import '../styles/styles.css';

import Dome from './Dome';
import ProductInfo from './ProductInfo';
import ImageInfo from './ImageInfo';
import Arrow from './Arrow';

import Image from './Image';
import Video from './Video';
import Overlay from './Overlay';

function Room() {

    /* const [projectSelected, setProjectSelected] = useState(false);
    const [imageSelected, setImageSelected] = useState(false); */

    /* useEffect(()=>{
        console.log(projectSelected);
    }, [projectSelected]) */

    const [overlay, setOverlay] = useState(true);
    const [clicked, setClicked] = useState(false);

    return ( 
        <div className="main-cont">
            {/* <Overlay visible={overlay} /> */}
            <Canvas camera={ {fov: 60, near: 0.1, far: 1000, position: [0, 0, 1]} } flat linear >
                <OrbitControls enablePan={true} enableZoom={false} enableRotate={true} />
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
                            <Dome panorama={'pano_entry.jpg'}/>
                            <Arrow position={[35, 0, 20]} dir={"Ortopedia\nZona Técnica"} textpos={"left"} rotation={[0, -Math.PI/2, Math.PI]} scale={4} to={"/ortopedia-tecnica"}/>
                            <Arrow position={[25, -7, 0]} dir={"Patio\nKaldevi"} textpos={"left"} rotation={[0, -Math.PI/2, -Math.PI/2]} scale={4} to={"/patio"}/>
                            <Arrow position={[-10, 0, 40]} dir={"Ortopedia\nGalería"} textpos={"right"} rotation={[0, THREE.MathUtils.degToRad(180), 0]} scale={4} to={"/ortopedia-galeria"}/>

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
            {clicked && <Video setClicked={setClicked} />}
            {/* {projectSelected && <ProductInfo setProjectSelected={setProjectSelected}/> }
            {imageSelected && <ImageInfo setImageSelected={setImageSelected}/>} */}
        </div>
     );
}

export default Room;