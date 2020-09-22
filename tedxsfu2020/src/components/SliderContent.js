import React from 'react'

const SliderContent = (props)=>{

    const getWidth = ()=>{
        if (typeof window === 'undefined') return 0;    
        return window.innerWidth;
    }

    const style = {
        transform: `translateY(-${props.translate}px)`,
        transition: `transform ease-out ${props.transition}s`
    }

    const mobileStyle ={
        transform: `translateX(-${props.translate}px)`,
        transition: `transform ease-out ${props.transition}s`,
        display: `flex`
    }

    return(
        <div style = {getWidth() > 800 ? style : mobileStyle}>{props.children}</div>
    )
}

export default SliderContent;