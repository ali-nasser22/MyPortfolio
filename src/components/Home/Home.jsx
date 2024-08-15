// import React from 'react'
import './home.css';
import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';
const Home = () => {
  return (
    <section className="home section" id="home">
        <div className="home-container container grid-one">
            <div className="home-content grid-one">
                <Social/>

                <div className="home-img">

                </div>
                <Data/>
            </div>
            <ScrollDown/>
        </div>
    </section>
  )
}

export default Home
