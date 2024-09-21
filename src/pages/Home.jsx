import React, { useRef } from 'react';
import Header from './Header';
import Footer from './Footer';
import Pageheader from './Pageheader';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Workwith from './Workwith';
import Contact from './Contact';
import { Helmet } from 'react-helmet';
export default function Home() {
  const aboutRef = useRef(null);
  const ProjectRef = useRef(null);
  const ContactRef = useRef(null);
  const HomeRef = useRef(null);
  const ServiceRef = useRef(null);

  function scrollToAbout() {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  function scrollToProject() {
    ProjectRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  function scrollToContact() {
    ContactRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  function scrollToHome() {
    HomeRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  function scrollToService() {
    ServiceRef.current.scrollIntoView({ behavior: 'smooth' });
  }
 

  return (
    <React.Fragment>
      <Helmet>
        <title>Mukund Hadiya Portfolio</title>
        <meta name="description" content="Mukund Hadiya Portfolio" />
        <meta name="keywords" content="Mukund Hadiya, Portfolio, MERN Stack Developer , NEXT JS , IOT , REACT NATIVE" />
        <meta name="author" content="Mukund Hadiya" />
        <link rel="canonical" href="https://mukundhadiya.netlify.app" />
      </Helmet>
      <Header scrollToAbout={scrollToAbout} scrollToProject={scrollToProject} scrollToContact={scrollToContact} scrollToHome={scrollToHome} scrollToService={scrollToService}/>
      <Pageheader HomeRef={HomeRef}  />
      <About aboutRef={aboutRef} />
      <Services ServiceRef={ServiceRef} />
      <Portfolio ProjectRef={ProjectRef}/>
      <Workwith />
      <Contact  ContactRef={ContactRef}/>
      <Footer />
    </React.Fragment>
  );
}
