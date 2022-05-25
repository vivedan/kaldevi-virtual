import React, { Component } from 'react';
import { DeviceOrientationControls, OrbitControls } from '@react-three/drei';
//import { useBreakpoint, BreakpointProvider } from 'gatsby-plugin-breakpoints';




function CustomControls(props) {

    //const breakpoints = useBreakpoint();

    return (
        <group>
            <OrbitControls 
                        enablePan={true} 
                        enableZoom={false} 
                        enableRotate={true} 
                        rotateSpeed={0.25}
                        autoRotate={false} 
                        autoRotateSpeed={0.5}
                        enableDamping
                        dampingFactor={0.08} />
            {props.breakpoints.sm && <DeviceOrientationControls />}
        </group>
    );
}

export default CustomControls;