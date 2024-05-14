import React, { useRef } from 'react';
import Header from './Header';
import Footer from './Footer';
import Pageheader from './Pageheader';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Workwith from './Workwith';
import Contact from './Contact';

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
    <div>
      <Header scrollToAbout={scrollToAbout} scrollToProject={scrollToProject} scrollToContact={scrollToContact} scrollToHome={scrollToHome} scrollToService={scrollToService}/>
      <Pageheader HomeRef={HomeRef}  />
      <About aboutRef={aboutRef} />
      <Services ServiceRef={ServiceRef} />
      <Portfolio ProjectRef={ProjectRef}/>
      <Workwith />
      <Contact  ContactRef={ContactRef}/>
      <Footer />
    </div>
  );
}
