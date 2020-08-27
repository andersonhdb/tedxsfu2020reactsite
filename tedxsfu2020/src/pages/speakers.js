import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Slider from "../components/slider"
// import SpeakerData from "./speaker-data"
import Img from "gatsby-image"

import SpeakersStyle from "./speakers.module.css"

// import speaker1 from "../images/team/t1_e.jpg"
// import speaker2 from "../images/team/m1_e.jpg"

export default function Speakers(props) {

  console.log(props)
  const slides = [<Img fixed={props.data.speaker1ql.childImageSharp.fixed} alt="speaker 1"/>,
  <Img fixed={props.data.speaker2ql.childImageSharp.fixed} alt="speaker 2"/>]
  return (
      <Layout>
      <div>
        <div>
          <div class={SpeakersStyle.Carousel}>
              <Img fixed={props.data.speaker1ql.childImageSharp.fixed} alt="speaker 1"/>
              <Img fixed={props.data.speaker2ql.childImageSharp.fixed} alt="speaker 2"/>
          </div>
          <div class="content">
          </div> 
        </div>
      </div>
      <h1>The speakers page</h1>
      </Layout>)
}

export const query = graphql `
  query{
    speaker1ql: file(relativePath: {eq: "team/leads/t1_e.jpg"}) {
      childImageSharp{
        fixed(width: 200){
          ...GatsbyImageSharpFixed
        }
      }
    }
    speaker2ql: file(relativePath: {eq: "team/leads/m1_e.jpg"}) {
      childImageSharp{
        fixed(width: 200){
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

console.log("Anderson: ");
console.log(query);