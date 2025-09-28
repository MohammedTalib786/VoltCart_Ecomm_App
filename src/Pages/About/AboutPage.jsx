import './about-us.css';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import AboutSpotlight from '../../components/AboutPage/AboutSpotlight';
import AboutIntro from '../../components/AboutPage/AboutIntro';
import AboutJoinUs from '../../components/AboutPage/AboutJoinUs';
import AboutVissionMission from '../../components/AboutPage/AboutVissionMission';

const About = () => {
  // >>>>>>>>>>>>>>>>> Change Document Title Dynamically
  useDocumentTitle('About Us - VoltCart');

  return (

    <div className="lg:w-[100%] flex flex-col items-center">
      <AboutSpotlight />

      <AboutIntro />

      <AboutJoinUs />

      <AboutVissionMission />

    </div>

  )
}

export default About