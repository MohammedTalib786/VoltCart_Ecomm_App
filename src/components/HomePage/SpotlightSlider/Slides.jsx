import { useEffect, useState } from 'react';
import { motion, AnimatePresence, scale } from 'framer-motion'
import { Link } from 'react-router-dom';

import Button from '../../FormComp/Button'


const Slides = ({
    title,
    subTitle,
    source,
    objectImg,
    objectImgAddClass,
    isActive,
    isActiveObj,
    dynBgColor,
    saleMainPrice,
    mainPercentage
}) => {

    const [isMobile, setIsMobile] = useState(false);
    const [animateKey, setAnimateKey] = useState(0);
    const [animateKeyObj, setAnimateKeyObj] = useState(0);

    useEffect(() => {
        if (isActive) setAnimateKey(prev => prev + 1);
        if (isActiveObj) setAnimateKeyObj(prev => prev + 1);
    }, [isActive, isActiveObj]);

    useEffect(() => {
        const checkScreen = () => setIsMobile(window.innerWidth < 769);
        checkScreen();
        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    const textAnim = isMobile
        ? {
            initial: { x: -80, opacity: 0 },
            animate: { x: 0, opacity: 1 },
            exit: { x: -80, opacity: 0 },
            transition: { duration: 1.2, ease: "easeInOut" },
        }
        : {
            initial: { y: 80, opacity: 0 },
            animate: { y: 0, opacity: 1 },
            exit: { y: 80, opacity: 0 },
            transition: { duration: 1.2, ease: "easeInOut" },
        };

    const imgAnim = isMobile
        ? {
            initial: {
                x: 80,
                opacity: 0
            },
            animate: {
                x: 0,
                opacity: 1
            },
            exit: {
                x: 80,
                opacity: 0
            },
            transition: { duration: 1.35, ease: "easeInOut" },
        }
        : {
            initial: { y: -80, opacity: 0 },
            animate: { y: 0, opacity: 1 },
            exit: { y: -80, opacity: 0 },
            transition: { duration: 1.35, ease: "easeInOut" },
        };

    // const current = isMobile ? variants.mobile : variants.desktop;


    return (
        <>
            <AnimatePresence mode="wait" >
                <motion.div
                    key={`bg-${source}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={` ${dynBgColor} home_spotlight_slides_bg bg-center bg-cover bg-no-repeat w-full h-[100vh] min-h-[650px] flex relative `}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    style={{ backgroundImage: `url(${source})` }}
                >
                    <div className="  w-full max-w-[1440px] gt-tab:h-[65%] tab:h-[80%] h-[90%] m-auto flex gt-tab:flex-row flex-col gt-tab:justify-between justify-end gt-tab:items-end items-center desktop:px-[50px] tab:px-[30px] px-[20px] gt-tab:gap-0 tab:gap-[35px] gap-[25px]  " >

                        <motion.div
                            className="texts flex flex-col gt-tab:items-start items-center "
                            key={`text-${animateKey}`}
                            initial={textAnim.initial}
                            animate={textAnim.animate}
                            exit={textAnim.exit}
                            transition={textAnim.transition}
                        >
                            <span
                                className='  bg-[#0d6efdb5] w-fit px-[12px] py-[8px] rounded-[6px] text-white desktop:text-[16px]/[20px] tab:text-[14px]/[20px] text-[12px]/[18px] relative z-[999] ' >
                                Flat {mainPercentage ? mainPercentage : '20'}% Off</span>

                            <h3 className=" desktop:w-[70%] gt-tab:w-[80%] tab:w-[70%] w-full capitalize font-primary font-[300] desktop:text-[70px]/[75px] gt-tab:text-[60px]/[60px] tab:text-[55px]/[55px] text-[38px]/[38px] text-white tab:my-[24px] my-[14px]  relative z-[99] gt-tab:text-left text-center " >
                                {title}
                            </h3>

                            <h4 className=" font-body font-[300] desktop:text-[30px]/[38px] gt-tab:text-[24px]/[32px] tab:text-[22px]/[28px] text-[16px]/[22px] text-[#ffffffcc] relative z-[99] gt-tab:text-left text-center  " >
                                {subTitle}
                            </h4>

                            <h2 className=" flex items-center gap-[6px] font-body font-[300] desktop:text-[24px]/[32px] gt-tab:text-[20px]/[28px] text-[14px]/[20px] text-[#ffffffcc] relative z-[99] tab:mt-[10px] tab:mb-[25px] mt-[6px] mb-[15px]  " >
                                From: <span className=' desktop:text-[30px]/[38px] gt-tab:text-[24px]/[32px] tab:text-[22px]/[28px] text-[16px]/[22px] font-[500] text-[#d5b303] '  >&#8377;{saleMainPrice ? saleMainPrice : '999'}</span>
                            </h2>

                            <Link to="/products" >
                                <Button
                                    text="Shop Now"
                                    btnIcon={<svg width="22" height="22" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M40 45C41.3261 45 42.5979 45.5268 43.5355 46.4645C44.4732 47.4021 45 48.6739 45 50C45 51.3261 44.4732 52.5979 43.5355 53.5355C42.5979 54.4732 41.3261 55 40 55C38.6739 55 37.4021 54.4732 36.4645 53.5355C35.5268 52.5979 35 51.3261 35 50C35 48.6739 35.5268 47.4021 36.4645 46.4645C37.4021 45.5268 38.6739 45 40 45ZM40 47.5C39.337 47.5 38.7011 47.7634 38.2322 48.2322C37.7634 48.7011 37.5 49.337 37.5 50C37.5 50.663 37.7634 51.2989 38.2322 51.7678C38.7011 52.2366 39.337 52.5 40 52.5C40.663 52.5 41.2989 52.2366 41.7678 51.7678C42.2366 51.2989 42.5 50.663 42.5 50C42.5 49.337 42.2366 48.7011 41.7678 48.2322C41.2989 47.7634 40.663 47.5 40 47.5ZM17.5 45C18.8261 45 20.0979 45.5268 21.0355 46.4645C21.9732 47.4021 22.5 48.6739 22.5 50C22.5 51.3261 21.9732 52.5979 21.0355 53.5355C20.0979 54.4732 18.8261 55 17.5 55C16.1739 55 14.9021 54.4732 13.9645 53.5355C13.0268 52.5979 12.5 51.3261 12.5 50C12.5 48.6739 13.0268 47.4021 13.9645 46.4645C14.9021 45.5268 16.1739 45 17.5 45ZM17.5 47.5C16.837 47.5 16.2011 47.7634 15.7322 48.2322C15.2634 48.7011 15 49.337 15 50C15 50.663 15.2634 51.2989 15.7322 51.7678C16.2011 52.2366 16.837 52.5 17.5 52.5C18.163 52.5 18.7989 52.2366 19.2678 51.7678C19.7366 51.2989 20 50.663 20 50C20 49.337 19.7366 48.7011 19.2678 48.2322C18.7989 47.7634 18.163 47.5 17.5 47.5ZM45 15H10.675L17.05 30H37.5C38.325 30 39.05 29.6 39.5 29L47 19C47.325 18.575 47.5 18.05 47.5 17.5C47.5 16.837 47.2366 16.2011 46.7678 15.7322C46.2989 15.2634 45.663 15 45 15ZM37.5 32.5H17.175L15.25 36.4L15 37.5C15 38.163 15.2634 38.7989 15.7322 39.2678C16.2011 39.7366 16.837 40 17.5 40H45V42.5H17.5C16.1739 42.5 14.9021 41.9732 13.9645 41.0355C13.0268 40.0979 12.5 38.8261 12.5 37.5C12.4993 36.6517 12.7143 35.8172 13.125 35.075L14.925 31.4L5.85 10H2.5V7.5H7.5L9.625 12.5H45C46.3261 12.5 47.5979 13.0268 48.5355 13.9645C49.4732 14.9021 50 16.1739 50 17.5C50 18.75 49.575 19.8 48.875 20.65L41.6 30.375C40.7 31.65 39.2 32.5 37.5 32.5Z" fill="white" />
                                    </svg>
                                    }
                                    additionalClass=" w-fit "
                                />
                            </Link>
                        </motion.div>

                        <motion.div
                            key={`img-${animateKeyObj}`}
                            className=' block relative z-[999] '
                            initial={imgAnim.initial}
                            animate={imgAnim.animate}
                            exit={imgAnim.exit}
                            transition={imgAnim.transition}
                        >
                            <img src={objectImg} alt="" className={` w-full ${objectImgAddClass}  `} />
                        </motion.div>

                    </div>

                </motion.div>
            </AnimatePresence>
        </>
    )
}

export default Slides
