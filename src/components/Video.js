//import { Html, Plane, useCursor, useTexture } from '@react-three/drei';
import React from 'react';
//import { navigate } from "gatsby";
//import * as THREE from 'three';
//import { useThree } from '@react-three/fiber';

//import { animated, useSpring, config } from '@react-spring/three';

import '../styles/styles.css';

import '../styles/styles.css';

import 'animate.css';

function Video(props) {


    return ( 
        
            <div className="imageInfoContAlone animate__animated animate__fadeIn">
                <svg className="closeImage icon" onClick={() => props.setClicked(false)} xmlns="http://www.w3.org/2000/svg" width="29.25" height="29.25" viewBox="0 0 29.25 29.25">
                    <g id="Icon_ionic-ios-close-circle-outline" data-name="Icon ionic-ios-close-circle-outline" transform="translate(-3.375 -3.375)">
                        <path id="Trazado_11" data-name="Trazado 11" d="M23.295,21.705,19.589,18l3.705-3.705a1.124,1.124,0,0,0-1.589-1.589L18,16.411l-3.705-3.705a1.124,1.124,0,0,0-1.589,1.589L16.411,18l-3.705,3.705a1.086,1.086,0,0,0,0,1.589,1.116,1.116,0,0,0,1.589,0L18,19.589l3.705,3.705a1.129,1.129,0,0,0,1.589,0A1.116,1.116,0,0,0,23.295,21.705Z" fill="currentColor"/>
                        <path id="Trazado_12" data-name="Trazado 12" d="M18,5.344A12.651,12.651,0,1,1,9.049,9.049,12.573,12.573,0,0,1,18,5.344m0-1.969A14.625,14.625,0,1,0,32.625,18,14.623,14.623,0,0,0,18,3.375Z" fill="currentColor"/>
                    </g>
                </svg>
                <iframe width="860" height="415" src="https://www.youtube.com/embed/B_QdRrRxQtU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <p className="footImg">Video de presentación de Kaldevi. ¡Ven a conocernos!</p>
            </div>
        
     );
}


export default Video;