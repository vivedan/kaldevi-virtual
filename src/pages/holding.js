import React, { useState } from 'react';
import Room from '../components/RoomLanding';


import { useBreakpoint, BreakpointProvider } from 'gatsby-plugin-breakpoints';

import { Seo } from "../components/SEO"

const IndexPage = () => {
  const page = "Hall Kaldevi";
  const [welcome, setWelcome] = useState(true);
  const [audio, setAudio] = useState(false);
  const [listActive, setListActive] = useState(false);

  const breakpoints = useBreakpoint();

  const [loading, setLoading] = useState(true);

  const [giro, setGiro] = useState(false);

  /* useEffect(()=>{
    if(!welcome && breakpoints.sm) {
      setGiro(true);
    }
  }, [welcome]) */
 

  return (
    <div>
      {/* <Overlay visible={loading}/>
      {!welcome && <Header setAudio={setAudio} audio={audio} page={page} setListActive={setListActive} listActive={listActive} />}
      <Footer  giro={giro} setGiro={setGiro}/> */}
      {/* <Blur page={page} setBlur={setWelcome} blur={welcome}> */}
        <div className="overlayLanding">
          <img className="logoLanding" src={'/Kaldevi_Logo_Yellow.png'} alt="Kaldevi Landing Logo"/>
          <h1 className="landingTitle">Showroom Virtual</h1>
          <h2 className="landingSubtitle">Próximamente</h2>
        </div>
        <Room breakpoints={breakpoints} listActive={listActive} setLoading={setLoading} welcome={welcome} giro={giro} />
      {/* </Blur> */}
      
      {/* <Audio audio={audio} setAudio={setAudio} isActive={welcome}/> */}

    </div>
  )
}

export default IndexPage

export function Head() {
  return(
    <Seo />
  )
}
