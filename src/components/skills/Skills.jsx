// import React from 'react'
import './skills.css'
import Frontend from "./Frontend"
import Backend from './Backend'
const Skills = () => {
  return (
   <section className="skills section" id="skills">
     <h2 className="section-title">Skills</h2>
     <span className="section-subtitle">My Technical Level</span>
     <div className="skills-container container grid-one">
        <Frontend/>
        <Backend/>
     </div>
   </section>
  )
}

export default Skills
