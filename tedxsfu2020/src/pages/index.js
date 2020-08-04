import React from "react"
import Menu from "../components/menu"
import homeStyle from "./index.module.css"

export default function Home() {
  return (
  <div className={homeStyle.main}>
    <Menu selected="Home"/>
    <div className={homeStyle.content}>
      <h2 className={homeStyle.ted_title}>TEDx<br/><span>SFU2020</span></h2>
      <h1>un<br/>ravel</h1>
      <h2 className={homeStyle.conference_date}>11.14 - 15</h2>
      <h2>Virtual<br/>Conference</h2>
    </div>
    <div className={homeStyle.conference_details}>
      <h1>10th aniversary</h1>
      <ul>
        <li>time</li>
        <li>Location?</li>
      </ul>
      <a class={homeStyle.button} href="https://www.instagram.com/tedxsfu/">Sign up!</a>
    </div>
  </div>)
}
