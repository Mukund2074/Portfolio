import React from 'react'
import { Link } from 'react-router-dom'

export default function Portfolio({ ProjectRef }) {
  return (
    <div ref={ProjectRef}>
      <section className="section" style={{ backgroundColor : '#F2F2F2'}} id="portfolio">
      <p className="section-subtitle">What I Did ?</p>
      <h6 className="section-title mb-6">Portfolio</h6>
      {/* row */}


      <div style={{ display : 'flex' , justifyContent : 'space-between' , maxWidth : '100%' , flexDirection : 'row' , overflowX : 'scroll', gap : '30px' , padding : '30px'  }} >



        <div className="col-sm-4" style={{ border : '1px solid #d2d2d2' ,backgroundColor : '#d2d2d2' , marginLeft : '20px', overflow:'hidden' , maxHeight:'350px' , boxShadow : '0 0 20px #695aa6' ,  padding : '10px' , borderRadius : '20px'}}>
          <Link className="portfolio-card" to={'https://blazebox.netlify.app/'} >
            <img className="portfolio-card-img" alt='coming soon' src="assets/imgs/blazebox.png" />
            <span className="portfolio-card-overlay">
              <span className="portfolio-card-caption">
                <h4>BLAZEBOX</h4>
                <h4>VIDEO STREAMING PLATFORM</h4>
                <p className="font-weight-normal">Category: VIDEO STREAMING PLATFORM NEXT JS PROJECT <br />click to visit  </p>
              </span>
            </span>
          </Link>
          <span className="portfolio-card-overlay">
            <span className="portfolio-card-caption">
              <h4>click on image</h4>
            </span>
          </span>
        </div>


        <div className="col-sm-4" style={{ border : '1px solid #d2d2d2' ,backgroundColor : '#d2d2d2' , marginLeft : '20px', overflow:'hidden' , maxHeight:'350px' , boxShadow : '0 0 20px #695aa6' ,  padding : '10px' , borderRadius : '20px'}}>
          <Link to='https://sps-user.netlify.app/' className="portfolio-card" >
            <img src="/assets/imgs/spsuser.png" className="portfolio-card-img" alt="no thumbnail" />
            <span className="portfolio-card-overlay">
              <span className="portfolio-card-caption">

                <h4 className="font-weight-normal">SMART PARKING SYSTEM </h4>
                <h4>FULL STACK IOT PROJECT</h4>
                <p className="font-weight-normal">Category: PARKING USER <br />click to visit</p>

              </span>
            </span>
          </Link>
          <span className="portfolio-card-caption">
            <h4>click on image</h4>
          </span>
        </div>


        <div className="col-sm-4" style={{ border : '1px solid #d2d2d2' ,backgroundColor : '#d2d2d2' , marginLeft : '20px', overflow:'hidden' , maxHeight:'350px' , boxShadow : '0 0 20px #695aa6' ,  padding : '10px' , borderRadius : '20px'}}>
          <Link to='https://sps-admin-panel.netlify.app' className="portfolio-card" >
            <img src="/assets/imgs/spsadmin.png" className="portfolio-card-img" alt="no thumbnail" />
            <span className="portfolio-card-overlay">
              <span className="portfolio-card-caption">

                <h4 className="font-weight-normal">SMART PARKING SYSTEM ADMIN SIDE </h4>
                <h4>FULL STACK IOT PROJECT</h4>
                <p className="font-weight-normal">Category: PARKING MANAGER <br />click to visit</p>

              </span>
            </span>
          </Link>
          <span className="portfolio-card-caption">
            <h4>click on image</h4>
          </span>
        </div>

        <div className="col-sm-4" style={{ border : '1px solid #d2d2d2' ,backgroundColor : '#d2d2d2' , marginLeft : '20px', overflow:'hidden' , maxHeight:'350px' , boxShadow : '0 0 20px #695aa6' ,  padding : '10px' , borderRadius : '20px'}}>
          <Link to='https://game-center-by-mukund.netlify.app/' className="portfolio-card" >
            <img src="assets/imgs/gamecenter.png" className="portfolio-card-img" alt="no thumbnail" />
            <span className="portfolio-card-overlay">
              <span className="portfolio-card-caption">

                <h4 className="font-weight-normal">GAME CENTER </h4>
                <h4>MINI GAMES BASED ON JS</h4>
                <p className="font-weight-normal">Category: REACT WEBSITE <br />click to visit</p>

              </span>
            </span>
          </Link>
          <span className="portfolio-card-caption">
            <h4>click on image</h4>
          </span>
        </div>


        <div className="col-sm-4" style={{ border : '1px solid #d2d2d2' ,backgroundColor : '#d2d2d2' , marginLeft : '20px', overflow:'hidden' , maxHeight:'350px' , boxShadow : '0 0 20px #695aa6' ,  padding : '10px' , borderRadius : '20px'}}>
          <Link to='https://todobymuku.netlify.app/' className="portfolio-card" >
            <img src="assets/imgs/todo.png" className="portfolio-card-img" alt="no thumbnail" />
            <span className="portfolio-card-overlay">
              <span className="portfolio-card-caption">

                <h4 className="font-weight-normal">TODO WEB PROJECT </h4>
                <h4>REACT HOOKS , RESPONSIVE TAILWIND CSS</h4>
                <p className="font-weight-normal">Category: REACT WEBSITE <br />click to visit</p>

              </span>
            </span>
          </Link>
          <span className="portfolio-card-caption">
            <h4>click on image</h4>
          </span>
        </div>


        <div className="col-sm-4" style={{ border : '1px solid #d2d2d2' ,backgroundColor : '#d2d2d2' , marginLeft : '20px', overflow:'hidden' , maxHeight:'350px' , boxShadow : '0 0 20px #695aa6' ,  padding : '10px' , borderRadius : '20px'}}>
          <Link className="portfolio-card" to='https://dailyburstnews.netlify.app/'>
            <img className="portfolio-card-img" src="assets/imgs/dailyburst.png" alt="no thumbnail" />
            <span className="portfolio-card-overlay">
              <span className="portfolio-card-caption">
                <h4>DAILYBURST</h4>
                <h4>LIVE API PROJECT</h4>
                <p className="font-weight-normal">Category: Live API Based Website <br />click to visit  </p>
              </span>
            </span>
          </Link>
          <span className="portfolio-card-overlay">
            <span className="portfolio-card-caption">
              <h4>click on image</h4>
            </span>
          </span>
        </div>

        <div className="col-sm-4" style={{ border : '1px solid #d2d2d2' ,backgroundColor : '#d2d2d2' , marginLeft : '20px', overflow:'hidden' , maxHeight:'350px' , boxShadow : '0 0 20px #695aa6' ,  padding : '10px' , borderRadius : '20px'}}>
          <Link className="portfolio-card" to={`https://github.com/Mukund2074/dailyburstApp`}>
            <img className="portfolio-card-img" style={{ height: '350px', width: '350px' }} src="https://img.freepik.com/free-vector/modern-coming-soon-poster-with-stay-tuned-message_1017-39310.jpg" alt="Comming soon" />
            <span className="portfolio-card-overlay">
              <span className="portfolio-card-caption">
                <h4>DAILYBURST APP MODEL</h4>
                <h4>LIVE API PROJECT</h4>
                <p className="font-weight-normal">Category: NEWS SURFING APP BASED ON DAILY BURST WEBSITE <br />click to visit  </p>
              </span>
            </span>
          </Link>
          <span className="portfolio-card-overlay">
            <span className="portfolio-card-caption">
              <h4>click on image</h4>
            </span>
          </span>
        </div>


        <div className="col-sm-4" style={{ border : '1px solid #d2d2d2' ,backgroundColor : '#d2d2d2' , marginLeft : '20px', overflow:'hidden' , maxHeight:'350px' , boxShadow : '0 0 20px #695aa6' ,  padding : '10px' , borderRadius : '20px'}}>
          <Link className="portfolio-card" to='https://portfoliotemplatemuku.netlify.app/'>
            <img className="portfolio-card-img" style={{ height: '350px', width: '350px' }} src="https://static.vecteezy.com/system/resources/previews/004/467/266/non_2x/portfolio-sketch-neon-icon-simple-thin-line-outline-of-education-icons-for-ui-and-ux-website-or-mobile-application-isolated-on-brick-wall-vector.jpg" alt="no thumbnail" />
            <span className="portfolio-card-overlay">
              <span className="portfolio-card-caption">
                <h4>PORTFOLIO</h4>
                <h4>SELF MADE DESIGNS</h4>
                <p className="font-weight-normal">Category: Portfolio template <br />click to visit  </p>
              </span>
            </span>
          </Link>
          <span className="portfolio-card-overlay">
            <span className="portfolio-card-caption">
              <h4>click on image</h4>
            </span>
          </span>
        </div>

        <div className="col-sm-4" style={{ border : '1px solid #d2d2d2' ,backgroundColor : '#d2d2d2' , marginLeft : '20px', overflow:'hidden' , maxHeight:'350px' , boxShadow : '0 0 20px #695aa6' ,  padding : '10px' , borderRadius : '20px'}}>
          <Link className="portfolio-card" >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXlCUnNO6Xap2bDv6UKzGJtPNvsZdyGLYtEA&s" className="portfolio-card-img" alt="portfolio" />
            <span className="portfolio-card-overlay">
              <span className="portfolio-card-caption">

                <h4 className="font-weight-normal">ASTUTE INFOSOLUTION ADMIN PANNEL </h4>
                <h4>REACT JS PROJECT</h4>
                <p className="font-weight-normal">Category: ADMIN PANNEL <br />NOT AVAILABLE</p>

              </span>
            </span>
          </Link>
          <span className="portfolio-card-caption">
            <h4>click on image</h4>
          </span>
        </div>


        <div className="col-sm-4" style={{ border : '1px solid #d2d2d2' ,backgroundColor : '#d2d2d2' , marginLeft : '20px', overflow:'hidden' , maxHeight:'350px' , boxShadow : '0 0 20px #695aa6' ,  padding : '10px' , borderRadius : '20px'}}>
          <Link className="portfolio-card" >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXlCUnNO6Xap2bDv6UKzGJtPNvsZdyGLYtEA&s" className="portfolio-card-img" alt="portfolio" />
            <span className="portfolio-card-overlay">
              <span className="portfolio-card-caption">

                <h4 className="font-weight-normal">CANNY CASTER <br />AT  ASTUTE INFOSOLUTION </h4>
                <p className="font-weight-normal">Category: PROJECT ON TAILWIND & REACT <br />NOT AVAILABLE</p>

              </span>
            </span>
          </Link>
          <span className="portfolio-card-caption">
            <h4>click on image</h4>
          </span>
        </div>



      </div>
    </section>
    </div>
  )
}
