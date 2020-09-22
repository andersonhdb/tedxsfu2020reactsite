import React, { useState } from 'react'
import SliderContent from './sliderContent'
import Arrow from './Arrow'
import Dots from "./Dots"

const Slider = props=>{
    
    const mobileWidth = 800;

    const getHeight = ()=> {
        if (typeof window === 'undefined') return 0;    
        return window.innerHeight;
    };

    const getWidth = ()=>{
        if (typeof window === 'undefined') return 0;    
        return window.innerWidth;
    }

    const mobileDecider = (mobileWidth, desktop, mobile)=>{
        return getWidth() > mobileWidth ? desktop : mobile
    }
    
    const [state, setState] = useState(
    //const [state] = useState(
        {
            activeIndex: 0,
            translate: 0,
            transition: 0.45,
            _slides: []
        }
    )

    //const {translate, transition} = state;
    const {translate, transition, activeIndex} = state;

    const nextSlide = ()=>{
        if(activeIndex === props.slides.length-1){
            return setState({
                ...state,
                translate: 0,
                activeIndex: 0
            })
        }

        setState({
            ...state,
            activeIndex: activeIndex + 1,
            translate: (activeIndex + 1) * getHeight()
        })
    }

    const mobileNextSlide = () =>{
        if(activeIndex === props.slides.length-1){
            return setState({
                ...state,
                translate: 0,
                activeIndex: 0
            })
        }

        setState({
            ...state,
            activeIndex: activeIndex + 1,
            translate: (activeIndex + 1) * getWidth()
        })
    }

    const prevSlide = ()=>{
        if(activeIndex === 0 ){
            return setState({
                ...state,
                activeIndex: props.slides.length - 1, 
                translate: (props.slides.length-1) * getHeight()
            })
        }

        setState({
            ...state,
            activeIndex: activeIndex - 1,
            translate: (activeIndex - 1) * getHeight()
        })
    }

    const mobilePrevSlide = ()=>{
        if(activeIndex === 0 ){
            return setState({
                ...state,
                activeIndex: props.slides.length - 1, 
                translate: (props.slides.length-1) * getWidth()
            })
        }

        setState({
            ...state,
            activeIndex: activeIndex - 1,
            translate: (activeIndex - 1) * getWidth()
        })
    }

    const toSpecificSlide = (e) =>{
        setState({
            ...state,
            activeIndex: parseInt(e.currentTarget.dataset.index),
            translate: parseInt(e.currentTarget.dataset.index) * getHeight()
        })
    }

    const mobileToSpecificSlide = (e) =>{
        setState({
            ...state,
            activeIndex: parseInt(e.currentTarget.dataset.index),
            translate: parseInt(e.currentTarget.dataset.index) * getWidth()
        })
    }

    const style={
        overflow: 'hidden',
        height: "100vh",
    }

    const mobileStye = {
        overflow: 'hidden',
        width: "100vw"
    }

    return (<div style = {mobileDecider(mobileWidth, style, mobileStye)}>

        <SliderContent
            translate = {translate}
            transition = {transition}
            height = {mobileDecider(mobileWidth, getHeight() * props.slides.length, "auto" )}
            width = {mobileDecider(mobileWidth, "auto", getWidth() * props.slides.length )}>
                {props.children}
        </SliderContent>
        <Arrow handleClick={mobileDecider(mobileWidth, nextSlide, mobileNextSlide)} direction="down" style={{
            position: "absolute",
            top: mobileDecider(mobileWidth, "55%", "70%"),
            right: mobileDecider(mobileWidth, "32vw", "1rem"),
            transform: mobileDecider(mobileWidth, "rotate(0deg)", "rotate(-90deg)"),
            zIndex: "6"}}/>
        <Arrow handleClick={mobileDecider(mobileWidth, prevSlide, mobilePrevSlide)} direction="up" style={{
            position: "absolute",
            top: mobileDecider(mobileWidth, "35%", "70%"),
            right: mobileDecider(mobileWidth, "32vw", "85vw"),
            transform: mobileDecider(mobileWidth, "rotate(0deg)", "rotate(-90deg)"),
            zIndex: "6"}}/>

        <Dots slides={props.slides} activeIndex={activeIndex} handleClick ={mobileDecider(mobileWidth, toSpecificSlide, mobileToSpecificSlide) }/>
        </div>)
}

export default Slider;