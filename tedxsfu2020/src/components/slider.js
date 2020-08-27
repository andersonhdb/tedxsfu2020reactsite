import React, { useState } from 'react'
import SliderContent from './SliderContent'

const Slider = props=>{
    const getHeight = ()=> window.innerHeight;
    
    //const [state, setState] = useState(
    const [state] = useState(
        {
            activeIndex: 0,
            translate: 0,
            transition: 0.45,
            _slides: []
        }
    )

    const {translate, transition} = state;
    // const {translate, transition, activeIndex} = state;

    // const nextSlide = ()=>{
    //     props.NextSlide()
    //     if(activeIndex === props.slides.length-1){
    //         return setState({
    //             ...state,
    //             translate: 0,
    //             activeIndex: 0
    //         })
    //     }

    //     setState({
    //         ...state,
    //         activeIndex: activeIndex + 1,
    //         translate: (activeIndex + 1) * getHeight()
    //     })
    // }

    // const prevSlide = ()=>{
    //     props.prevSlide()
    //     if(activeIndex === 0 ){
    //         return setState({
    //             ...state,
    //             activeIndex: props.slides.length - 1, 
    //             translate: (props.slides.length-1) * getHeight()
    //         })
    //     }

    //     setState({
    //         ...state,
    //         activeIndex: activeIndex - 1,
    //         translate: (activeIndex - 1) * getHeight()
    //     })
    // }

    const style={
        overflow: 'hidden',
        height: "100vh",
        background_color:"black"
    }

    return (<div style = {style}>
        <SliderContent
            translate = {translate}
            transition = {transition}
            height = {getHeight() * props.slides.length}>
            {props.children}
        </SliderContent>
        </div>)
}

export default Slider;