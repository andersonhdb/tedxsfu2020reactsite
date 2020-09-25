import React from "react"
//import Menu from "../components/menu"
import Layout from "../components/layout"
import LegacyData from "../data/legacy-data"
import LegacyStyle from "./legacy.module.css"
import Slider from "../components/slider"

export default function Legacy() {
  const mobileWidth = 800;

  const getWidth = ()=>{
    if (typeof window === 'undefined') return 0;    
    return window.innerWidth;
  }
  
  const mobileDecider = (mobileWidth, desktop, mobile)=>{
    return getWidth() > mobileWidth ? desktop : mobile
  } 

  const arr = Array("2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011");
  return (
      <Layout title="Legacy" index={3}>
        <div class={LegacyStyle.legacy}>
          <Slider slides={LegacyData}>
            {LegacyData.map((legacy, i)=>(
              <div key={legacy+i} class={LegacyStyle.slide} style={{
                backgroundImage: "url("+legacy.background+")"
              }}>
                <div class={LegacyStyle.content}>
                  <h2>{legacy.year}</h2>
                  <p>{legacy.blurb}</p>
                  <p class={LegacyStyle.videoLabel}>Featured Video</p>
                  <iframe
                    src={legacy.video}
                    title={legacy.title}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    frameBorder="0"
                    webkitallowfullscreen="true"
                    mozallowfullscreen="true"
                    allowFullScreen
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div class={LegacyStyle.yearcolumn}>
          <ul>
            {arr.map((year, i)=>(
              <li>{year}</li>
            ))}
          </ul>
        </div>
      </Layout>)
}