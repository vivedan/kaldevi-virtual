import React, { Component } from 'react';


function Blur({page, blur, setBlur, children}) {

    const styles = {
        position: "absolute",
        margin: 0,
        padding: 0,
        height: "100vh",
        width: "100vw",
        
        pointerEvents: blur ? "all" : "none",
        /* zIndex: 30000, */
        cursor: blur ? "pointer" : "default",
    }

    /* const mainStyles = {
        position: "absolute",
        margin: 0,
        padding: 0,
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 40000,
        cursor: "pointer"
    } */

    function handleClick(){
        if (typeof DeviceOrientationEvent.requestPermission === 'function') {
            DeviceOrientationEvent.requestPermission().then(response => {
                if (response == 'granted') {
                    console.log("accelerometer permission granted");
                    // Do stuff here
                    setBlur(false)
                }
            });
        }else{
            setBlur(false)
        }
    }

    return (
        <div>
            
            <div style={{filter: blur ? "blur(12px) saturate(1.5) contrast(1.2) brightness(0.9)" : "blur(0px)",}} >
                
                <div style={styles}></div>
                {children}
                
            </div>

            {/* <div className="blurBackground"></div> */}
            
            {blur && <div className="blurMainCont" onClick={() => handleClick()}>
                <div className="blurBackground"></div>
                <div className="blurLogo"></div>
                <h2 className="blurEnter">ENTRAR A</h2>
                <h1 className="blurTitle">{page}</h1>
                <div className="arrowDown"></div>
                
            </div>}

            
        </div>
    );
}

export default Blur;