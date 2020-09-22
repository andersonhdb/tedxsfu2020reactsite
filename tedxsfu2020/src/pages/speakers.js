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
    
    return(<Layout title="Speakers">
        <div class={SpeakerStyle.main}>
            <h2>MEET THE SPEAKERS</h2>
            <div class={SpeakerStyle.speakersLayout}>
            {SpeakerData.map((speaker,i) =>(
                <div class={SpeakerStyle.speaker}>
                    <Member key={speaker+i} name={speaker.name} job={speaker.job} image={speaker.image} activeimage={speaker.image} description={speaker.description}/>
                </div>
                ))}
            </div>
        </div>
    </Layout>)
}