import React, { useState, useEffect } from 'react';

import '../styles/styles.css';
import 'animate.css';


function Overlay(props) {

    const [active, setActive] = useState(true);

    useEffect(() => {
        //console.log(props.visible);
        if(!props.visible){
            setTimeout(() => {
                setActive(false);
                //console.log(props.visible)
            }, 1000)
        }else{
            setActive(true);
        }
    }, [props.visible])

    //<div className={`overlayFade ${active ? 'fadeIn' : 'fadeOut'}`}>
    return (
        
        <div className={`overlay ${active ? 'fadeIn' : 'fadeOut'}`}>
            <div className="logoOverlay animate__animated animate__pulse animate__flip animate__infinite"></div>
        </div>
        
    );
}

export default Overlay;