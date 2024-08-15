import Header from "./components/header/Header"
import Home from "./components/Home/Home"
import About from "./components/about/About"
import Skills from "./components/skills/Skills"
import Services from "./components/services/Services"
import Qualification from "./components/qualification/Qualification"
import Portfolio from "./components/portfolio/Portfolio"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import Scrollup from "./components/scrollup/Scrollup"

function App() {


  return (
    <>
    <Header/>
    <main className="main">
      <Home/>
      <About/>
      <Skills/>
      <Services/>
      <Qualification/>
      <Portfolio/>
      <Contact/>
    </main>
    <Footer/>
    <Scrollup/>
   </>
  )
}

export default App
