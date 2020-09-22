import React, {useState} from "react"
import { Link } from "gatsby"
import menuStyles from "./menu.module.css"

import logo from "../images/logos/TEDxSFU-logo-Black.png"
import instragram_icon from "../images/icons/ig.png"
import facebook_icon from "../images/icons/fb.png"
import linkedin_icon from "../images/icons/in.png"
import twitter_icon from "../images/icons/tw.png"

export default function Header(props){
    const [state, setState] = useState({
        toggled: false
    })

    const {toggled} = state
    const menu = <nav className={menuStyles.menu}>
                    <ul>
                        <li><Link to="/sponsors/">Partners</Link></li>
                        <li><Link to="/team/">OC Team</Link></li>
                        <li><Link to="/legacy/">Legacy</Link></li>
                        <li><Link to="/speakers/">Speakers</Link></li>
                        <li><Link to="/about/">About</Link></li>
                    </ul>
                </nav>
    const content = <div class={menuStyles.dropdown}> 
        {menu}
    </div>
    return(
        <div className={menuStyles.navigation}>
            <div class={menuStyles.desktop}>
                <Link to="/"><img src={logo} alt="TEDxSFU logo"/></Link>
                {menu}
                <div className={menuStyles.social_media}>
                    <ul>
                        <li><a href="https://www.instagram.com/tedxsfu/"><img src={instragram_icon} alt="instagram logo"/></a></li>
                        <li><a href="https://www.facebook.com/TEDxSFU"><img src={facebook_icon} alt="facebook logo"/></a></li>
                        <li><a href="https://twitter.com/tedxsfu?lang=en"><img src={twitter_icon} alt="instagram logo"/></a></li>
                        <li><a href="https://www.linkedin.com/company/tedxsfu/"><img src={linkedin_icon} alt="instagram logo"/></a></li>
                    </ul>
                </div>
            </div>
            <div class={menuStyles.mobile}>
                <Link to="/"><img src={logo} alt="TEDxSFU logo"/></Link>
                <div class={menuStyles.hamburger} onClick={(e)=>{
                    setState({
                        toggled: !toggled
                    })
                }}>
                    <img src="/images/site/hamburger.png"/>
                </div>    
            </div>
            {toggled ? content : <p></p>}
        </div>
        
    )
}