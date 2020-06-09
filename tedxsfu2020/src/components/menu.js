import React from "react"
import { Link } from "gatsby"
import menuStyles from "./menu.module.css"



export default function Header(props){
    return(
        <div>
            <nav className={menuStyles.menu}>
                <ul>
                    <li><Link to="/about/">About</Link></li>
                    <li><Link to="/team/">the Team</Link></li>
                    <li><Link to="/speakers/">Speakers</Link></li>
                    <li><Link to="/">Home</Link></li>
                </ul>
            </nav>
        </div>
    )
}