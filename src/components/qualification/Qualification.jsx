// import React from 'react'
import './qualification.css'
const Qualification = () => {
  return (
   <section className="qualification section">
     <h2 className="section-title">Qualification</h2>
     <span className="section-subtitle">My personal journey</span>
    <div className="qualification-container container">
        <div className="qualification-tabs">
            <div className="qualification-button button-flex qualification-active">
                <i className="uil uil-graduation-cap qualification-icon"></i>Education
            </div>
            <div className="qualification-button button-flex hidden">
                <i className="uil uil-briefcase-alt qualification-icon"></i>Experience
            </div>
        </div>
        <div className="qualification-sections">
            <div className="qualification-content qualification-content-active">
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

   </section>
  )
}

export default Qualification
