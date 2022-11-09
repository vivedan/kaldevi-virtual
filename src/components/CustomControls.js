import React, { Component, useEffect, useState, useRef } from 'react';
import { DeviceOrientationControls, OrbitControls } from '@react-three/drei';
//import { useBreakpoint, BreakpointProvider } from 'gatsby-plugin-breakpoints';




function CustomControls(props) {

    //const breakpoints = useBreakpoint();
    const [freeze, setFreeze] = useState(false);
    const [mobileGiro, setMobileGiro] = useState(false);

    const gyroRef = useRef();

    useEffect(() => {
        //console.log(props.target)
        if(props.projectSelected){
            setFreeze(true);
        }else{
            setFreeze(false);
        }
    }, [props.target])

    /* useEffect(()=>{
        console.log((props.projectSelected || !props.giro) ? false : true)
    }, [props.giro]) */


    useEffect(() => {
        if(props.autoRotate){
            //console.log('past overlay');
            /* setMobileGiro(props.breakpoints.sm ? true : false);
            props.setGiro(props.breakpoints.sm ? true : false); */
            // Wrap the require in check for window
            if (typeof window !== `undefined`) {
                //previously below if was checking props.breakpoints.sm
                if(props.breakpoints.sm){
                    if(window.history.state){
                        if(window.history.state.giro){
                            setMobileGiro(true);
                            props.setGiro(true);
                        }else{
                            setMobileGiro(false);
                            props.setGiro(false);
                        }
                    }else{
                        if (typeof DeviceMotionEvent.requestPermission === 'function') {
                            DeviceMotionEvent.requestPermission().then(response => {
                                if (response == 'granted') {
                                    console.log("accelerometer permission granted");
                                    // Do stuff here
                                    setMobileGiro(true);
                                    props.setGiro(true);
                                }
                            });
                        }else{
                            setMobileGiro(true);
                            props.setGiro(true);
                        }
                    }
                }
            }
        }
    }, [props.autoRotate])

    useEffect(() => {
        if(props.giro){
            setMobileGiro(true)
        }else{
            setMobileGiro(false)
        }
    }, [props.giro])

    useEffect(() => {
        /* if(window.history.state){
            console.log(window.history.state.giro);
        } */
        gyroRef.current.disconnect();
        //console.log(gyroRef.current);
        
    }, [])

    useEffect(() => {
        if(mobileGiro){
            gyroRef.current.connect();
        }else{
            gyroRef.current.disconnect();
        }
    }, [mobileGiro])


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
            {/* {mobileGiro && <DeviceOrientationControls />} */}
            {props.breakpoints.sm && <DeviceOrientationControls ref={gyroRef}/>}
        </group>
    );
}

export default CustomControls;