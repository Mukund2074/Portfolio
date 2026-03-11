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
        <p className="header-subtitle">PROJECT MANAGER & FULL STACK ENGINEER</p>

        <p className="btn btn-primary">MERN Stack · API & IoT · React · Node · NextJS</p>
      </div>
    </header>
    </div>
  )
}
