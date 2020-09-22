import React from 'react'

import Menu from './menu'
import Head from './head'
import layoutStyle from './layout.module.css'

export default function Layout(props){
    return (
        <div>
            <Head title={props.title}/>
            <div class={layoutStyle.main}>
                <Menu/>
                {props.children}
            </div>
        </div>
    )
}