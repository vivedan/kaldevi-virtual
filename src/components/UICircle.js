import React, { Component, useEffect, useState } from 'react';
//import { extend } from '@react-three/fiber'

import { Circle, useCursor } from '@react-three/drei';
import { useSpring, animated, config } from '@react-spring/three';
//extend ({Circle});

function UICircle(props) {

    const [hovered, setHovered] = useState(false);

    useCursor(hovered);

    const circleStyles = useSpring({ 
        loop: true,
        to: [
            {scale: 1.2, opacity: 0.8},
            {scale: 1, opacity: 0.5},
        ],
        from: {scale: 1, opacity: 0.5},
        config: config.molasses
    });

    function handleClick(e){
        //console.log("clicked");
        e.stopPropagation();
        if(props.projectSelected){
            //props.setImageSelected(true)
            props.setImageSelected(props.project.images[props.name]);
        }else{
            //props.setProjectSelected(true);
            props.setClicked(true);
        }
    }

    return (
        <group rotation={[0, Math.PI/2, 0]} position={props.position} onClick={(e) => handleClick(e)} onPointerEnter={() => setHovered(true)} onPointerLeave={() => setHovered(false)}>
            <Circle args={[0.5, 32]} position={[0, 0, 0.1]}>
                <meshBasicMaterial attach="material" color="#FFAA00" transparent opacity={0.2}/>
            </Circle>
            <animated.group scale={circleStyles.scale}>
                <Circle args={[0.35, 32]} position={[0, 0, 0.2]}>
                    <animated.meshBasicMaterial attach="material" color="#FFAA00" transparent opacity={circleStyles.opacity}/>
                </Circle>
            </animated.group>
        </group>
    );
}

export default UICircle;