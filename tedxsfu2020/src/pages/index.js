import React from "react"
// import Menu from "../components/menu"
import Layout from "../components/layout"
import homeStyle from "./index.module.css"

export default function Home() {
  return (
  <Layout title="Home" index={0}>
    <div className={homeStyle.content}>
      {/* <h2 className={homeStyle.ted_title}>TEDx<br/><span>SFU2020</span></h2>
      <h1>un<br/>ravel</h1>
      <h2 className={homeStyle.conference_date}>11.14 - 15</h2>
      <h2>Virtual<br/>Conference</h2> */}
      <img src="images/site/landing_page_info.png" alt="TEDxSFU 2020. Virtual conference. Unravel. 11.14-15"/>
    </div>
    <div className={homeStyle.conference_details}>
      <img src="/images/site/10thimg.png" alt="10th aniversary"/>
      <ul>
        <li><p>time</p></li>
        <li><p>McMedia</p></li>
      </ul>
      <a class={homeStyle.button} href="https://hopin.to/events/tedxsfu-2020-unravel">CTA</a>
    </div>
  </Layout>)
}
