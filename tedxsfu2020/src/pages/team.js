import React, {useState} from "react"
import Layout from "../components/layout"
import Member from "../components/team-member"
import { graphql } from "gatsby"

import teamStyle from "./team.module.css"
import bios from "../data/teamBios"


export default function Team(props) {
  const [state, setState] = useState({
    previouslySelected: null
  })

  const {previouslySelected} = state;

  const clickHandle = (e)=>{
    if(previouslySelected !== null && previouslySelected!== e.currentTarget){
      previouslySelected.children[0].click();
    }

    if(previouslySelected=== e.currentTarget){
      return setState({
        ...state,
        previouslySelected: null
      })
    }

    setState({
      ...state,
      previouslySelected: e.currentTarget
    })
  }
  //let eventsinfoclass = teamStyle.info;
  return (
    <Layout title="OC Team" index={2}>
      <div>
        <div class={teamStyle.header}>
          {/* <h1>MEET - TEDxSFU, 2020</h1>
          <h1><span>ORGANIZING COMMITTEE</span></h1> */}
          <img src="/images/team/meet the team.png"/>
        </div>
        
        <div class={teamStyle.project_leads}>
          <div class={teamStyle.blurb}>
            <h2>Project Leads</h2>
            <p class={teamStyle.description}>Project Leads oversees TEDxSFU’s committees who are tasked with creating the TEDxSFU 2020 event from top to bottom. This year, we are focusing on developing the team’s culture while adapting to many changes because of COVID-19</p>
          </div>

          <div class={teamStyle.team_image + " " + teamStyle.filler}>
          </div>

          <div class={teamStyle.tony} onClick={clickHandle}>
          <Member image="/images/team/leads/t1_e.jpg" activeimage="/images/team/leads/t2_e.jpg" name="Tony Virdo" job="Project lead" description={bios.tony}/>
          </div>

          <div onClick={clickHandle}>
          <Member image="/images/team/leads/m1_e.jpg" activeimage="/images/team/leads/m2_e.jpg" name="Meredith Nguyen" job="Project lead" description={bios.meredith}/>
          </div>
        </div>
        




        <div class={teamStyle.internal}>
          <div class={teamStyle.filler}>
          </div>

          <div class={teamStyle.blurb}>
            <h2>Internal</h2>
            <p class={teamStyle.description}>The Internal Committee ensures connectedness and inclusivity by creating a warm and welcoming environment for the entire OC. We focus on supporting everyone's growth through our Development Plan as well as making everyone feel connected during our socials and icebreakers!</p>
          </div>

          <div onClick={clickHandle}>
            <Member image="/images/team/internal/e1_e.jpg" activeimage="/images/team/internal/e2_e.jpg" name="Eva Ang" job="Internal Director" description={bios.eva}/>
          </div>
          <div class={teamStyle.tony} onClick={clickHandle}>
            <Member image="/images/team/internal/c1_e.jpg" activeimage="/images/team/internal/c2_e.jpg" name="Christina Walker" job="Internal Coordinator" description={bios.christina}/>
          </div>
          <div onClick={clickHandle}>
          <Member image="/images/team/internal/z1_e.jpg" activeimage="/images/team/internal/z2_e.jpg" name="Zoya Nari" job="Internal & Partner Relations Coordinator" description={bios.zoya}/>
          </div>
        </div>
        



        <div class={teamStyle.events}>

          <div onClick={clickHandle}>
            <Member image="/images/team/events/f1_e.jpg" activeimage="/images/team/events/f2_e.jpg" name="Fahimeh Karimi" job="Events Director" description={bios.fahimeh}/>
          </div>

          <div class={teamStyle.blurb}>
            <h2>Events</h2>
            <p class={teamStyle.description}>Events Committee manages TEDxSFU's day-of logistics and helps to bring the "TEDx experience" to life for our audience! We coordinate with the entire team regarding pre-conference event(s), day-of, and after-conference activities, prepare itineraries for all TEDxSFU related events, and communicate with AV staff. To help create the best guest experience we also recruit and manage a small team of General Ambassadors, who help with engaging with our audience among other responsibilities!</p>
          </div>

          <div class={teamStyle.tony} onClick={clickHandle}>
            <Member image="/images/team/events/j1_e.jpg" activeimage="/images/team/events/j2_e.jpg" name="Jess Dela Cruz" job="Events Coordinator" description={bios.jess}/>
          </div>

          <div onClick={clickHandle}>
            <Member image="/images/team/events/d1_e.jpg" activeimage="/images/team/events/d2_e.jpg" name="Douglas Cheung" job="Events Coordinator" description={bios.douglas}/>
          </div>

        </div>
        



        <div class={teamStyle.content}>
          <div class={teamStyle.blurb}>
            <h2>Content<br/>Development</h2>
            <p class={teamStyle.description}>TEDxSFU’s Content Development Committee looks to unearth local voices that
have yet to be discovered. We are responsible for recruiting and working closely with the talent for the conference, including speakers, coaches, performers, and the master of ceremonies. Our team was also responsible for developing the theme for this year’s TEDxSFU conference, “Unravel”.</p>
          </div>

          <div class={teamStyle.filler}>  
          </div>

          <div class={teamStyle.filler}>  
          </div>

          <div onClick={clickHandle}>
            <Member image="/images/team/content/b1_e.jpg" activeimage="/images/team/content/b2_e.jpg" name="Brian Cagampan" job="Content Development Director" description={bios.brian}/>
          </div>
          <div class={teamStyle.tony} onClick={clickHandle}>
            <Member image="/images/team/content/s1_e.jpg" activeimage="/images/team/content/s2_e.jpg" name="Sneha Shah" job="Content Development Coordinator" description={bios.sneha}/>
          </div>
          <div onClick={clickHandle}>
            <Member image="/images/team/content/e1_e.jpg" activeimage="/images/team/content/e2_e.jpg" name="Edna Batengas" job="Content Development Coordinator" description={bios.edna}/>
          </div>
        </div>



        <div class={teamStyle.marketing}>
          
          <div class={teamStyle.blurb}>
            <h2>Marketing</h2>
            <p class={teamStyle.description}>Marketing Committee develops and implements comprehensive marketing strategies to drive attendance to TEDxSFU 2020. We generate widespread awareness of the TEDxSFU brand, as well as increase attendee engagement to foster a positive experience for all through the ideation and implementation of creative marketing campaigns and speaker spotlights.</p>
          </div>

          <div class={teamStyle.filler}>  
          </div>

          <div class={teamStyle.tony} onClick={clickHandle}>
            <Member image="/images/team/marketing/t1_e.jpg" activeimage="/images/team/marketing/t2_e.jpg" name="Tu Bui" job="Marketing Director" description={bios.tu}/>
          </div>

          <div onClick={clickHandle}>
            <Member image="/images/team/marketing/e1_e.jpg" activeimage="/images/team/marketing/e2_e.jpg" name="Emily Lam" job="Marketing Coordinator & Partner Relations Coordinator" description={bios.emily}/>
          </div>

          <div class={teamStyle.filler}>  
          </div>

          <div class={teamStyle.tony} onClick={clickHandle}>
            <Member image="/images/team/marketing/a1_e.jpg" activeimage="/images/team/marketing/a2_e.jpg" name="Amy Batengas" job="Marketing Coordinator" description={bios.amy}/>
          </div>

          <div onClick={clickHandle}>
            <Member image="/images/team/marketing/k1_e.jpg" activeimage="/images/team/marketing/k2_e.jpg" name="Kim Regala" job="Marketing Coordinator" description={bios.kim}/>
          </div>
        </div>




        <div class={teamStyle.creative}>

          <div class={teamStyle.blurb}>
          <h2>Creative</h2>
            <p class={teamStyle.description}>The Creative Committee is in charge of all branding and visuals for the TEDxSFU brand and theme. They create social media content, the TEDxSFU website, and much more.</p>
          </div>

          <div onClick={clickHandle}>
            <Member image="/images/team/creative/s1_e.jpg" activeimage="/images/team/creative/s2_e.jpg" name="Sara Milosavic" job="Creative Director" description={bios.sara}/>
          </div>

          <div class={teamStyle.tony} onClick={clickHandle}>
            <Member image="/images/team/creative/j1_e.jpg" activeimage="/images/team/creative/j2_e.jpg" name="Justin Yang" job="Creative Coordinator" description={bios.justin}/>
          </div>

          <div onClick={clickHandle}>
            <Member image="/images/team/creative/p1_e.jpg" activeimage="/images/team/creative/p2_e.jpg" name="Peggy Chien" job="Creative Coordinator" description={bios.peggy}/>
          </div>

          <div class={teamStyle.tony} onClick={clickHandle}>
            <Member image="/images/team/creative/a1_e.jpg" activeimage="/images/team/creative/a2_e.jpg" name="Anderson Borba" job="Web Developer" description={bios.anderson}/>
          </div>

        </div>



        <div class={teamStyle.partners}>
          <div class={teamStyle.team_image}>  
          </div>

          <div class={teamStyle.blurb}>
          <h2>Partner Relations</h2>
            <p class={teamStyle.description}>The Partner Relations Committee is responsible for reaching out and securing partners that will advance the conference, as well as align closely with TEDxSFU branding and values. We deliver persuasive pitches, negotiate strategically with potential partners, and maintain strong relationships with existing partners.</p>
          </div>

          <div class={teamStyle.tony} onClick={clickHandle}>
            <Member image="/images/team/pr/j1_e.jpg" activeimage="/images/team/pr/j2_e.jpg" name="Jonathan To" job="Partner Relations Director" description={bios.jonathan}/>
          </div>

          <div onClick={clickHandle}>
            <Member image="/images/team/pr/d1_e.jpg" activeimage="/images/team/pr/d2_e.jpg" name="Diana Kulikova" job="Partner Relations Coordinator" description={bios.diana}/>
          </div>

        </div>

        <div class={teamStyle.ga}>
          {/* <div>
          <Member image="/images/team/leads/t1_e.jpg" activeimage="/images/team/leads/t2_e.jpg" name="Pamela Hart" job="Speaker Coach"/>
          </div> */}
          {/* <div>
          <Member image="/images/team/leads/t1_e.jpg" activeimage="/images/team/leads/t2_e.jpg" name="Len Pierre" job="Speaker Coach"/>
          </div> */}
          <div onClick={clickHandle}>
          <Member image="/images/team/other/Ilhan-bw.jpg" activeimage="/images/team/other/Ilhan-bw.jpg" name="Ilhan Abdullahi" job="Master of Cerimonies" description={
            <div><p>Ilhan is a Somali-Canadian whose parents’ migration journey brought her to the unceded Coast Salish Lands at a very young age. Stemming from her family’s experience of navigating their new world as newcomers, Ilhan has been passionate in addressing the social and health inequities experienced by underserved communities with a focus on Black youth and newcomers. Through her work and research, she hopes to continue exploring how grassroots community organizing and the process of decolonization through a systems change lens can lead to the liberation of these communities. As an SFU alumni, her journey came full circle when she began teaching sessional at SFU and currently works as the Health Promotion Lab Manager at RADIUS SFU.</p>
            <p>Storytelling has been a huge passion for Ilhan as long as she could remember. From improv, to screenwriting, to hosting events and teaching- all roles provided the opportunity to be creative, engaging and humorous.  Inspired by her grandmother's wit, humour and engaging speaking abilities, she learned the craft of storytelling. She couldn't be more excited to be this year's TEDX SFU Master of Ceremonies and bring this energy to the space!</p></div>
          }/>
          </div>
          {/* <div>
          <Member image="/images/team/leads/t1_e.jpg" activeimage="/images/team/leads/t2_e.jpg" name="FIRSTNAME LASTNAME" job="Energizer"/>
          </div>
          <div>
          <Member image="/images/team/leads/t1_e.jpg" activeimage="/images/team/leads/t2_e.jpg" name="FIRSTNAME LASTNAME" job="Energizer"/>
          </div> */}
          {/* <div class={teamStyle.tony}>
          <Member image="/images/team/other/bernhard_bw.jpg" activeimage="/images/team/other/bernhard_bw.jpg" name="Bernard Riecke" job="License Holder"/>
          </div> */}
        </div>

      </div>
    </Layout>)
}