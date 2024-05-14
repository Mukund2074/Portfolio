import React from 'react';
import { Link } from 'react-router-dom';

export default function Header( {scrollToProject ,  scrollToAbout , scrollToContact , scrollToHome , scrollToService } ) {
  function toggleNav() {
    var navToggle = document.getElementById('nav-toggle');
    var navMenu = document.querySelector('ul.nav');
    
    if (navToggle && navMenu) {
      navToggle.classList.toggle('is-active');
      navMenu.classList.toggle('show');
    }
  }

  return (
    <nav className="custom-navbar" data-spy="affix" data-offset-top={20}>
      <div className="container">
        <Link to='/' className="logo">Mukund Hadiya</Link>
        <ul className="nav">
          <li className="item">
            <Link className="link" onClick={scrollToHome}>Home</Link>
          </li>
          <li className="item">
            <Link className="link" onClick={scrollToAbout}>About</Link>
          </li>
          <li className="item">
            <Link className="link" onClick={scrollToService}>Service</Link>
          </li>
          <li className="item">
            <Link className="link" onClick={scrollToProject}>Project</Link>
          </li>
          <li className="item">
            <Link className="link" onClick={scrollToContact}>Contact</Link>
          </li>
        </ul>
        <span id="nav-toggle" onClick={toggleNav} className="hamburger hamburger--elastic">
          <div className="hamburger-box">
            <div className="hamburger-inner" />
          </div>
        </span>
      </div>
    </nav>
  );
}
