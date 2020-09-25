import React, {useState} from "react"
import Layout from "../components/layout"
import Member from "../components/team-member"
import SpeakerStyle from "./speakers2.module.css"

import SpeakerData from "../data/speaker-data"



export default function Speakers2(props){
    const [state, setState] = useState({
        lastClicked: null,
      })
    
    const {lastClicked} = state;

    const clickHandle = (e)=>{
        if(lastClicked !== null && lastClicked!== e.currentTarget){
            lastClicked.children[0].click();
        }
    
        if(lastClicked=== e.currentTarget){
          return setState({
            ...state,
            lastClicked: null
          })
        }
    
        setState({
          ...state,
          lastClicked: e.currentTarget
        })
      }
    
    return(<Layout title="Speakers" index={4}>
        <div class={SpeakerStyle.main}>
            <h2>MEET THE SPEAKERS</h2>
            <div class={SpeakerStyle.speakersLayout}>
            {SpeakerData.map((speaker,i) =>(
                <div class={SpeakerStyle.speaker} onClick={clickHandle}>
                    <Member key={speaker+i} name={speaker.name} job={speaker.job} image={speaker.image} activeimage={speaker.image} description={speaker.description}/>
                </div>
                ))}
            </div>
        </div>
    </Layout>)
}