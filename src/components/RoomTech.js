import React, { Suspense, useState, useEffect } from 'react';

import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
//import { PerspectiveCamera, PositionalAudio, Box, OrbitControls } from '@react-three/drei';
import { useSpring, animated, config } from 'react-spring';

import Model from './Model';

import '../styles/styles.css';

import Dome from './Dome';
import ProductInfo from './ProductInfo';
import ImageInfo from './ImageInfo';
//import Arrow from './Arrow';
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

    //targets for mobile portrait
    const targetsPortrait = [[-1, -1.3, -2.8], [0.3, -0.3, -0.8], [2.5, -1.3, 2.8], [-0, -0.7, 2.8]]

    useEffect(()=>{
        //console.log(props.breakpoints);
        if(!projectSelected){
            setImageSelected(null);
            setTarget([0, 0, 0])
        }else{
            let i = props.productData.indexOf(projectSelected);
            //setIndex(i);
            if(props.breakpoints.portrait){
                setTarget(targetsPortrait[i]);
            }else{
                setTarget(targets[i]);
            }
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
                <Canvas onCreated={() => props.setLoading(false)} camera={ {fov: 60, near: 0.1, far: 1000, position: [0, 0, 1]} } flat linear dpr={[1, 2]}>
                    <CustomControls breakpoints={props.breakpoints} target={target} projectSelected={projectSelected} autoRotate={firstClick} giro={props.giro} setGiro={props.setGiro} welcome={props.welcome}/>
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />

                    <Suspense fallback={null}>
                            <group rotation={[0, THREE.MathUtils.degToRad(100), 0]}>
                                <Model 
                                    src={props.productData[0].srcModel}
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
                                    src={props.productData[1].srcModel}
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
                                    src={props.productData[2].srcModel}
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
                                    src={props.productData[3].srcModel}
                                    position={[-707, -152, 61]} 
                                    rotation={[0, THREE.MathUtils.degToRad(-45), 0]} 
                                    scale={43.4}
                                    setProjectSelected={setProjectSelected}
                                    projectSelected={projectSelected}
                                    setImageSelected={setImageSelected}
                                    project={props.productData[3]}
                                    setTarget={setTarget}
                                />
                                <Dome panorama={props.panorama}/>
                                {props.children}
                                {/* <Arrow breakpoints={props.breakpoints} setLoading={props.setLoading} position={[-5, 0, -30]} rotation={[0, 0, 0]} dir={"Entrada"} textpos={"right"} scale={4} to={"/"} />
                                <Arrow breakpoints={props.breakpoints} setLoading={props.setLoading} position={[-5, 0, 30]} rotation={[0, THREE.MathUtils.degToRad(180), Math.PI]} dir={"Ortopedia\nGalería"} textpos={"left"} scale={4} to={"/ortopedia-galeria"}/>
                                <Arrow breakpoints={props.breakpoints} setLoading={props.setLoading} position={[5, -10, -30]} rotation={[0, THREE.MathUtils.degToRad(0), -Math.PI/2]} dir={"Patio\nKaldevi"} textpos={"left"} scale={4} to={"/patio"} /> */}
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