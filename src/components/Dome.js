import React from 'react';
import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';
//import { useSpring, animated, config } from '@react-spring/three';



function Dome(props) {
    //const texture = useLoader(THREE.TextureLoader, 'panorama2.jpg')
    const texture = useLoader(THREE.TextureLoader, props.panorama);

    //const opacity = useSpring({opacity: (props.overlay || props.clicked) ? 0 : 1, config: { mass: 1, tension: 280, friction: 200 }});


    return (
      <mesh>
        <sphereBufferGeometry attach="geometry" args={[900, 60, 40]} />
        <meshBasicMaterial attach="material" map={texture} side={THREE.BackSide}></meshBasicMaterial>
        {/* <animated.meshBasicMaterial attach="material" map={texture} side={THREE.BackSide} transparent opacity={opacity.opacity}></animated.meshBasicMaterial> */}
        {/* {props.children} */}
      </mesh>
    )
}

export default Dome;