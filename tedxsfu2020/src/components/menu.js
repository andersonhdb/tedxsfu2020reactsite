import React from "react"
import { Link } from "gatsby"
import menuStyles from "./menu.module.css"

import logo from "../images/logos/TEDxSFU-logo-Black.png"
import instragram_icon from "../images/icons/instagram-glyph-logo-icon-png-black-white.png"
import facebook_icon from "../images/icons/black-facebook-icon-png-6.png"
import linkedin_icon from "../images/icons/linkedin.png"
import twitter_icon from "../images/icons/twitter.png"

export default function Header(props){
    return(
        <div className={menuStyles.navigation}>
            <Link to="/"><img src={logo} alt="TEDxSFU logo"/></Link>
            <nav className={menuStyles.menu}>
                <ul>
                    <li><Link to="/legacy/">Legacy</Link></li>
                    <li><Link to="/about/">About</Link></li>
                    <li><Link to="/team/">OC Team</Link></li>
                    <li><Link to="/sponsors/">Partners</Link></li>
                    <li><Link to="/speakers/">Speakers</Link></li>
                </ul>
            </nav>
            <div className={menuStyles.social_media}>
                <ul>
                    <li><a href="https://www.instagram.com/tedxsfu/"><img src={instragram_icon} alt="instagram logo"/></a></li>
                    <li><a href="https://www.facebook.com/TEDxSFU"><img src={facebook_icon} alt="facebook logo"/></a></li>
                    <li><a href="https://twitter.com/tedxsfu?lang=en"><img src={twitter_icon} alt="instagram logo"/></a></li>
                    <li><a href="https://www.linkedin.com/company/tedxsfu/"><img src={linkedin_icon} alt="instagram logo"/></a></li>
                </ul>
            </div>
        </div>
    )
}