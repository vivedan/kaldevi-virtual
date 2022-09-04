import React, { Component, useState, useEffect } from 'react';

import '../styles/styles.css';

import 'animate.css';

function ImageInfo(props) {

    const [imageIndex, setIndex] = useState(0);

    useEffect(() => {
        let i = props.projectSelected.images.indexOf(props.imageSelected);
        setIndex(i);
    }, [])

    function nextImage(){
        //console.log("next would be: " + (imageIndex + 1))
        if (imageIndex === (props.projectSelected.images.length - 1)) {
            setIndex(0);
        }else{
            setIndex(imageIndex + 1);
        }
    }

    function previousImage(){
        //console.log("next would be: " + (imageIndex + 1))
        if (imageIndex === 0) {
            setIndex(props.projectSelected.images.length - 1);
        }else{
            setIndex(imageIndex - 1);
        }
    }

    useEffect(() => {
        props.setImageSelected(props.projectSelected.images[imageIndex]);
    }, [imageIndex])

    return ( 
        <div className="imageInfoCont animate__animated animate__fadeIn">
            {/* <svg className="closeImage icon" onClick={() => props.setImageSelected(null)} xmlns="http://www.w3.org/2000/svg" width="29.25" height="29.25" viewBox="0 0 29.25 29.25">
                <g id="Icon_ionic-ios-close-circle-outline" data-name="Icon ionic-ios-close-circle-outline" transform="translate(-3.375 -3.375)">
                    <path id="Trazado_11" data-name="Trazado 11" d="M23.295,21.705,19.589,18l3.705-3.705a1.124,1.124,0,0,0-1.589-1.589L18,16.411l-3.705-3.705a1.124,1.124,0,0,0-1.589,1.589L16.411,18l-3.705,3.705a1.086,1.086,0,0,0,0,1.589,1.116,1.116,0,0,0,1.589,0L18,19.589l3.705,3.705a1.129,1.129,0,0,0,1.589,0A1.116,1.116,0,0,0,23.295,21.705Z" fill="currentColor"/>
                    <path id="Trazado_12" data-name="Trazado 12" d="M18,5.344A12.651,12.651,0,1,1,9.049,9.049,12.573,12.573,0,0,1,18,5.344m0-1.969A14.625,14.625,0,1,0,32.625,18,14.623,14.623,0,0,0,18,3.375Z" fill="currentColor"/>
                </g>
            </svg> */}
            <div className="imageArrowsCont">
                <svg onClick={() => previousImage()} className="icon arrows" xmlns="http://www.w3.org/2000/svg" width="19.752" height="35.261" viewBox="0 0 19.752 35.261">
                    <path id="Trazado_20" data-name="Trazado 20" d="M0,16.57,16.57,0,33.14,16.57" transform="translate(2.121 34.201) rotate(-90)" fill="none" stroke="currentColor" strokeWidth="3"/>
                </svg>
                <img className="imageProduct" src={props.imageSelected.src} />
                <svg onClick={() => nextImage()} className="icon arrows" xmlns="http://www.w3.org/2000/svg" width="19.752" height="35.261" viewBox="0 0 19.752 35.261">
                    <path id="Trazado_19" data-name="Trazado 19" d="M942.73,76.048l16.57,16.57,16.57-16.57" transform="translate(-74.987 976.93) rotate(-90)" fill="none" stroke="currentColor" strokeWidth="3"/>
                </svg>
            </div>
            <p className="footImg">{props.imageSelected.description}</p>
        </div>
     );
}

export default ImageInfo;