// import React from 'react'
import { useState } from 'react'
import './services.css'
const Services = () => {
    const [toggleState,setToggleState]=useState(0);

    const toggleTab = (index)=>{
        setToggleState(index);
    }
  return (
    <section className="services section" id="services">
         <h2 className="section-title">Services</h2>
         <span className="section-subtitle">What i offer</span>

         <div className="services-container container grid-one">
            <div className="services-content">
                <div>
                <i className="uil uil-arrow services-icon"></i>
                <h3 className="services-title">Frontend <br/> Developer</h3>
                </div>
                <span className="services-button" onClick={()=>toggleTab(1)}>View More <i className="uil uil-arrow-right services-button-icon"></i></span>
                <div className={toggleState === 1 ? 'services_modal active-modal':"services_modal"}>
                    <div className="services-modal-content">
                        <i className="uil uil-times services-modal-close" onClick={()=>toggleTab(0)}></i>
                        <h3 className="services-modal-title">Frontend Developer</h3>
                        <p className="services-modal-description">Services provided with quality and dedication to clients and companies.</p>
                        <ul className="services-modal-services grid-one">
                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">Website Design and Development.</p>
                            </li>
                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">Responsive Design.</p>
                            </li>
                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">UI / Ux integration.</p>
                            </li>
                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">Cross-Browser Compatibility.</p>
                            </li>
                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">Bug Fixing and Maintenance.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="services-content">
                <div>
                <i className="uil uil-edit services-icon"></i>
                <h3 className="services-title">UI/Ux <br/>Designer</h3>
                </div>
                <span className="services-button" onClick={()=>toggleTab(2)}>View More <i className="uil uil-arrow-right services-button-icon"></i></span>
                <div className={toggleState === 2 ? 'services_modal active-modal':"services_modal"}>
                    <div className="services-modal-content">
                        <i className="uil uil-times services-modal-close" onClick={()=>toggleTab(0)}></i>
                        <h3 className="services-modal-title">UI/UX</h3>
                        <p className="services-modal-description">Services provided with quality and dedication to clients and companies.</p>
                        <ul className="services-modal-services grid-one">
                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">Persona Development.</p>
                            </li>
                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">Visual Design.</p>
                            </li>
                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">Accessibility Design.</p>
                            </li>
                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">Feedback and Iteration.</p>
                            </li>
                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">Collaboration with Developers.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="services-content">
                <div>
                <i className="uil uil-brackets-curly services-icon"></i>
                <h3 className="services-title">Backend <br/> Developer</h3>
                </div>
                <span className="services-button" onClick={()=>toggleTab(3)}>View More <i className="uil uil-arrow-right services-button-icon"></i></span>
                <div className={toggleState === 3 ? 'services_modal active-modal':"services_modal"}>
                    <div className="services-modal-content">
                        <i className="uil uil-times services-modal-close" onClick={()=>toggleTab(0)}></i>
                        <h3 className="services-modal-title">Backend Developer</h3>
                        <p className="services-modal-description">Services provided with quality and dedication to clients and companies.</p>
                        <ul className="services-modal-services grid-one">
                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">Server-Side Logic.</p>
                            </li>
                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">Database Design and Management.</p>
                            </li>
                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">Integration.</p>
                            </li>
                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">Authentication and Authorization.</p>
                            </li>
                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">Performance Optimization.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
         </div>
    </section>
  )
}

export default Services
