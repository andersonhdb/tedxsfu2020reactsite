import React from 'react'

const SliderContent = (props)=>{
    const style = {
        transform: `translateY(-${props.translate}px)`,
        transition: `transform ease-out ${props.transition}s`
    }

    return(
        <div style = {style}>{props.children}</div>
    )
}

export default SliderContent;