// import React from 'react';
// import Banner from '../components/Home/Banner.jsx';
// import Hero from '../components/Home/Hero.jsx';
// import Features from '../components/Home/Features.jsx';
// import Testimonial from '../components/Home/Testimonial.jsx';
// import CallToAction from '../components/Home/CallToAction.jsx';
// import Footer from '../components/Home/Footer.jsx';

// const Home=()=>{
//     return(
//         <div>
//             {/* <Banner/> */}
//             <Hero/>
//             <Features/>
//             <Testimonial/>
//             <CallToAction/>
//             <Footer/>
//         </div>
//     )
// }

// export default Home;





import React from 'react';
import Hero from '../components/Home/Hero.jsx';
import Features from '../components/Home/Features.jsx';
import Footer from '../components/Home/Footer.jsx';

const Home = () => {
  return (
    <main className="w-full">
      <Hero />
      <Features />
      <Footer />
    </main>
  );
};

export default Home;