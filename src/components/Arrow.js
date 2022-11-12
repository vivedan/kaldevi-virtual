import { Html, Plane, useCursor, useTexture } from '@react-three/drei';
import React, { useState, useEffect } from 'react';
import { navigate } from "gatsby";
import * as THREE from 'three';

import { animated, useSpring, config } from '@react-spring/three';
//import { a } from '@react-spring/core';

import '../styles/styles.css';
import ArrowLabel from './ArrowLabel';
import AudioClick from './AudioClick';

//const AnimatedHtml = animated(Html);

function Arrow(props) {
    const texture = useTexture('/Arrow1.png')

    //const [rotation, setRotation] = useState([0, -Math.PI/2, 0]);
    const [position, setPosition] = useState(-3.2);
    const [hovered, setHovered] = useState(false);
    const [audio, setAudio] = useState(false);

    useCursor(hovered);

    const arrowStyles = useSpring({ 
        loop: true,
        to: [
            {position: [0, 0, 0.1], emission: 5},
            {position: [0.2, 0, 0.1], emission: 0.5},
        ],
        from: {position: [0.2, 0, 0.1], emission: 0.5},
        config: config.molasses
    });

    

    useEffect(()=>{
        //const orPos = 3.2;
        if(props.textpos === "right"){
            setPosition(3.2)
        }else if(props.textpos === "left"){
            setPosition(-3.2)
        }
        //console.log(props.rotation[1]);
    }, [])

    //[Math.PI, Math.PI, 0]

    function handleClick(){
        setAudio(true);
        props.setLoading(true);
        setTimeout(()=>{
            navigate(props.to, {state: { giro: props.giro }})
        }, 400)//TIME TO OUT
        
    }

    return (
        <group position={props.position} rotation={[0, props.rotation[1], 0]} scale={props.scale}>
            <Plane scale={2} position={[0, 0, 0.2]} onClick={()=> handleClick()} onPointerEnter={(e)=> {e.stopPropagation(); setHovered(!hovered)}} onPointerLeave={(e)=> {e.stopPropagation(); setHovered(!hovered)}}>
            <meshStandardMaterial map={texture} transparent opacity={0} side={THREE.DoubleSide}/>
            </Plane>
            <Plane rotation={[props.rotation[0], 0, props.rotation[2]]} >
                <meshStandardMaterial map={texture} transparent side={THREE.DoubleSide} emissive={"white"} emissiveIntensity={5} emissiveMap={texture}/> 
                <animated.group position={arrowStyles.position}>
                    <Plane onClick={()=> handleClick()} onPointerEnter={()=>setHovered(!hovered)} onPointerLeave={()=>setHovered(!hovered)}>
                        <animated.meshStandardMaterial map={texture} transparent side={THREE.DoubleSide} opacity={0.5} emissive={"yellow"} emissiveIntensity={arrowStyles.emission} emissiveMap={texture}/> 
                    </Plane>
                </animated.group>
            </Plane>
            
            <Html wrapperClass='arrowLabelCont' transform rotation={[0, 0, 0]} position={[position, 0, -0.4]} style={{pointerEvents: 'none'}}>
                    <ArrowLabel breakpoints={props.breakpoints} textpos={props.textpos} dir={props.dir} hovered={hovered}/>
                    <AudioClick clicked={audio} navigation/>
            </Html>
        </group>
        
    );
}

export default Arrow;