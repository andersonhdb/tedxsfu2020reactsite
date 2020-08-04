import React from "react"
//expected props:
//name: member name
//job: member job
//image: member image url

export default function Member(props){
    return(
    <div class="oc-member">
        <img src={props.image} alt={props.name}/>
        <h3>{props.name}</h3>
        <p>{props.job}</p>
    </div>)
}