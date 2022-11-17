import React from 'react';

import CookieConsent, { Cookies, getCookieConsentValue } from 'react-cookie-consent';


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
            setBlur(false);
            DeviceOrientationEvent.requestPermission().then(response => {
                if (response == 'granted') {
                    console.log("accelerometer permission granted");
                    // Do stuff here
                    
                }
            });
            
        }else{
            setBlur(false)
        }
    }

    //console.log(getCookieConsentValue());

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
                
                <CookieConsent
                    disableStyles={true}
                    buttonText="Aceptar"
                    declineButtonText="Rechazar"
                    cookieName="gatsby-gdpr-google-analytics"
                    containerClasses="cookieCont"
                    buttonClasses='cookieButton acceptCookie'
                    declineButtonClasses='cookieButton declineCookie'
                    enableDeclineButton
                    flipButtons
                    acceptOnOverlayClick
                    debug={true}
                    >
                    Esta página web usa cookies. Este sitio web utiliza cookies técnicas que le permiten navegar por nuestra página web, así como cookies estadísticas que analizan el comportamiento de su navegación. A continuación, puede aceptar o rechazar la utilización de estas cookies.
                </CookieConsent>

            </div>}

            
        </div>
    );
}

export default Blur;