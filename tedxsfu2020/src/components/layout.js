import React from 'react'

import Menu from './menu' 

export default function Layout(props){
    return (
        <div>
            <Menu/>
            {props.children}
        </div>
    )
}