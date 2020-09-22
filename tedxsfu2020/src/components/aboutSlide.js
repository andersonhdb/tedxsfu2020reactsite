import React from 'react'
import SlideStyle from "./aboutSlide.module.css"

export default function Header(props){
    return(<div class={SlideStyle.main}>
        <div class={SlideStyle.content}>
            <h2>{props.title}</h2>
            <div>{props.content}</div>
        </div>
        <div>
            <img src={props.image}/>
        </div>
    </div>)
}