import React from "react"
//import Menu from "../components/menu"
import Layout from "../components/layout"
import PartnersData from "../data/partners-data" 
import SponsorStyle from "./sponsor.module.css"

export default function sponsors() {
  return (
  <Layout title="Partners" index={1}>
    <div class={SponsorStyle.partners}>
      <h1>MEET OUR PARTNERS</h1>
      <div class={SponsorStyle.content}>
        {PartnersData().map((partner,i)=>(
          <div>
            <h2>{partner.title} - <span>{partner.sponsor}</span></h2>
            {partner.logo}
            <p>{partner.blurb}</p>
            {partner.url}
          </div>
        ))}
      </div>
    </div>
  </Layout>)
}