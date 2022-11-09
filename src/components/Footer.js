import React, { Component } from 'react';

import '../styles/styles.css';

import 'animate.css';
import { useBreakpoint, BreakpointProvider } from 'gatsby-plugin-breakpoints';

function Footer(props) {
    const breakpoints = useBreakpoint();
    return ( 
        <div className="footerCont animate__animated animate__fadeInUp">
            <a href="https://rareastudio.com/" target="_blank" className="rareaFooter"></a>
            <a href="https://ortopedia.kaldevi.com/" target="_blank" className="kaldeviFooter"></a>

            {(breakpoints.sm && props.giro) && <img id="IconGiroOn" onClick={() => props.setGiro(false)} src="/IconGiroOn_white.svg" className="gyroscope icon" alt="Icon Gyroscope On" />}

            {(breakpoints.sm && !props.giro) && <img id="IconGiroOff" onClick={() => props.setGiro(true)} src="/IconGiroOff_white.svg" className="gyroscope icon" alt="Icon Gyroscope Off" />}


            {/* <svg className="fingerIcon animate__animated animate__wobble animate__infinite" xmlns="http://www.w3.org/2000/svg" width="38.25" height="54.5" viewBox="0 0 38.25 54.5">
                <g id="Grupo_1" data-name="Grupo 1" transform="translate(-937.5 -884.5)">
                    <path id="Icon_awesome-hand-pointer" data-name="Icon awesome-hand-pointer" d="M31.5,16.875v6.75a2.811,2.811,0,0,1-.075.644l-2.25,9.563A2.813,2.813,0,0,1,26.438,36H11.813a2.813,2.813,0,0,1-2.275-1.158l-9-12.375a2.812,2.812,0,1,1,4.549-3.308l2.225,3.06V2.813a2.813,2.813,0,0,1,5.625,0V16.875H13.5V14.063a2.813,2.813,0,0,1,5.625,0v2.813h.563V15.188a2.813,2.813,0,0,1,5.625,0v1.688h.563a2.813,2.813,0,0,1,5.625,0ZM13.5,22.5h-.562v6.75H13.5Zm6.188,0h-.562v6.75h.563Zm6.188,0h-.562v6.75h.563Z" transform="translate(944.25 903)" fill="currentColor"/>
                    <g id="Icon_feather-move" data-name="Icon feather-move" transform="translate(936 883)">
                        <path id="Trazado_5" data-name="Trazado 5" d="M7.5,13.5,3,18l4.5,4.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
                        <path id="Trazado_6" data-name="Trazado 6" d="M13.5,7.5,18,3l4.5,4.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
                        <path id="Trazado_7" data-name="Trazado 7" d="M22.5,28.5,18,33l-4.5-4.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
                        <path id="Trazado_8" data-name="Trazado 8" d="M28.5,13.5,33,18l-4.5,4.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
                        <path id="Trazado_9" data-name="Trazado 9" d="M3,18H33" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
                        <path id="Trazado_10" data-name="Trazado 10" d="M18,3V33" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
                    </g>
                </g>
            </svg> */}

        </div>
     );
}

export default Footer;