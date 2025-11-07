import BreadCrumbs from '../BreadCrumbs/BreadCrumbs'
// import spotlightImg from '../../assets/about-page/revised-img/about_spotlight.jpg'
// import spotlightImg from '../../assets/prodListing/spotlight_pdp.jpg'
import spotlightImg from '../../assets/prodListing/prod_listing_postlight.webp'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'

const ProductsSpotlight = () => {
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
        <div className=" w-full max-w-[1440px] m-auto flex justify-end flex-col h-full desktop:px-[50px] tab:px-[30px] px-[20px] tab:pb-[60px] pb-[40px] desktop:gap-[100px] tab:gap-[70px] gap-[50px] " >

          <div className="texts">
            <h1 className=" uppercase spot_title font-primary  tab:text-[18px]/[24px] text-[16px]/[24px] text-white relative z-[99] pl-[10px] " >Products</h1>
            <h3 className=" capitalize font-primary tab:w-[60%] w-full desktop:text-[90px]/[90px] gt-tab:text-[60px]/[60px] tab:text-[55px]/[55px] text-[45px]/[45px] font-[100] text-white mt-[14px] relative z-[99] " >Shop All</h3>
          </div>

          <BreadCrumbs breadColor="#fff" />

        </div>

      </motion.div>
    </AnimatePresence>
  )
}

export default ProductsSpotlight
