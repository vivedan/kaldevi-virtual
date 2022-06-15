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
import AudioClick from './AudioClick';
import CustomControls from './CustomControls';

function Room(props) {

    const [projectSelected, setProjectSelected] = useState(null);
    const [imageSelected, setImageSelected] = useState(null);
    const [blur, setBlur] = useState(false);

    const [firstClick, setFirstClick] = useState(false);

    //const [imageIndex, setIndex] = useState(0);

    /* useEffect(() => {
        console.log(firstClick)
    }, [firstClick]) */


    const [target, setTarget] = useState([0, 0, 0]);

    const targets = [[-0.5, 0, -2.8], [1.5, 0, -0.8], [0.9, 0, 2.8], [-0.9, 0, 2.8]]

    useEffect(()=>{
        if(!projectSelected){
            setImageSelected(null);
            setTarget([0, 0, 0])
        }else{
            let i = props.productData.indexOf(projectSelected);
            //setIndex(i);
            setTarget(targets[i]);
        }
    }, [projectSelected])

    /* useEffect(() => {
        console.log(target);
    }, [target]) */

    //DISCONNECT OVERLAYS AND BLUR BACKGROUND IF THE LIST OF ROOMS IS ACTIVE
    useEffect(() => {
        if(props.listActive){
            setProjectSelected(null);
            setBlur(true);
        }else{
            setBlur(false);
        }
    }, [props.listActive])

    //console.log(props.productData)

    /* const styles = useSpring({
        filter: blur ? "blur(8px)" : "blur(0px)",
        config: config.molasses,
    }) */

    const canvasStyle = {
        margin: "0",
        height: "100vh",
        width: "100vw",
        filter: blur ? "blur(8px)" : "blur(0px)",
        mixBlendMode: props.welcome ? "hard-light" : "normal",
    }

    /* useEffect(()=>{
        console.log(styles);
    }, [styles]) */

    useEffect(()=>{
        if(!imageSelected){
            setBlur(false);
        }else{
            setBlur(true)
        }
    }, [imageSelected])

    return ( 
        <div className="main-cont">
            <animated.div style={{...canvasStyle}} onClick={() => setFirstClick(true)}>
                <Canvas onCreated={() => props.setLoading(false)} camera={ {fov: 60, near: 0.1, far: 1000, position: [0, 0, 1]} } flat >
                    <CustomControls breakpoints={props.breakpoints} target={target} projectSelected={projectSelected} autoRotate={firstClick} />
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />

                    <Suspense fallback={null}>
                            {/* <Model 
                                position={[-70, -12.5, 50]} 
                                rotation={[0, THREE.MathUtils.degToRad(45), 0]} 
                                scale={8.1}
                                setProjectSelected={setProjectSelected}
                                projectSelected={projectSelected}
                                setImageSelected={setImageSelected}
                                /> */}
                            {/* <Model 
                                src="/TV_ort_1.glb"
                                position={[82, -28.5, -52.5]} 
                                rotation={[0, THREE.MathUtils.degToRad(-135), 0]} 
                                scale={8.2}
                                setProjectSelected={setProjectSelected}
                                projectSelected={projectSelected}
                                setImageSelected={setImageSelected}
                                project={props.productData[0]}
                            /> 
                            <Model 
                                src="/TV_ort_2.glb"
                                position={[140, -28.5, 32]} 
                                rotation={[0, THREE.MathUtils.degToRad(115), 0]} 
                                scale={8.15}
                                setProjectSelected={setProjectSelected}
                                projectSelected={projectSelected}
                                setImageSelected={setImageSelected}
                                project={props.productData[1]}
                            />
                            <Model 
                                src="/TV_ort_3.glb"
                                position={[-56.5, -31, 70]} 
                                rotation={[0, THREE.MathUtils.degToRad(70), 0]} 
                                scale={8.8}
                                setProjectSelected={setProjectSelected}
                                projectSelected={projectSelected}
                                setImageSelected={setImageSelected}
                                project={props.productData[2]}
                            />*/}
                            <group rotation={[0, THREE.MathUtils.degToRad(100), 0]}>
                                <Model 
                                    src="/TV_ort_1.glb"
                                    position={[398, -140, -247]} 
                                    rotation={[0, THREE.MathUtils.degToRad(-135), 0]} 
                                    scale={39.8}
                                    setProjectSelected={setProjectSelected}
                                    projectSelected={projectSelected}
                                    setImageSelected={setImageSelected}
                                    project={props.productData[0]}
                                    setTarget={setTarget}
                                />
                                <Model 
                                    src="/TV_ort_2.glb"
                                    position={[632, -128.5, 149]} 
                                    rotation={[0, THREE.MathUtils.degToRad(115), 0]} 
                                    scale={36.6}
                                    setProjectSelected={setProjectSelected}
                                    projectSelected={projectSelected}
                                    setImageSelected={setImageSelected}
                                    project={props.productData[1]}
                                    setTarget={setTarget}
                                />
                                <Model 
                                    src="/TV_ort_3.glb"
                                    position={[-307, -163, 370]} 
                                    rotation={[0, THREE.MathUtils.degToRad(70), 0]} 
                                    scale={46.7}
                                    setProjectSelected={setProjectSelected}
                                    projectSelected={projectSelected}
                                    setImageSelected={setImageSelected}
                                    project={props.productData[2]}
                                    setTarget={setTarget}
                                />
                                <Model 
                                    src="/TV_ort_4.glb"
                                    position={[-707, -152, 61]} 
                                    rotation={[0, THREE.MathUtils.degToRad(-45), 0]} 
                                    scale={43.4}
                                    setProjectSelected={setProjectSelected}
                                    projectSelected={projectSelected}
                                    setImageSelected={setImageSelected}
                                    project={props.productData[3]}
                                    setTarget={setTarget}
                                />
                                <Dome panorama={'/pano_tech1.jpg'}/>
                                <Arrow breakpoints={props.breakpoints} setLoading={props.setLoading} position={[-5, 0, -30]} rotation={[0, 0, 0]} dir={"Entrada"} textpos={"right"} scale={4} to={"/"} />
                                <Arrow breakpoints={props.breakpoints} setLoading={props.setLoading} position={[-5, 0, 30]} rotation={[0, THREE.MathUtils.degToRad(180), Math.PI]} dir={"Ortopedia\nGalería"} textpos={"left"} scale={4} to={"/ortopedia-galeria"}/>
                                <Arrow breakpoints={props.breakpoints} setLoading={props.setLoading} position={[5, -10, -30]} rotation={[0, THREE.MathUtils.degToRad(0), -Math.PI/2]} dir={"Patio\nKaldevi"} textpos={"left"} scale={4} to={"/patio"} />
                            </group>
                    </Suspense>
                    
                </Canvas>
            </animated.div>
            {projectSelected && <ProductInfo projectSelected={projectSelected} setProjectSelected={setProjectSelected}/> }
            {imageSelected && <ImageInfo imageSelected={imageSelected} projectSelected={projectSelected} setImageSelected={setImageSelected}/>}
            <AudioClick clicked={projectSelected} />
            <AudioClick clicked={blur} />
        </div>
     );
}

export default Room;