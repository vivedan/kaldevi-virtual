import React, { useState, useEffect } from 'react';
import roomData from '../other/roomData';

function usePageInfo(info) {
    const [room, setRoom] = useState("");
    useEffect(()=>{
        //console.log("page info here");
        const roomInfo = roomData.find(room => room.title === info);
        setRoom(roomInfo);
        //console.log(room);
    }, [])
    return room;
}

export default usePageInfo;