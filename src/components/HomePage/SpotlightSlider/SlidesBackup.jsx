// import { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion'

// import Button from '../../FormComp/Button'
// import BreadCrumbs from '../../BreadCrumbs/BreadCrumbs';


// const Slides = ({
//     title,
//     subTitle,
//     source,
//     objectImg,
//     isActive,
//     isActiveObj,
//     dynBgColor
// }) => {

//     let location = useLocation();
//     const [animateKey, setAnimateKey] = useState(0);
//     // const [animateKeyObj, setAnimateKeyObj] = useState(0);

//     useEffect(() => {
//         // if (isActive && isActiveObj) {
//         if (isActive) {
//             setAnimateKey((prev) => prev + 1);
//             // setAnimateKeyObj((prev) => prev + 1);
//         }
//         // }, [isActive, isActiveObj]);
//     }, [isActive]);

//     return (
//         <>
//             <AnimatePresence mode="wait" >
//                 <motion.div
//                     key={location.pathname}
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     className={` ${dynBgColor} home_spotlight_slides_bg bg-center bg-cover bg-no-repeat w-full h-[650px] flex relative `}
//                     transition={{ duration: 0.8, ease: "easeInOut" }}
//                     style={{ backgroundImage: `url(${source})` }}
//                 >
//                     <div className="  w-full max-w-[1440px] m-auto flex justify-between items-center h-[650px] desktop:px-[50px] tab:px-[30px] px-[20px] tab:pb-[60px] pb-[40px]  " >

//                         <motion.div
//                             className="texts  "
//                             key={animateKey}
//                             initial={{ marginBottom: "-55px" }}
//                             animate={{ marginBottom: 0 }}
//                             exit={{ marginBottom: "-55px" }}
//                             transition={{ duration: 1.5, ease: "easeInOut" }}
//                         >
//                             <span
//                                 className='  bg-[#0d6efdb5] px-[12px] py-[8px] rounded-[6px] text-white text-[12px]/[14px] ' >
//                                 Flat 20% Off</span>
//                             <h3 className=" w-[80%] capitalize font-primary desktop:text-[90px]/[90px] gt-tab:text-[60px]/[60px] tab:text-[55px]/[55px] text-[45px]/[45px] font-[100] text-white mt-[14px] relative z-[99] " >{title}</h3>

//                             <h2 className=" uppercase font-primary tab:text-[18px]/[24px] text-[16px]/[24px] text-white relative z-[99] pl-[10px] " >{subTitle}</h2>


//                             <h2 className=" uppercase font-primary tab:text-[18px]/[24px] text-[16px]/[24px] text-white relative z-[99] pl-[10px] " >From: &#8377;999</h2>
//                             <Button text="Shop Now" />
//                         </motion.div>



//                         <img src={objectImg} alt="" className=' w-full max-w-[350px] z-[999] ' />



//                         {/* <BreadCrumbs breadColor="#fff" /> */}

//                     </div>

//                 </motion.div>
//             </AnimatePresence>




//         </>
//     )
// }

// export default Slides
