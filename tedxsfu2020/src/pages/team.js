import React from "react"
import Menu from "../components/menu"
import Member from "../components/team-member"

export default function Team() {
  return (<div>
      <Menu selected="Teams"/>
      <div>
        <div class="Header">
        </div>
        
        <div class="project-leads">
          <div>
            <h2>Project Leads</h2>
            <p>Project Leads</p>
          </div>

          <Member image="/t1_e.jpg" name="Tony Virdo" job="Project lead"/>
        </div>
        
        <div class="internal">
        </div>
        
        <div class="events">
        </div>
        
        <div class="content">
        </div>

        <div class="Marketing">
        </div>

        <div class="Creative">
        </div>

        <div class="Partners">
        </div>

      </div>
      </div>)
}