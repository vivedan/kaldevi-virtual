import React, { Component, Suspense, useState, useEffect } from 'react';

import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, PositionalAudio, Box, OrbitControls, Plane } from '@react-three/drei';



import Model from './Model';

import '../styles/styles.css';

import Dome from './Dome';
import DomeOverlay from './DomeOverlay';
import ProductInfo from './ProductInfo';
import ImageInfo from './ImageInfo';
import Arrow from './Arrow';
import Comment from './Comment';
import CustomControls from './CustomControls';

function Room(props) {

    /* const [projectSelected, setProjectSelected] = useState(false);
    const [imageSelected, setImageSelected] = useState(false); */

    /* useEffect(()=>{
        console.log(projectSelected);
    }, [projectSelected]) */

    const [overlay, setOverlay] = useState(false);



    return ( 
        <div className="main-cont">
            <Canvas camera={ {fov: 60, near: 0.1, far: 1000, position: [0, 0, 1]} } flat linear >
                <CustomControls breakpoints={props.breakpoints}/>
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
                            <Plane 
                                position={[85, 10, -12]} 
                                scale={[13, 35, 1]} 
                                rotation={[0, THREE.MathUtils.degToRad(-90), THREE.MathUtils.degToRad(-15)]}
                                material-transparent
                                material-opacity={0}
                                onPointerEnter={()=>setOverlay(true)}
                                onPointerLeave={()=>setOverlay(false)}/>
                            <Dome panorama={'pano_art1.jpg'}/>
                            <DomeOverlay panorama={'pano_art1_b.jpg'} overlay={overlay} />
                            <Arrow position={[35, 0, -20]} dir={"Ortopedia\nZona Técnica"} textpos={"right"} rotation={[0, THREE.MathUtils.degToRad(-90), 0]} scale={4} to={"/ortopedia-tecnica"}/>
                            <Arrow position={[-15, -7, -40]} dir={"Entrada"} textpos={"left"} rotation={[0, THREE.MathUtils.degToRad(45), Math.PI]} scale={5} to={"/"}/>
                            {overlay && <group>
                                <Comment 
                                    position={[55, -10, -30]} 
                                    rotation={[0, THREE.MathUtils.degToRad(0), 0]} 
                                    scale={5} 
                                    lineHeight={100} 
                                    text={"Comment here!"}
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
            {/* {projectSelected && <ProductInfo setProjectSelected={setProjectSelected}/> }
            {imageSelected && <ImageInfo setImageSelected={setImageSelected}/>} */}
        </div>
     );
}

export default Room;