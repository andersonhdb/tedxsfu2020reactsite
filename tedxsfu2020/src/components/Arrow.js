import React from 'react'

export default function Arrow(props){
    return(<div class="arrow" style={props.style} onClick={props.handleClick}><img src={props.direction==="up"?"/images/site/up_arrow.png":"/images/site/down_arrow.png"}/></div>)
}