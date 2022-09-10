import React, { Component, useEffect, useState } from 'react';
import { DeviceOrientationControls, OrbitControls } from '@react-three/drei';
//import { useBreakpoint, BreakpointProvider } from 'gatsby-plugin-breakpoints';




function CustomControls(props) {

    //const breakpoints = useBreakpoint();
    const [freeze, setFreeze] = useState(false);

    useEffect(() => {
        //console.log(props.target)
        if(props.projectSelected){
            setFreeze(true);
        }else{
            setFreeze(false);
        }
    }, [props.target])

    useEffect(()=>{
        console.log(props)
    }, [])


    return (
        <group>
            <OrbitControls 
                        enablePan={true} 
                        enableZoom={false} 
                        enableRotate={!freeze} 
                        rotateSpeed={props.breakpoints.sm ? 0.6 : 0.15}
                        autoRotate={!props.autoRotate} 
                        autoRotateSpeed={0.3}
                        enableDamping
                        dampingFactor={0.08} 
                        target={ props.target }/>
            {(props.breakpoints.sm && props.giro) && <DeviceOrientationControls enabled={props.projectSelected ? false : true} />}
        </group>
    );
}

export default CustomControls;