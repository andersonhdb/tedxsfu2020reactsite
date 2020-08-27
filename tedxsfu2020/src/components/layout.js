import React from 'react'

import Menu from './menu'
import layoutStyle from './layout.module.css'

export default function Layout(props){
    return (
        <div class={layoutStyle.main}>
            <Menu/>
            {props.children}
        </div>
    )
}