import React, {useState} from "react"
import Layout from "../components/layout"
import Member from "../components/team-member"
import { graphql } from "gatsby"

import teamStyle from "./team.module.css"
import bios from "../data/teamBios"

import leadt1 from "../images/team/leads/t1_e.jpg"
import leadt2 from "../images/team/leads/t2_e.jpg"

import leadm1 from "../images/team/leads/m1_e.jpg"
import leadm2 from "../images/team/leads/m2_e.jpg"

export default function Team(props) {
  //let eventsinfoclass = teamStyle.info;

  const [state, setState] = useState({
    leadBio: <p></p>,
    internalBio: <p></p>,
    eventsBio: <p></p>,
    contentBio: <p></p>,
    marketingBio: <p></p>,
    creativeBio: <p></p>,
    prBio: <p></p>,
    others: <p></p>
  })

  const {leadBio, internalBio, eventsBio, contentBio, marketingBio, creativeBio, prBio, others} = state;

  console.log(props.data);
  return (
    <Layout>
      <div>
        <div class={teamStyle.header}>
          <h1>MEET - TEDxSFU, 2020</h1>
          <h1><span>ORGANIZING COMMITTEE</span></h1>
        </div>
        
        <div class={teamStyle.project_leads}>
          <div>
            <h2>Project Leads</h2>
            <p>Project Leads oversees TEDxSFU’s committees who are tasked with creating the TEDxSFU 2020 event from top to bottom. This year, we are focusing on developing the team’s culture while adapting to many changes because of COVID-19</p>
          </div>

          <div class={teamStyle.team_image}>
          </div>

          <div onClick={()=>{setState({
            ...state,
            leadBio: bios.tony,
            internalBio: <p></p>,
            eventsBio: <p></p>,
            contentBio: <p></p>,
            marketingBio: <p></p>,
            creativeBio: <p></p>,
            prBio: <p></p>,
            others: <p></p>
          })}}>
          <Member image={leadt1} activeimage={leadt2} name="Tony Virdo" job="Project lead"/>
          </div>
          <div onClick={()=>{setState({
            ...state,
            leadBio: bios.meredith,
            internalBio: <p></p>,
            eventsBio: <p></p>,
            contentBio: <p></p>,
            marketingBio: <p></p>,
            creativeBio: <p></p>,
            prBio: <p></p>,
            others: <p></p>
          })}}>
          <Member image={leadm1} activeimage={leadm2} name="Meredith Nguyen" job="Project lead"/>
          </div>

          <div class={teamStyle.info}>{leadBio}</div>
        </div>
        




        <div class={teamStyle.internal}>
          
          <div class={teamStyle.team_image}>  
          </div>

          <div style={{height:"200px"}}>
          </div>

          <div>
          </div>
            
          <div>
            <h2>Internal</h2>
            <p>The Internal Committee ensures connectedness and inclusivity by creating a warm and welcoming environment for the entire OC. We focus on supporting everyone's growth through our Development Plan as well as making everyone feel connected during our socials and icebreakers!</p>
          </div>

          <div>
          </div>

          <div onClick={()=>{setState({
            ...state,
            leadBio: <p></p>,
            internalBio: bios.eva,
            eventsBio: <p></p>,
            contentBio: <p></p>,
            marketingBio: <p></p>,
            creativeBio: <p></p>,
            prBio: <p></p>,
            others: <p></p>
          })}}>
            <Member image="/images/team/internal/e1_e.jpg" activeimage="/images/team/internal/e2_e.jpg" name="Eva Ang" job="Internal Director"/>
          </div>
          <div onClick={()=>{setState({
            ...state,
            leadBio: <p></p>,
            internalBio: bios.christina,
            eventsBio: <p></p>,
            contentBio: <p></p>,
            marketingBio: <p></p>,
            creativeBio: <p></p>,
            prBio: <p></p>,
            others: <p></p>
          })}}>
            <Member image="/images/team/internal/c1_e.jpg" activeimage="/images/team/internal/c2_e.jpg" name="Christina Walker" job="Internal Coordinator"/>
          </div>
          <div onClick={()=>{setState({
            ...state,
            leadBio: <p></p>,
            internalBio: bios.zoya,
            eventsBio: <p></p>,
            contentBio: <p></p>,
            marketingBio: <p></p>,
            creativeBio: <p></p>,
            prBio: <p></p>,
            others: <p></p>
          })}}>
          <Member image="/images/team/internal/z1_e.jpg" activeimage="/images/team/internal/z2_e.jpg" name="Zoya Nari" job="Internal & Partner Relations Coordinator"/>
          </div>

          <div class={teamStyle.info}>{internalBio}</div>
        </div>
        



        <div class={teamStyle.events}>

          <div style={{height:"200px"}}>
          </div>

          <div class={teamStyle.team_image}>  
          </div>

          <div>
          </div>

          <div onClick={()=>{setState({
            ...state,
            leadBio: <p></p>,
            internalBio: <p></p>,
            eventsBio: bios.fahimeh,
            contentBio: <p></p>,
            marketingBio: <p></p>,
            creativeBio: <p></p>,
            prBio: <p></p>,
            others: <p></p>
          })}}>
            <Member image="/images/team/events/f1_e.jpg" activeimage="/images/team/events/f2_e.jpg" name="Fahimeh Karimi" job="Events Director"/>
          </div>

          <div>
            <h2>Events</h2>
            <p>Events Committee manages TEDxSFU's day-of logistics and helps to bring the "TEDx experience" to life for our audience! We coordinate with the entire team regarding pre-conference event(s), day-of, and after-conference activities, prepare itineraries for all TEDxSFU related events, and communicate with AV staff. To help create the best guest experience we also recruit and manage a small team of General Ambassadors, who help with engaging with our audience among other responsibilities!</p>
          </div>

          <div onClick={()=>{setState({
            ...state,
            leadBio: <p></p>,
            internalBio: <p></p>,
            eventsBio: bios.jess,
            contentBio: <p></p>,
            marketingBio: <p></p>,
            creativeBio: <p></p>,
            prBio: <p></p>,
            others: <p></p>
          })}}>
            <Member image="/images/team/events/j1_e.jpg" activeimage="/images/team/events/j2_e.jpg" name="Jess Dela Cruz" job="Events Coordinator"/>
          </div>

          <div onClick={()=>{setState({
            ...state,
            leadBio: <p></p>,
            internalBio: <p></p>,
            eventsBio: bios.douglas,
            contentBio: <p></p>,
            marketingBio: <p></p>,
            creativeBio: <p></p>,
            prBio: <p></p>,
            others: <p></p>
          })}}>
            <Member image="/images/team/events/d1_e.jpg" activeimage="/images/team/events/d2_e.jpg" name="Douglas Cheung" job="Events Coordinator"/>
          </div>

          <div class={teamStyle.info}>{eventsBio}</div>
        </div>
        



        <div class={teamStyle.content}>
          <div class={teamStyle.blurb}>
            <h2>Content<br/>Development</h2>
            <p>TEDxSFU’s Content Development Committee looks to unearth local voices that
have yet to be discovered. We are responsible for recruiting and working closely with the talent for the conference, including speakers, coaches, performers, and the master of ceremonies. Our team was also responsible for developing the theme for this year’s TEDxSFU conference, “Unravel”.</p>
          </div>

          <div class={teamStyle.team_image}>  
          </div>
          <div onClick={()=>{setState({
            ...state,
            leadBio: <p></p>,
            internalBio: <p></p>,
            eventsBio: <p></p>,
            contentBio: bios.brian,
            marketingBio: <p></p>,
            creativeBio: <p></p>,
            prBio: <p></p>,
            others: <p></p>
          })}}>
            <Member image="/images/team/content/b1_e.jpg" activeimage="/images/team/content/b2_e.jpg" name="Brian Cagampan" job="Content Development Director"/>
          </div>
          <div onClick={()=>{setState({
            ...state,
            leadBio: <p></p>,
            internalBio: <p></p>,
            eventsBio: <p></p>,
            contentBio: bios.sneha,
            marketingBio: <p></p>,
            creativeBio: <p></p>,
            prBio: <p></p>,
            others: <p></p>
          })}}>
            <Member image="/images/team/content/s1_e.jpg" activeimage="/images/team/content/s2_e.jpg" name="Sneha Shah" job="Content Development Coordinator"/>
          </div>
          <div onClick={()=>{setState({
            ...state,
            leadBio: <p></p>,
            internalBio: <p></p>,
            eventsBio: <p></p>,
            contentBio: bios.edna,
            marketingBio: <p></p>,
            creativeBio: <p></p>,
            prBio: <p></p>,
            others: <p></p>
          })}}>
            <Member image="/images/team/content/e1_e.jpg" activeimage="/images/team/content/e2_e.jpeg" name="Edna Batengas" job="Content Development Coordinator"/>
          </div>

          <div class={teamStyle.info}>{contentBio}</div>
        </div>



        <div class={teamStyle.marketing}>
          
          <div class={teamStyle.blurb}>
            <h2>Marketing</h2>
            <p>Marketing Committee develops and implements comprehensive marketing strategies to drive attendance to TEDxSFU 2020. We generate widespread awareness of the TEDxSFU brand, as well as increase attendee engagement to foster a positive experience for all through the ideation and implementation of creative marketing campaigns and speaker spotlights.</p>
          </div>

          <div class={teamStyle.team_image}>  
          </div>

          <div onClick={()=>{setState({
            ...state,
            leadBio: <p></p>,
            internalBio: <p></p>,
            eventsBio: <p></p>,
            contentBio: <p></p>,
            marketingBio: bios.tu,
            creativeBio: <p></p>,
            prBio: <p></p>,
            others: <p></p>
          })}}>
            <Member image="/images/team/marketing/t1_e.jpg" activeimage="/images/team/marketing/t2_e.jpg" name="Tu Bui" job="Marketing Director"/>
          </div>

          <div onClick={()=>{setState({
            ...state,
            leadBio: <p></p>,
            internalBio: <p></p>,
            eventsBio: <p></p>,
            contentBio: <p></p>,
            marketingBio: bios.emily,
            creativeBio: <p></p>,
            prBio: <p></p>,
            others: <p></p>
          })}}>
            <Member image="/images/team/marketing/e1_e.jpg" activeimage="/images/team/marketing/e2_e.jpg" name="Emily Lam" job="Marketing Coordinator & Partner Relations Coordinator"/>
          </div>

          <div onClick={()=>{setState({
            ...state,
            leadBio: <p></p>,
            internalBio: <p></p>,
            eventsBio: <p></p>,
            contentBio: <p></p>,
            marketingBio: bios.amy,
            creativeBio: <p></p>,
            prBio: <p></p>,
            others: <p></p>
          })}}>
            <Member image="/images/team/marketing/a1_e.jpg" activeimage="/images/team/marketing/a2_e.PNG" name="Amy Batengas" job="Marketing Coordinator"/>
          </div>

          <div onClick={()=>{setState({
            ...state,
            leadBio: <p></p>,
            internalBio: <p></p>,
            eventsBio: <p></p>,
            contentBio: <p></p>,
            marketingBio: bios.kim,
            creativeBio: <p></p>,
            prBio: <p></p>,
            others: <p></p>
          })}}>
            <Member image="/images/team/marketing/k1_e.jpg" activeimage="/images/team/marketing/k2_e.JPG" name="Kim Regala" job="Marketing Coordinator"/>
          </div>

          <div class={teamStyle.info}>{marketingBio}</div>
        </div>




        <div class={teamStyle.creative}>
          <div class={teamStyle.team_image}>  
          </div>

          <div style={{height:"200px"}}></div>

          <div class={teamStyle.blurb}>
          <h2>Creative</h2>
            <p>The Creative Committee is in charge of all branding and visuals for the TEDxSFU brand and theme. They create social media content, the TEDxSFU website, and much more.</p>
          </div>

          <div onClick={()=>{setState({
            ...state,
            leadBio: <p></p>,
            internalBio: <p></p>,
            eventsBio: <p></p>,
            contentBio: <p></p>,
            marketingBio: <p></p>,
            creativeBio: bios.sara,
            prBio: <p></p>,
            others: <p></p>
          })}}>
            <Member image="/images/team/creative/s1_e.jpg" activeimage="/images/team/creative/s2_e.jpg" name="Sara Milosavic" job="Creative Director"/>
          </div>

          <div onClick={()=>{setState({
            ...state,
            leadBio: <p></p>,
            internalBio: <p></p>,
            eventsBio: <p></p>,
            contentBio: <p></p>,
            marketingBio: <p></p>,
            creativeBio: bios.justin,
            prBio: <p></p>,
            others: <p></p>
          })}}>
            <Member image="/images/team/creative/j1_e.jpg" activeimage="/images/team/creative/j2_e.jpg" name="Justin Yang" job="Creative Coordinator"/>
          </div>

          <div></div>

          <div onClick={()=>{setState({
            ...state,
            leadBio: <p></p>,
            internalBio: <p></p>,
            eventsBio: <p></p>,
            contentBio: <p></p>,
            marketingBio: <p></p>,
            creativeBio: bios.peggy,
            prBio: <p></p>,
            others: <p></p>
          })}}>
            <Member image="/images/team/creative/p1_e.jpg" activeimage="/images/team/creative/p2_e.jpg" name="Peggy Chien" job="Creative Coordinator"/>
          </div>

          <div onClick={()=>{setState({
            ...state,
            leadBio: <p></p>,
            internalBio: <p></p>,
            eventsBio: <p></p>,
            contentBio: <p></p>,
            marketingBio: <p></p>,
            creativeBio: bios.anderson,
            prBio: <p></p>,
            others: <p></p>
          })}}>
            <Member image="/images/team/creative/a1_e.jpg" activeimage="/images/team/creative/a2_e.jpg" name="Anderson H. D. Borba" job="Web Developer"/>
          </div>

          <div class={teamStyle.info}>{creativeBio}</div>
        </div>



        <div class={teamStyle.partners}>
          <div class={teamStyle.team_image}>  
          </div>

          <div class={teamStyle.blurb}>
          <h2>Partner Relations</h2>
            <p>The Partner Relations Committee is responsible for reaching out and securing partners that will advance the conference, as well as align closely with TEDxSFU branding and values. We deliver persuasive pitches, negotiate strategically with potential partners, and maintain strong relationships with existing partners.</p>
          </div>

          <div onClick={()=>{setState({
            ...state,
            leadBio: <p></p>,
            internalBio: <p></p>,
            eventsBio: <p></p>,
            contentBio: <p></p>,
            marketingBio: <p></p>,
            creativeBio: <p></p>,
            prBio: bios.jonathan,
            others: <p></p>
          })}}>

          <Member image="/images/team/pr/j1_e.png" activeimage="/images/team/pr/j2_e.jpeg" name="Jonathan To" job="Partner Relations Director"/>
          </div>

          <div onClick={()=>{setState({
            ...state,
            leadBio: <p></p>,
            internalBio: <p></p>,
            eventsBio: <p></p>,
            contentBio: <p></p>,
            marketingBio: <p></p>,
            creativeBio: <p></p>,
            prBio: bios.diana,
            others: <p></p>
          })}}>
          <Member image="/images/team/pr/d1_e.jpg" activeimage="/images/team/pr/d2_e.jpg" name="Diana Kulikova" job="Partner Relations Coordinator"/>
          </div>

          <div class={teamStyle.info}>{prBio}</div>

        </div>

        <div class={teamStyle.ga}>
          <Member image="/images/team/leads/t1_e.jpg" activeimage="/images/team/leads/t2_e.jpg" name="Pamela Hart" job="Speaker Coach"/>
          <Member image="/images/team/leads/t1_e.jpg" activeimage="/images/team/leads/t2_e.jpg" name="Len Pierre" job="Speaker Coach"/>
          <Member image="/images/team/leads/t1_e.jpg" activeimage="/images/team/leads/t2_e.jpg" name="Nigel Mojica" job="Master of Cerimonies"/>
          <Member image="/images/team/leads/t1_e.jpg" activeimage="/images/team/leads/t2_e.jpg" name="FIRSTNAME LASTNAME" job="Energizer"/>
          <Member image="/images/team/leads/t1_e.jpg" activeimage="/images/team/leads/t2_e.jpg" name="FIRSTNAME LASTNAME" job="Energizer"/>
          <Member image="/images/team/leads/t1_e.jpg" activeimage="/images/team/leads/t2_e.jpg" name="Bernard Riecke" job="License Holder"/>
          <div class={teamStyle.info}>{others}</div>
        </div>

      </div>
    </Layout>)
}

export const query = graphql `
query{
  teamleadt1: file(relativePath: {eq: "team/leads/t1_e.jpg"}) {
    childImageSharp{
      fixed(width: 200){
        ...GatsbyImageSharpFixed
      }
    }
  }
  teamleadt2: file(relativePath: {eq: "team/leads/t2_e.jpg"}) {
    childImageSharp{
      fixed(width: 200){
        ...GatsbyImageSharpFixed
      }
    }
  }
}
`