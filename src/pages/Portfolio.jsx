import React from 'react'

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
      name: "ANIMATION PORTFOLIO",
      subname: "Portfolio Project in Animation",
      to: "https://pratik-mehta-portfolio.netlify.app/",
      img: '/assets/imgs/Portfolio-Pratik.png',
      category: "Portfolio Project"

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
    <div style={{
      backgroundImage: 'linear-gradient(to top, #fff 0%, rgba(105, 90, 166, 0.35) 99%, rgba(105, 90, 166, 0.5) 100%)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '50px',
    }} ref={ProjectRef}>
      <section className="section" id="portfolio">
        <p className="section-subtitle">What I Did ?</p>
        <h6 className="section-title mb-6">Portfolio</h6>


        <div className="row">
          {links.map((link, index) => (
            <div key={index} className="col-sm-6 col-md-4 col-lg-3 mb-4">
              <div
                className="card shadow-sm h-100"
                style={{
                  transition: 'all 0.3s ease',
                  borderRadius: '10px',
                  position: 'relative',
                }}
              >
                <img
                  src={link.img}
                  alt={link.name}
                  className="card-img-top"
                  style={{
                    objectFit: 'cover',
                    height: '200px',
                    borderTopLeftRadius: '10px',
                    borderTopRightRadius: '10px',
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">{link.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{link.subname}</h6>
                  <p className="card-text"> {link.category}</p>

                  <a
                    href={link.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{
                      fontWeight: '600',
                      padding: '10px 20px',
                      borderRadius: '5px',
                    }}
                  >
                    Click to Visit
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .card:hover {
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2), 0 4px 30px rgba(105, 90, 166, 0.6);
          transform: translateY(-5px);
          filter: brightness(1.05);
        }

        .card {
          transition: all 0.3s ease;
        }
      `}</style>
    </div>
  )
}
