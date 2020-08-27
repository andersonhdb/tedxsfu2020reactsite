import React from "react"
import teamMemberStyle from "./team-member.module.css"
//import Img from "gatsby-image"
//expected props:
//name: member name
//job: member job
//image: member image url
//activeimage: member colored image url

export default function Member(props){
    return(
    <div class={teamMemberStyle.oc_member}>
        <img src={props.image} 
        onMouseOver={e=>(e.currentTarget.src= props.activeimage)}
        onMouseOut ={e=>(e.currentTarget.src=props.image)}  
        alt={props.name}/>
        <h3>{props.name}</h3>
        <p>{props.job}</p>
    </div>)
}