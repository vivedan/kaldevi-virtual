import { Html, Plane, useCursor, useTexture } from '@react-three/drei';
import React, { useState, useEffect, useRef } from 'react';
import { navigate } from "gatsby";
import * as THREE from 'three';
import UICircle from './UICircle';

import { animated, useSpring, config } from '@react-spring/three';

import '../styles/styles.css';

import '../styles/styles.css';

import 'animate.css';


function Image(props) {
    const texture = useTexture(props.src)

    const [hovered, setHovered] = useState(false);
    //const [clicked, setClicked] = useState(false);

    useCursor(hovered);

    const groupRef = useRef();

    /* const ImageStyles = useSpring({ 
        loop: true,
        to: [
            {position: [0, 0, 0.1], emission: 5},
            {position: [0.2, 0, 0.1], emission: 0.5},
        ],
        from: {position: [0.2, 0, 0.1], emission: 0.5},
        config: config.molasses
    }); */

    const imageStyles = useSpring({opacity: hovered ? 1 : 0.7, config: config.molasses});
    
    function getCenterBB(geometry){
        geometry.computeBoundingBox();
        let center = new THREE.Vector3();
        geometry.boundingBox.getCenter(center);
        let centerArray = Object.values(center);
        //console.log(centerArray);
        return centerArray;
    }

    function handleClick(){
        
    }

    return (
        <group ref={groupRef} position={props.position} rotation={[0, props.rotation[1], 0]} scale={props.scale}>
            
            <Plane 
            args={props.size}
            rotation={[props.rotation[0], 0, props.rotation[2]]} 
            onClick={()=> props.setClicked(true)} 
            onPointerEnter={(e)=> {e.stopPropagation(); setHovered(!hovered)}} 
            onPointerLeave={(e)=> {e.stopPropagation(); setHovered(!hovered)}}
            >
                <animated.meshStandardMaterial 
                map={texture} 
                color={"white"} 
                transparent 
                opacity={imageStyles.opacity} 
                side={THREE.DoubleSide} 
                emissive={"white"} 
                emissiveIntensity={1} 
                emissiveMap={texture}
                ></animated.meshStandardMaterial>
            </Plane>
            <group position={[0, 0, 0]} rotation={[0, -Math.PI/2, 0]} scale={2}>
                <UICircle simple/>
            </group>

            
        </group>
        
    );
}

export default Image;