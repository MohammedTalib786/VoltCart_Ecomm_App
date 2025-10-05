import BreadCrumbs from '../BreadCrumbs/BreadCrumbs'
// import spotlightImg from '../../assets/about-page/revised-img/about_spotlight.jpg'
import spotlightImg from '../../assets/prodListing/spotlight_pdp.jpg'
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
        className=" about_spotlight_bg bg-center bg-cover bg-no-repeat w-full desktop:h-[90vh] gt-tab:h-[90vh] tab:h-[60vh] h-[65vh] flex relative "
        style={{ backgroundImage: `url(${spotlightImg})` }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <div className="container_layout m-auto flex justify-center items-center flex-col  ">
          <BreadCrumbs breadColor="#fff" />
          {/* <h1 className="font-body font-bold tab:text-[90px]/[100px] text-[55px]/[65px]  uppercase text-white mt-[10px] relative z-[99] " >Products</h1> */}
          {/* <h1 className="font-primary tab:text-[120px]/[130px] text-[65px]/[70px] font-[100] text-white mt-[10px] relative z-[99] " >Products</h1> */}
          <h1 className="font-primary tab:text-[120px]/[130px] text-[65px]/[70px] font-[100] text-white mt-[10px] relative z-[99] " >Shop All</h1>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ProductsSpotlight
