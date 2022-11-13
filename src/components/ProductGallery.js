import { Html, Plane } from '@react-three/drei';
import React from 'react';

import 'animate.css';

function ProductGallery(props) {
    const storeLink = "https://kaldevi.com";
    return (
        <group position={props.product.titlePos} rotation={props.rotation} scale={props.scale}>
            {props.helper && <Plane></Plane>}
            <Html>
                <div className="animate__animated animate__fadeIn">
                    <a href={props.product.link} target="_blank">
                        <h3 className="pretitleGaleria" style={{width: "300px", color: props.color, whiteSpace: "break-spaces",}}>{props.product.pretitle}</h3>
                        <h3 className="titleGaleria" style={{width: "300px", color: props.color, whiteSpace: "break-spaces",}}>{props.product.title}</h3>
                        <svg className="storeIcon icon" style={{color: props.color,}} xmlns="http://www.w3.org/2000/svg" width="30" height="33" viewBox="0 0 30 33">
                            <g id="Icon_feather-shopping-bag"  data-name="Icon feather-shopping-bag" transform="translate(-3 -1.5)">
                                <path id="Trazado_16" data-name="Trazado 16" d="M9,3,4.5,9V30a3,3,0,0,0,3,3h21a3,3,0,0,0,3-3V9L27,3Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
                                <path id="Trazado_17" data-name="Trazado 17" d="M4.5,9h27" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
                                <path id="Trazado_18" data-name="Trazado 18" d="M24,15a6,6,0,0,1-12,0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
                            </g>
                        </svg>
                    </a>
                </div>
            </Html>
        </group>
    );
}

export default ProductGallery;