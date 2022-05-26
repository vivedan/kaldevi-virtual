import React, { Component } from 'react';

import '../styles/styles.css';

import RoomList from './RoomList';

import 'animate.css';


function Header(props) {
    

    return ( 
        <div className="headerCont animate__animated animate__fadeInDown">
            
            {props.audio && <svg onClick={() => props.setAudio(!props.audio)} className="generalVolume icon" xmlns="http://www.w3.org/2000/svg" width="27.5" height="22.918" viewBox="0 0 27.5 22.918">
                <path id="Icon_awesome-volume-up" data-name="Icon awesome-volume-up" d="M10.266,3.753,6.018,8H1.146A1.146,1.146,0,0,0,0,9.146v6.875a1.146,1.146,0,0,0,1.146,1.146H6.018l4.248,4.247a1.147,1.147,0,0,0,1.956-.81V4.563A1.147,1.147,0,0,0,10.266,3.753ZM21.406,1.314a1.155,1.155,0,0,0-1.268,1.932,11.155,11.155,0,0,1,0,18.675,1.155,1.155,0,1,0,1.268,1.931,13.466,13.466,0,0,0,0-22.538Zm1.511,11.269a8.815,8.815,0,0,0-4.095-7.459,1.141,1.141,0,0,0-1.581.356,1.159,1.159,0,0,0,.354,1.593,6.525,6.525,0,0,1,0,11.021,1.159,1.159,0,0,0-.354,1.593,1.143,1.143,0,0,0,1.581.356A8.815,8.815,0,0,0,22.917,12.583Zm-6.769-3.67a1.146,1.146,0,0,0-1.106,2.008,1.882,1.882,0,0,1,0,3.324,1.146,1.146,0,0,0,1.106,2.008,4.174,4.174,0,0,0,0-7.34Z" transform="translate(0 -1.125)" fill="currentColor"/>
            </svg>}
            {!props.audio &&<svg onClick={() => props.setAudio(!props.audio)} className="generalVolume icon" xmlns="http://www.w3.org/2000/svg" width="24.608" height="18.634" viewBox="0 0 24.608 18.634">
                <path id="Icon_awesome-volume-mute" data-name="Icon awesome-volume-mute" d="M10.335,4.842,6.059,9.159H1.153A1.159,1.159,0,0,0,0,10.323v6.988a1.159,1.159,0,0,0,1.153,1.165H6.059l4.276,4.317a1.153,1.153,0,0,0,1.969-.824V5.666A1.153,1.153,0,0,0,10.335,4.842Zm11.852,8.975L24.38,11.6a.789.789,0,0,0,0-1.107l-1.1-1.107a.77.77,0,0,0-1.1,0L19.993,11.6,17.8,9.388a.77.77,0,0,0-1.1,0l-1.1,1.107a.789.789,0,0,0,0,1.107L17.8,13.817l-2.193,2.214a.789.789,0,0,0,0,1.107l1.1,1.107a.77.77,0,0,0,1.1,0l2.193-2.214,2.194,2.215a.77.77,0,0,0,1.1,0l1.1-1.107a.789.789,0,0,0,0-1.107Z" transform="translate(0 -4.5)" fill="#fff"/>
            </svg>}

            <RoomList page={props.page} setListActive={props.setListActive} listActive={props.listActive} />
            
        </div>
     );
}

export default Header;