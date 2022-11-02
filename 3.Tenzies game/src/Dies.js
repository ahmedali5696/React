import React from "react"


export default function Dies(props) {
    return (
        <div className={props.isHeld ? 'die-face bg-green' : 'die-face'} onClick={props.holdToggle}>
            <h2 className="die-num">{props.value}</h2>
        </div>
    )
}
