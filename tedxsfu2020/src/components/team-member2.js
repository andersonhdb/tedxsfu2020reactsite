import React, {useState} from "react"
import teamMemberStyle from "./team-member.module.css"
import Img from "gatsby-image"
//import { useStaticQuery } from "gatsby"
//expected props:
//name: member name
//job: member job
//image: member image url
//activeimage: member colored image url

export default function Member(props){
    const [state, setState] = useState({
        selected: false,
        currentImage: <Img fixed ={props.image} alt={props.name}/> 
    })

    const {selected, currentImage} = state;
    const idleImage = <Img fixed ={props.image} alt={props.name}/>
    const selectedImage = <Img fixed ={props.activeimage} alt={props.name}/>
    
    const imageSelected = ()=>{
        setState({
            ...state,
            selected: props.selected,
            currentImage: selected? selectedImage : idleImage})
    }
    return(
    <div class={teamMemberStyle.oc_member} 
    onMouseOver={()=>{setState({
        ...state,
        currentImage: selected? idleImage: selectedImage 
    })}}
    onMouseOut ={()=>{setState({
        ...state,
        currentImage: selected?  selectedImage : idleImage
    })}}>
        {currentImage}
        <h3>{props.name}</h3>
        <p>{props.job}</p>
    </div>)
}