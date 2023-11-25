import React from "react";
import "./Tooltip.css";

const tooltip = (props) =>{

    return (
        <div style={{left: props.left, top: props.top}} id="tooltip" className="top" ref={props.tooltipRef}>
            <div className="tooltip-arrow" />
            <div className="tooltip-label">{props.children}</div>
        </div>
    );
}

export default tooltip;