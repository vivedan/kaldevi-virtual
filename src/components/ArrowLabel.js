import React from 'react';

import {animated, useSpring, config} from 'react-spring';

function ArrowLabel(props) {

    const textStyles = useSpring({
        opacity: (props.hovered || props.breakpoints.sm) ? 1: 0, 
        width: (props.hovered || props.breakpoints.sm) ? '200px' : '0px', 
        config: config.molasses,
    })

    return (
        <animated.div style={{textAlign: props.textpos === "left" ? 'end' : 'start', width: textStyles.width, opacity: textStyles.opacity,}}>
                <h2 className="arrowTitle noselect">{props.dir}</h2>
        </animated.div>
    );
}

export default ArrowLabel;