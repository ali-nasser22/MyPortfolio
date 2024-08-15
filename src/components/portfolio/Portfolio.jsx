// import React from 'react'
import './portfolio.css'
import Works from './Works'
const Portfolio = () => {
  return (
    <section className="portfolio section" id='portfolio'>
        <h2 className="section-title">Portfolio</h2>
        <span className="section-subtitle">Most recent works</span>
        <Works/>
    </section>
  )
}

export default Portfolio
