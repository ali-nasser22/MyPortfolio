// import React from 'react'
import { useState } from 'react';
import './qualification.css'
const Qualification = () => {
    const [toggleState,setToggleState]=useState(0);

    const toggleTab = (index)=>{
        setToggleState(index);
    };
  return (
   <section className="qualification section">
     <h2 className="section-title">Qualification</h2>
     <span className="section-subtitle">My personal journey</span>
    <div className="qualification-container container">
        <div className="qualification-tabs">
            <div className={toggleState === 0? "qualification-button button-flex qualification-active":"qualification-button button-flex"}
            onClick={()=>toggleTab(0)}>
                <i className="uil uil-graduation-cap qualification-icon"></i>Education
            </div>
            <div className={toggleState === 1? "qualification-button button-flex qualification-active":"qualification-button button-flex"}
            onClick={()=>toggleTab(1)}>
                <i className="uil uil-briefcase-alt qualification-icon"></i>Experience
            </div>
        </div>
        <div className="qualification-sections">
            <div className={toggleState === 0 ? "qualification-content qualification-content-active":'qualification-content'}>
                <div className="qualification-data">
                    <div>
                        <h3 className="qualification-title">BS in Computer Science</h3>
                        <span className="qualification-subtitle">Lebanese International University</span>
                        <div className="qualification-calender">
                            <i className="uil uil-calendar-alt"></i>  2022 -2025
                        </div>
                    </div>
                    <div>
                        <span className="qualification-rounder"></span>
                        <span className="qualification-line"></span>
                    </div>
                </div>
                <div className="qualification-data">
                    <div></div>
                    <div>
                        <span className="qualification-rounder"></span>
                        <span className="qualification-line"></span>
                    </div>
                    <div>
                        <h3 className="qualification-title">GPA</h3>
                        <span className="qualification-subtitle">3.9</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="qualification-sections">
    <div className={toggleState === 1 ? "qualification-content qualification-content-active":'qualification-content'}>
                <div className="qualification-data">
                    <div>
                        <h3 className="qualification-title">Backend developer</h3>
                        <span className="qualification-subtitle">XpertBot</span>
                        <div className="qualification-calender">
                            <i className="uil uil-calendar-alt"></i>  2024 - present
                        </div>
                    </div>
                    <div>
                        <span className="qualification-rounder"></span>
                        <span className="qualification-line"></span>
                    </div>
                </div>
                <div className="qualification-data">
                    <div></div>
                </div>
            </div>
        </div>
   </section>
  )
}

export default Qualification
