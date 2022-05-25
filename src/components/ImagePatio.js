import { Html, Plane, useCursor, useTexture } from '@react-three/drei';
import React, { useState, useEffect } from 'react';
import { navigate } from "gatsby";
import * as THREE from 'three';

import { animated, useSpring, config } from '@react-spring/three';

import '../styles/styles.css';

import '../styles/styles.css';

import 'animate.css';


function Image(props) {
    const texture = useTexture(props.src)

    const [hovered, setHovered] = useState(false);
    //const [clicked, setClicked] = useState(false);

    useCursor(hovered);

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
    


    function handleClick(){
        
    }

    return (
        <group position={props.position} rotation={[0, props.rotation[1], 0]} scale={props.scale}>
            
            <Plane 
            args={props.size}
            rotation={[props.rotation[0], 0, props.rotation[2]]} 
            onClick={()=> props.setImageSelected(props.data[props.index])} 
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

            
        </group>
        
    );
}

export default Image;