import React from "react"
import { Link } from "gatsby"
import StyleSheet from "./intro.module.css"

export default function intro(){
    return(
        <div class={StyleSheet.intro_container}>
            <Link to="/">Unravel</Link>
            <h1>TEDxSFU</h1>
        </div>
    )
}