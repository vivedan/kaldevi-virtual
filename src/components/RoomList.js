import React from 'react';

import '../styles/styles.css';

import 'animate.css';

import usePageInfo from '../hooks/usePageInfo';

import useComponentVisible from '../hooks/useComponentVisible';

function RoomGroup(props){
    return(
        <div className="roomGroup">
            <h3 className="roomGroupTitle">{props.title}</h3>
            <a href={"/" + props.group + "-tecnica"}><h4 className="roomGroupType roomSelectable">Zona Técnica</h4></a>
            <a href={"/" + props.group + "-galeria"}><h4 className="roomGroupType roomSelectable">Galería</h4></a>
        </div>
    )
}

function RoomListBack(props){
    return(
        <div className="roomListBack animate__animated animate__fadeIn">
            <div className="roomListFlex">
                <a href="/"><h3 className="roomGroup roomGroupTitle roomSelectable">Entrada</h3></a>
                <a href="/patio"><h3 className="roomGroup roomGroupTitle roomSelectable">Patio</h3></a>
                <RoomGroup title="Ortopedia" group="ortopedia"/>
                <RoomGroup title="Bienestar" group="bienestar"/>
                <RoomGroup title="Movilidad" group="movilidad"/>
            </div>  
        </div>
    );
}


function RoomList(props) {

    const pageInfo = usePageInfo(props.page);
    //console.log(pageInfo);

    const { ref, isComponentVisible } = useComponentVisible(true);

    //const [showList, setShowList] = useState(false);

    return (
        <div className="roomListCont">
            <svg onClick={() => props.setListActive(!props.listActive)} className={props.listActive ? "burger icon burgerActive" : "burger icon"} xmlns="http://www.w3.org/2000/svg" width="30" height="21" viewBox="0 0 30 21">
                <g id="Icon_feather-menu" data-name="Icon feather-menu" transform="translate(-3 -7.5)">
                    <path id="Trazado_2" data-name="Trazado 2" d="M4.5,18h27" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
                    <path id="Trazado_3" data-name="Trazado 3" d="M4.5,9h27" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
                    <path id="Trazado_4" data-name="Trazado 4" d="M4.5,27h27" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
                </g>
            </svg>

            <h2 className="roomTitle">{pageInfo.title}</h2>
            <div ref={ref}>
                {props.listActive && <RoomListBack />}
            </div>
            
        </div>
     );
}

export default RoomList;