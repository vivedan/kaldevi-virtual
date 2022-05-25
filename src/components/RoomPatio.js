import React, { Component, Suspense, useState, useEffect } from 'react';

import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, PositionalAudio, Box, OrbitControls } from '@react-three/drei';



import Model from './Model';

import '../styles/styles.css';

import Dome from './Dome';
import ProductInfo from './ProductInfo';
import ImageInfo from './ImageInfoPatio';
import Arrow from './Arrow';

import Image from './ImagePatio';
import patioData from '../other/patioData';

function Room() {

    /* const [projectSelected, setProjectSelected] = useState(false);
    const [imageSelected, setImageSelected] = useState(false); */

    /* useEffect(()=>{
        console.log(projectSelected);
    }, [projectSelected]) */

    const [clicked, setClicked] = useState(false);
    const [imageSelected, setImageSelected] = useState(null);


    return ( 
        <div className="main-cont">
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
                        <group rotation={[0, THREE.MathUtils.degToRad(90), 0]}>
                        <Dome panorama={'pano_patio.jpg'}/>
                        
                        <Arrow position={[35, 0, 0]} dir={"Ortopedia\nZona Técnica"} textpos={"right"} rotation={[0, -Math.PI/2, 0]} scale={4} to={"/ortopedia-tecnica"}/>
                        <Arrow position={[10, -5, 35]} dir={"Entrada"} textpos={"right"} rotation={[0, THREE.MathUtils.degToRad(225), -Math.PI/2]} scale={4} to={"/"}/>

                        <Image 
                            position={[310, -65, -395]} 
                            src={"/patio_angeles_handle.jpg"} 
                            rotation={[0, THREE.MathUtils.degToRad(-55), 0]} 
                            scale={20} 
                            size={[6.5, 14]}
                            index={0}
                            data={patioData}
                            setClicked={setClicked}
                            setImageSelected={setImageSelected}/>
                        <Image 
                            position={[-282, -135, 600]} 
                            src={"/patio_mariano_handle.jpg"} 
                            rotation={[0, THREE.MathUtils.degToRad(-190), 0]} 
                            scale={42} 
                            size={[6.5, 14]}
                            index={1}
                            data={patioData}
                            setClicked={setClicked}
                            setImageSelected={setImageSelected}/>
                        <Image 
                            position={[-382, -115, -400]} 
                            src={"/patio_carlos_handle.jpg"} 
                            rotation={[0, THREE.MathUtils.degToRad(-300), 0]} 
                            scale={35} 
                            size={[6.5, 14]}
                            index={2}
                            data={patioData}
                            setClicked={setClicked}
                            setImageSelected={setImageSelected}/>
                        </group>
                </Suspense>
                
            </Canvas>
            {/* {projectSelected && <ProductInfo setProjectSelected={setProjectSelected}/> }*/}
            {imageSelected && <ImageInfo data={patioData} imageSelected={imageSelected} setImageSelected={setImageSelected}/>} 
        </div>
     );
}

export default Room;