import React from 'react'
import './UI-Elements.css'

export default function UIButton(props) {
    return (
        <button 
            className={"button-class"+(" , "+props.addClass || "")} 
            onClick={props.onClick}
            // type={props.type}
            style={{
                width:(props.width),
                margin:(props.margin),
                float:(props.float),
                }}  
        >
            {props.text}
        </button>
    )
}
