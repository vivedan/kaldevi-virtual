import React, { useState, useEffect } from 'react';

import '../styles/styles.css';
import 'animate.css';


function Overlay(props) {
    return (
        <div className={props.visible ? 'fadeIn' : 'fadeOut'}>
            <div className="overlay">
                <div className="logoOverlay animate__animated animate__pulse animate__flip animate__infinite"></div>
            </div>
        </div>
    );
}

export default Overlay;