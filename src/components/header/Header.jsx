import  { useState } from 'react';
import './Header.css'

const Header = () => {
    window.addEventListener('scroll', ()=>{
        const header =document.querySelector(".header");
        if(window.scrollY >= 80)
            header.classList.add("scroll-header");
        else
        header.classList.remove("scroll-header");
    })
    const [showMenu, setShowMenu] = useState(false);
    const [activeNav,setActiveNav] = useState("#home");
    
  return (
   <header className='header w-[100%] fixed top-0 left-0 z-[100] bg-body md:top-auto md bottom-0'>
    <nav className='nav md:h-12 container lg:mx-6  flex justify-between items-center gap-x-4 xsm:mx-4'>
    <a href="index.html" className="nav-logo text-title font-medium">Ali</a>

    <div className={`nav-menu lg:mr-12 md:fixed  md:left-0 md:w-[100%] md:bg-body md:py-6 md:px-16 md:shadow-one md:rounded-t-3xl md:rounded-b-none md:duration-300 xsm:pt-8 xsm:pr-1 xsm:pb-16 ${showMenu ? 'show-menu' : 'hide-menu'}`}>
        <ul className="nav-list grid-one flex gap-x-8 md:grid md:grid-cols-3 md:gap-8 xsm:gap-x-0">
            <li className="nav-item"><a href="#home" onClick={()=>setActiveNav('#home')} className={activeNav === '#home' ? "nav-link active-link" : 'nav-link'}><i className="uil uil-estate nav-icon md:block md:text-[1.2rem]"></i>Home</a></li>
            <li className="nav-item"><a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? "nav-link active-link" : 'nav-link'}><i className="uil uil-user nav-icon md:block md:text-[1.2rem]"></i>About</a></li>
            <li className="nav-item"><a href="#skills" onClick={()=>setActiveNav('#skills')} className={activeNav === '#skills' ? "nav-link active-link" : 'nav-link'}><i className="uil uil-file nav-icon md:block md:text-[1.2rem]"></i>Skills</a></li>
            <li className="nav-item"><a href="#services" onClick={()=>setActiveNav('#services')} className={activeNav === '#services' ? "nav-link active-link" : 'nav-link'}><i className="uil uil-briefcase-alt nav-icon md:block md:text-[1.2rem]"></i>Services</a></li>
            <li className="nav-item"><a href="#portfolio" onClick={()=>setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? "nav-link active-link" : 'nav-link'}><i className="uil uil-scenery nav-icon md:block md:text-[1.2rem]"></i>Portfolio</a></li>
            <li className="nav-item"><a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? "nav-link active-link" : 'nav-link'}><i className="uil uil-message nav-icon md:block md:text-[1.2rem]"></i>Contact</a></li>
        </ul>
        <i className="uil uil-times nav-close hidden md:block md:absolute md:right-[1.3rem] md:bottom-2 md:text-2xl md:cursor-pointer md:text-title hover:text-dark-title" onClick={() => setShowMenu(!showMenu)}></i>
    </div>
    <div id='toggle' className="nav-toggle text-title font-medium hidden md:block md:mr-12 text-[1.1rem] cursor-pointer" onClick={() => setShowMenu(!showMenu)}>
     <i className="uil uil-apps "></i>
    </div>
    </nav>
   </header>
  )
}

export default Header
