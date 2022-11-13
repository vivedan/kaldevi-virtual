import React, { useState } from 'react';

import '../styles/styles.css';

import 'animate.css';

function RelatedProducts(props) {
    const {src, link, title} = props.product;
    const [hovered, setHovered] = useState(false);

    const divStyle = {
        color: '#416383',
        backgroundImage: 'url(' + src + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }

    return(
        
        <div className="imgRelated" style={divStyle} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <a href={link} target="_blank">
                {hovered && <h3 className="titleRelated">{title}</h3>}
            </a>
        </div>
    )
}

function ProductInfo(props) {

    const {title, description, storeLink, images, price, relatedProducts} = props.projectSelected;

    //const price = "10 €"

    const contactLink = "https://ortopedia.kaldevi.com/contacto/";

    //console.log(props.projectSelected.relatedProducts);

    return ( 
        <div>
            <svg className="closeButton icon" onClick={() => props.setProjectSelected(null)} xmlns="http://www.w3.org/2000/svg" width="29.25" height="29.25" viewBox="0 0 29.25 29.25">
                <g id="Icon_ionic-ios-close-circle-outline" data-name="Icon ionic-ios-close-circle-outline" transform="translate(-3.375 -3.375)">
                    <path id="Trazado_11" data-name="Trazado 11" d="M23.295,21.705,19.589,18l3.705-3.705a1.124,1.124,0,0,0-1.589-1.589L18,16.411l-3.705-3.705a1.124,1.124,0,0,0-1.589,1.589L16.411,18l-3.705,3.705a1.086,1.086,0,0,0,0,1.589,1.116,1.116,0,0,0,1.589,0L18,19.589l3.705,3.705a1.129,1.129,0,0,0,1.589,0A1.116,1.116,0,0,0,23.295,21.705Z" fill="currentColor"/>
                    <path id="Trazado_12" data-name="Trazado 12" d="M18,5.344A12.651,12.651,0,1,1,9.049,9.049,12.573,12.573,0,0,1,18,5.344m0-1.969A14.625,14.625,0,1,0,32.625,18,14.623,14.623,0,0,0,18,3.375Z" fill="currentColor"/>
                </g>
            </svg>
        <div className="infoBanner animate__animated animate__fadeInRight">
            
            

            <div className="infoCont">
                <div className="titleCont">
                    <h2 className="productTitle">{title}</h2>
                </div>
                <div className="priceCont">
                    <a href={(price === "Consultar precio" ? contactLink : storeLink)} target="_blank" className="tiendaButton">
                        <p className="productPrice">{price}</p>
                    </a>
                    <div className="storeCont">
                        <svg className="storeIcon icon" xmlns="http://www.w3.org/2000/svg" width="30" height="33" viewBox="0 0 30 33">
                            <g id="Icon_feather-shopping-bag"  data-name="Icon feather-shopping-bag" transform="translate(-3 -1.5)">
                                <path id="Trazado_16" data-name="Trazado 16" d="M9,3,4.5,9V30a3,3,0,0,0,3,3h21a3,3,0,0,0,3-3V9L27,3Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
                                <path id="Trazado_17" data-name="Trazado 17" d="M4.5,9h27" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
                                <path id="Trazado_18" data-name="Trazado 18" d="M24,15a6,6,0,0,1-12,0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
                            </g>
                        </svg>

                        <a href={storeLink} target="_blank" className="tiendaButton">
                            <h4>Visita nuestra tienda</h4>
                        </a>
                    </div>
                </div>
                {/* <div className="audioCont"></div> */}
                <div className="infoDescription">{description}</div>
                <br></br>
                <div className="relatedCont">
                    <h4>Productos relacionados</h4>
                    <div className="imgRelatedCont">
                        {/* <div className="imgRelated"></div>
                        <div className="imgRelated"></div>
                        <div className="imgRelated"></div> */}
                        {relatedProducts && relatedProducts.map((product) => <RelatedProducts product={product} key={Math.random()} /> )}
                    </div>
                </div>
            </div>
            
        </div>
        </div>
    );
}

export default ProductInfo;