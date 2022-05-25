import React, { Component } from 'react';


function Blur({page, blur, setBlur, children}) {

    const styles = {
        position: "absolute",
        margin: 0,
        padding: 0,
        height: "100vh",
        width: "100vw",
        
        pointerEvents: blur ? "all" : "none",
        zIndex: 30000,
        cursor: blur ? "pointer" : "default",
    }

    const mainStyles = {
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
    }

    return (
        <div>
            {blur && <div style={mainStyles} onClick={() => setBlur(false)}>
                <h2>Bienvenidos a la tienda virtual Kaldevi.</h2>
                <h2>ENTRAR A</h2>
                <h1>{page}</h1>
                
            </div>}
            
            <div style={{filter: blur ? "blur(12px)" : "blur(0px)",}} >
                <div style={styles}></div>
                {children}
            </div>
        </div>
    );
}

export default Blur;