import React, {useEffect, useRef, useState} from 'react';
import * as THREE from 'three';
import { useGLTF, useHelper, BoxHelper, useCursor } from '@react-three/drei';

import { useSpring, animated, config } from '@react-spring/three';

import UICircle from './UICircle';

function Model(props) {

    //const screens = useGLTF('/TVscomp1.glb');
    const screens = useGLTF(props.src);

    const childrenScreens = screens.nodes.Scene.children;

    

    const [clicked, setClicked] = useState(false);
    const [active, setActive] = useState(true);
    //const [opacity, setOpacity] = useState(0);

    const [hovered, setHovered] = useState(false);

    const opacity1 = useSpring({ opacity: active ? 1 : 0, config: { mass: 1, tension: 500, friction: 12 } });
    const opacity2 = useSpring({ opacity: active ? 1 : 0, config: { mass: 1, tension: 300, friction: 12 } });
    const opacity3 = useSpring({ opacity: active ? 1 : 0, config: { mass: 1, tension: 200, friction: 12 } });

    const opacity = [opacity1, opacity2, opacity3];

    const color = useSpring({color: active ? "white" : "sandybrown", config: config.molasses});

    const ref = useRef();

    /* useEffect(() => {
        window.addEventListener('click', function() {
            setClicked(true);
        });
    }, []) */

    useEffect(() =>{
        if(clicked){
            props.setProjectSelected(props.project);
            setActive(true);
        }else{
            setActive(false);
            props.setProjectSelected(null);
        }
    }, [clicked]);

    useEffect(() => {
        if(!props.projectSelected){
            setClicked(false);
        }
    }, [props.projectSelected]);



    function handleImageClick(e){
        //console.log(e.object.name);
        //console.log(e.object);
        if(clicked){
            props.setImageSelected(props.project.images[e.object.name]);
        }else{setClicked(true)}
        
    }

    function getCenterBB(geometry){
        geometry.computeBoundingBox();
        let center = new THREE.Vector3();
        geometry.boundingBox.getCenter(center);
        let centerArray = Object.values(center);
        //console.log(centerArray);
        return centerArray;
    }

    useCursor(hovered);

    return (
        <group ref={ref}
        position={props.position}
        rotation={props.rotation}
        scale={props.scale}>
            <group>
                <animated.mesh
                    castShadow
                    receiveShadow
                    geometry={childrenScreens[0].geometry}
                    material={childrenScreens[0].material}
                    material-transparent
                    material-opacity={1}
                    material-color={color.color}
                    scale={1}
                    name={0}
                    onClick={(e) => setClicked(true)}
                    onPointerEnter={() => {if(!clicked) setHovered(true)}}
                    onPointerLeave={() => setHovered(false)}
                >
                    {/*<meshBasicMaterial attach="material" color="red"></meshBasicMaterial>*/}
                </animated.mesh>
                
                <UICircle 
                    position={getCenterBB(childrenScreens[0].geometry)} 
                    setImageSelected={props.setImageSelected} 
                    projectSelected={props.projectSelected}
                    setProjectSelected={props.setProjectSelected}
                    setClicked={setClicked}
                    project={props.project}
                    name={0}/>

            </group>
            
            {childrenScreens.slice(1).map((screen, index) => (
                <group key={index + 1}>
                    <animated.mesh
                        castShadow
                        receiveShadow
                        geometry={screen.geometry}
                        material={screen.material}
                        material-transparent
                        material-opacity={opacity[index].opacity}
                        scale={1}
                        key={index}
                        name={index + 1}
                        /* onClick={(e) => handleImageClick(e)} */
                    >
                        {/*<meshBasicMaterial attach="material" color="red"></meshBasicMaterial>*/}
                    </animated.mesh>

                    {clicked && 
                        <UICircle 
                            position={getCenterBB(screen.geometry)} 
                            setImageSelected={props.setImageSelected} 
                            projectSelected={props.projectSelected}
                            setProjectSelected={props.setProjectSelected}
                            project={props.project}
                            name={index + 1}
                        /> 
                    }

                </group>

            ))}

        </group>
    );
}

export default Model;