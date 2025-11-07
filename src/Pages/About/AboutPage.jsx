import useDocumentTitle from '../../hooks/useDocumentTitle';
import AboutSpotlight from '../../components/AboutPage/AboutSpotlight';
import AboutIntro from '../../components/AboutPage/AboutIntro';
import AboutJoinUs from '../../components/AboutPage/AboutJoinUs';
import AboutVissionMission from '../../components/AboutPage/AboutVissionMission';

import './about-us.css';
import OurPromise from '../../components/AboutPage/OurPromise';


const About = () => {
  // >>>>>>>>>>>>>>>>> Change Document Title Dynamically
  useDocumentTitle('About VoltCart | Redefining Everyday Tech Essentials');

  return (

    <div className="lg:w-full flex flex-col items-center">
      <AboutSpotlight />

      <AboutIntro />

      <AboutJoinUs />

      <AboutVissionMission />

      <OurPromise />

    </div>

  )
}

export default About