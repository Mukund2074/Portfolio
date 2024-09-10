import React from 'react'

export default function Pageheader({ HomeRef }) {
  return (
    <div ref={HomeRef}>  <header id="home" className="header">
      <div className="overlay" />
      <div className="header-content container" >
        <h1 className="header-title">
          <span className="up">HI!</span>
          <span className="down">I am Mukund Hadiya</span>
        </h1>
        <p className="header-subtitle">FULL STACK WEB DEVELOPOER </p>

        <p className="btn btn-primary">Expertise in MERN STACK </p>
      </div>
    </header>
    </div>
  )
}
