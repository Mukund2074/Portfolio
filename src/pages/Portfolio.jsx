import React from 'react'
import { Link } from 'react-router-dom'

export default function Portfolio({ ProjectRef }) {


  const links = [
    {
      name: "BLAZEBOX",
      subname: "VIDEO STREAMING PLATFORM",
      to: "https://blazebox.netlify.app/",
      img: "assets/imgs/blazebox.png",
      category: "VIDEO STREAMING PLATFORM NEXT JS PROJECT"
    },
    {
      name: "SMART PARKING SYSTEM",
      subname: "FULL STACK IOT PROJECT",
      to: "https://sps-user.netlify.app/",
      img: "/assets/imgs/spsuser.png",
      category: "PARKING USER"
    },
    {
      name: "SMART PARKING SYSTEM ADMIN SIDE",
      subname: "FULL STACK IOT PROJECT",
      to: "https://sps-admin-panel.netlify.app",
      img: "/assets/imgs/spsadmin.png",
      category: "PARKING MANAGER"
    },
    {
      name: "GAME CENTER",
      subname: "MINI GAMES BASED ON JS",
      to: "https://game-center-by-mukund.netlify.app/",
      img: "assets/imgs/gamecenter.png",
      category: "REACT WEBSITE"
    },
    {
      name: "TODO WEB PROJECT",
      subname: "REACT HOOKS , RESPONSIVE TAILWIND CSS",
      to: "https://todobymuku.netlify.app/",
      img: "assets/imgs/todo.png",
      category: "REACT WEBSITE"
    },
    {
      name: "DAILYBURST",
      subname: "LIVE API PROJECT",
      to: "https://dailyburstnews.netlify.app/",
      img: "assets/imgs/dailyburst.png",
      category: "Live API Based Website"
    },
    {
      name: "DAILYBURST APP MODEL",
      subname: "LIVE API PROJECT",
      to: "https://github.com/Mukund2074/dailyburstApp",
      img: "https://img.freepik.com/free-vector/modern-coming-soon-poster-with-stay-tuned-message_1017-39310.jpg",
      category: "NEWS SURFING APP BASED ON DAILY BURST WEBSITE"
    },
    {
      name: "PORTFOLIO",
      subname: "SELF MADE DESIGNS",
      to: "https://portfoliotemplatemuku.netlify.app/",
      img: "https://static.vecteezy.com/system/resources/previews/004/467/266/non_2x/portfolio-sketch-neon-icon-simple-thin-line-outline-of-education-icons-for-ui-and-ux-website-or-mobile-application-isolated-on-brick-wall-vector.jpg",
      category: "Portfolio template"
    },
    {
      name: "ASTUTE INFOSOLUTION ADMIN PANNEL",
      subname: "REACT JS PROJECT",
      to: "#",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXlCUnNO6Xap2bDv6UKzGJtPNvsZdyGLYtEA&s",
      category: "ADMIN PANNEL"
    },
    {
      name: "CANNY CASTER AT ASTUTE INFOSOLUTION",
      subname: "PROJECT ON TAILWIND & REACT",
      to: "#",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXlCUnNO6Xap2bDv6UKzGJtPNvsZdyGLYtEA&s",
      category: "PROJECT ON TAILWIND & REACT"
    }
  ];



  return (
    <div ref={ProjectRef}>
      <section className="section" style={{ backgroundColor: '#F2F2F2' }} id="portfolio">
        <p className="section-subtitle">What I Did ?</p>
        <h6 className="section-title mb-6">Portfolio</h6>


        <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '100%', flexDirection: 'row', overflowX: 'scroll', gap: '30px', padding: '30px' }} >

          {links.map((link, index) => (
            <div key={index} className="col-sm-12 col-md-4 col-lg-4" style={{
              minWidth: '250px',
              backgroundColor: '#d2d2d2',
              overflow: 'hidden',
              padding: '10px',
              maxHeight: '450px',
              boxShadow: '0 0 20px #695aa6',
            }}>
              <Link to={link.to} className="portfolio-card" style={{  maxHeight: '200px' , overflow: 'hidden'}}>
                <img src={link.img} className='w-100 ' alt={link.name} />
                <span className="portfolio-card-overlay">
                  <span className="portfolio-card-caption">
                    <h4>{link.name}</h4>
                    <h4>{link.subname}</h4>
                    <p className="font-weight-normal">Category: {link.category} <br /> click to visit</p>
                  </span>
                </span>
              </Link>
              <span className="portfolio-card-caption">
                <h4>{link.name}</h4>
                <h4>{link.subname}</h4>
                <p className="font-weight-normal">Category: {link.category} </p>
              </span>
            </div>
          ))}

        </div>
      </section>
    </div>
  )
}
