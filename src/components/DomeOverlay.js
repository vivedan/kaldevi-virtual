import React from 'react';
import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';
import { useSpring, animated, config } from '@react-spring/three';



function DomeOverlay(props) {
    //const texture = useLoader(THREE.TextureLoader, 'panorama2.jpg')
    const texture = useLoader(THREE.TextureLoader, props.panorama);

    const opacity = useSpring({opacity: (props.overlay || props.clicked) ? 1 : 0, config: { mass: 1, tension: 280, friction: 200 }});

   /*  useEffect(()=>{
      console.log(props.overlay);
      console.log(opacity);
    }, [props.overlay]) */

    return (
      <mesh>
        <sphereBufferGeometry attach="geometry" args={[500, 60, 40]} />
        <animated.meshBasicMaterial attach="material" map={texture} side={THREE.BackSide} transparent opacity={opacity.opacity}></animated.meshBasicMaterial>
        {/* {props.children} */}
      </mesh>
    )
}

export default DomeOverlay;