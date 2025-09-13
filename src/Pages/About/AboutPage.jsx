import React, { useRef } from 'react'

import { motion, useInView } from "framer-motion";
import { useInViewMotion } from '../../hooks/useInViewMotion'; // update this path
import { useInViewMotionFades } from '../../hooks/useInViewMotionFades'; // update this path
import NumberCounter from '../../components/AnimatedNumber/NumberCounter'
import './about-us.css';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import AboutSpotlight from '../../components/AboutPage/AboutSpotlight';
import AboutIntro from '../../components/AboutPage/AboutIntro';
import AboutJoinUs from '../../components/AboutPage/AboutJoinUs';
import AboutVissionMission from '../../components/AboutPage/AboutVissionMission';



const About = () => {
  // >>>>>>>>>>>>>>>>> Change Document Title Dynamically
  useDocumentTitle('About Us - VoltCart');

  // const hero = useInViewMotionFades();
  // const content = useInViewMotion();
  // const counters = useInViewMotion();
  // const missionSectionOne = useInViewMotion();
  // const missionSectionTwo = useInViewMotion();

  // const ref = useRef(null);
  // const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (

    <div className="lg:w-[100%] flex flex-col items-center">
      <AboutSpotlight />

      <AboutIntro />

      <AboutJoinUs/>

      <AboutVissionMission/>
      

      {/* counter */}
      {/* <div className="w-[100%] flex flex-row flex-wrap border-1 border-[#e5e7eb]">
        <NumberCounter width={'w-[50%] lg:w-[25%]'} title={"clients"} number={100} />
        <NumberCounter width={'w-[50%] lg:w-[25%]'} title={"Industries Serve"} number={35} />
        <NumberCounter width={'w-[50%] lg:w-[25%]'} title={"Countries Presence"} number={50} />
        <NumberCounter width={'w-[50%] lg:w-[25%]'} title={"Years Of Experience"} number={16} />
      </div> */}

    </div>

  )
}

export default About