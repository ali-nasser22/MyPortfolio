// import React from 'react'
import './footer.css'
const Footer = () => {
    let year = new Date();
  return (
   <footer className="footer">
    <div className="footer-container container">
        <h1 className="footer-title">Ali</h1>
        <ul className="footer-list">
            <li>
                <a href="#about" className="footer-link">About</a>
            </li>
            <li>
                <a href="#skills" className="footer-link">Skills</a>
            </li>
            <li>
                <a href="#portfolio" className="footer-link">Projects</a>
            </li>
        </ul>
        <div className="footer-social">
        <a href="https://www.linkedin.com/in/ali-nasser-213b87281/" className="footer-social-link" target="_blank">
        <i className="uil uil-linkedin-alt"></i>
      </a>
      <a href="https://www.facebook.com/share/h4YFS78e1xeY4HTV/?mibextid=qi2Omg" className="footer-social-link" target="_blank">
        <i className="uil uil-facebook-f"></i>
      </a>
      <a href="https://github.com/ali-nasser22" className="footer-social-link" target="_blank">
        <i className="uil uil-github-alt"></i>
      </a>
        </div>
        <span className="footer-copy">
            {year.getFullYear()} &#169; Ali Nasser Temraz. <span className='mx-1'>All Rights Reserved</span> 
        </span>
    </div>
   </footer>
  )
}

export default Footer
