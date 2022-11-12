import React from 'react';

import '../styles/styles.css';
import 'animate.css';


function Overlay(props) {
    return (
        <div className={props.visible ? 'fadeIn' : 'fadeOut'}>
            <div className="overlay"></div>
        </div>
    );
}

export default Overlay;