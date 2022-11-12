import React from 'react';
import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';



function Dome(props) {
    //const texture = useLoader(THREE.TextureLoader, 'panorama2.jpg')
    const texture = useLoader(THREE.TextureLoader, props.panorama);


    return (
      <mesh>
        <sphereBufferGeometry attach="geometry" args={[900, 60, 40]} />
        <meshBasicMaterial attach="material" map={texture} side={THREE.BackSide} />
      </mesh>
    )
}

export default Dome;