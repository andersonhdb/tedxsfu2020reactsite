// import React, { useState } from "react"
// import { graphql } from "gatsby"
// import Layout from "../components/layout"
// import Slider from "../components/slider"
// import SpeakerData from "../data/speaker-data"
// import Img from "gatsby-image"

// import SpeakersStyle from "./speakers.module.css"

// // import speaker1 from "../images/team/t1_e.jpg"
// // import speaker2 from "../images/team/m1_e.jpg"

// export default function Speakers(props) {

//   const [state, setState] = useState(
//     {
//       currentIndex: 0
//     }
//   )

//   const nextSlide = ()=>{
//     let nextIndex = currentIndex++;
//     if(nextIndex>=SpeakerData.length){
//       nextIndex = 0;
//     }
//     setState({
//       ...state,
//       currentIndex: nextIndex
//     })
//   }

//   const prevSlide = ()=>{
//     let prevIndex = currentIndex--;
//     if(prevIndex<0){
//       prevIndex = SpeakerData.length-1;
//     }
//     setState({
//       ...state,
//       currentIndex: prevIndex
//     })
//   }

//   const {currentIndex} = state;

//   console.log(props)
//   const slides = [<Img fixed={props.data.speaker1ql.childImageSharp.fixed} alt="speaker 1"/>,
//   <Img fixed={props.data.speaker2ql.childImageSharp.fixed} alt="speaker 2"/>]
//   return (
//       <Layout>
//         <div class={SpeakersStyle.carousel}>
//           <Slider slides={slides} NextSlide = {nextSlide} prevSlide={prevSlide}>
//             <Img fixed={props.data.speaker1ql.childImageSharp.fixed} alt="speaker 1"/>
//             <Img fixed={props.data.speaker2ql.childImageSharp.fixed} alt="speaker 2"/>
//           </Slider>
//         </div>
//         <div class={SpeakersStyle.content}>
//           <h2>Day1 ________ 11.14</h2>
//           <h2>Speaker: <span>{SpeakerData[currentIndex].name}</span></h2>
//           <h3>{SpeakerData[currentIndex].job}</h3>
//           <div class={SpeakersStyle.description}>
//             <p>{SpeakerData[currentIndex].description}</p>
//             <p>{SpeakerData[currentIndex].continuation}</p>
//           </div>
//         </div> 
//       </Layout>)
// }

// export const query = graphql `
//   query{
//     speaker1ql: file(relativePath: {eq: "team/leads/t1_e.jpg"}) {
//       childImageSharp{
//         fixed(width: 350, height: 475){
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//     speaker2ql: file(relativePath: {eq: "team/leads/m1_e.jpg"}) {
//       childImageSharp{
//         fixed(width: 350, height: 475){
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//   }
// `

//console.log("Anderson: ");
//console.log(query);