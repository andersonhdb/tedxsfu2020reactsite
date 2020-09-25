import React from "react"
//import Menu from "../components/menu"
import Layout from "../components/layout"
import AboutData from "../data/about-data"
import AboutSlide from "../components/aboutSlide"
import Slider from "../components/slider"


export default function About(props) {
  return (
      <Layout title="about" index={5}>
        <Slider slides={AboutData()}>
          {AboutData().map((about,i) =>(
            <AboutSlide key={about+i} title={about.title} content={about.content} image={about.image}/>
          ))}
        </Slider>
      </Layout>)
}