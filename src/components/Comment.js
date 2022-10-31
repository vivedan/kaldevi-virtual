import { Html, Plane } from '@react-three/drei';
import React, { Component } from 'react';

import 'animate.css';

function Comment(props) {
    return (
        <group position={props.position} rotation={props.rotation} scale={props.scale}>
            {props.helper && <Plane></Plane>}
            <Html>
                <div className="animate__animated animate__fadeIn">
                    <h3 className="commentGaleria" style={{fontWeight: "600", width: "300px", color: props.color, whiteSpace: "break-spaces",}}>{props.text}</h3>
                    <div className="lineCommentGaleria" style={{height: props.lineHeight + "px", width: "3px", background: props.color}}></div>
                </div>
            </Html>
        </group>
    );
}

export default Comment;