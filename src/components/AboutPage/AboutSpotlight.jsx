import { useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

import spotlightImg from '../../assets/about-page/about_spotlight_main.webp'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs'


const AboutSpotlight = () => {
  let location = useLocation();

  return (
    <AnimatePresence mode="wait" >
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className=" about_spotlight_bg bg-center bg-cover bg-no-repeat w-full desktop:h-[90vh] gt-tab:h-[90vh] tab:h-[60vh] h-[75vh] flex relative "
        transition={{ duration: 0.8, ease: "easeInOut" }}
        style={{ backgroundImage: `url(${spotlightImg})` }}
      >
        <div className=" w-full max-w-[1440px] m-auto flex justify-end flex-col h-full desktop:px-[50px] tab:px-[30px] px-[20px] tab:pb-[60px] pb-[40px] gt-tab:gap-[70px] gap-[50px] " >
          <div className="texts">
            <h1 className=" uppercase spot_title font-primary tab:text-[18px]/[24px] text-[16px]/[24px] text-white relative z-[99] pl-[10px] " >About Us</h1>
            <h3 className=" capitalize font-primary gt-tab:w-[60%] tab:w-[80%] w-full desktop:text-[90px]/[90px] gt-tab:text-[60px]/[60px] tab:text-[55px]/[55px] text-[45px]/[45px] font-[100] text-white mt-[14px] relative z-[99] " >About our brand</h3>
          </div>
          <BreadCrumbs additionalColorClass=" text-white " />
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default AboutSpotlight;
