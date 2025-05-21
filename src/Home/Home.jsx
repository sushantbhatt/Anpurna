// import React from 'react';
// import HeroSection from './HeroSection';
// // import SlideShow from './SlideShow';
// import AboutSection from './AboutSection';
// import HomeServices from './HomeServices';
// import NewLaunch from './NewLaunch';
// import RecentProjects from './RecentProjects';
// import CounterSection from './CounterSection';
// // import TrustSection from './TrustSection';
//  import BlogSlider from './BlogSlider';
// import ClientTestimonials from './ClientTestimonials';
// import Customer from './Customer';
// import Whatsapp from './Whatsapp';

// function Home() {
//   return (
//     <>
//       <HeroSection />
     
//       {/* <SlideShow/> */}
//       <AboutSection />
//       <CounterSection />
//       <HomeServices />
//       <NewLaunch />
//       <RecentProjects />
//       {/* <TrustSection /> */}
//       { <BlogSlider /> }
//       <ClientTestimonials />
//       <Customer/>
//     </>
//   );
// }

// export default Home;











// src/Home/Home.js
import React from 'react';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import HomeServices from './HomeServices';
import NewLaunch from './NewLaunch';
import RecentProjects from './RecentProjects';
import ProductCatalog from './ProductCatalog'
import CounterSection from './CounterSection';
import BlogSlider from './BlogSlider';
import ClientTestimonials from './ClientTestimonials';
import Customer from './Customer';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.state]);

  return (
    <>
      <div id="hero-section">
        <HeroSection />
      </div>
      
      <div id="about-section">
        <AboutSection />
      </div>
      
      {/* <CounterSection /> */}


     < ProductCatalog/>



      
      <div id="services-section">
        <HomeServices />
      </div>
      
      <NewLaunch />
      
      <div id="projects-section">
        <RecentProjects />
      </div>
      
      <div id="blog-section">
        <BlogSlider />
      </div>
      
      <div id="testimonials-section">
        <ClientTestimonials />
      </div>
      
      <Customer/>
    </>
  );
}

export default Home;