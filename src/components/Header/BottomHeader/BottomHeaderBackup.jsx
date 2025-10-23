import React, { useRef, useState } from 'react'
import { GrCart } from 'react-icons/gr'
import { Link, NavLink } from 'react-router-dom'
import '../header.css'
import '../../../index.css'
import { useCart } from '../../../contexts/ProdProvider';

import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import CustomScroll from './CustomScroll'
import SearchBarMob from '../SearchBar/SearchBarMob'




const BottomHeaderBackup = () => {

    const { scrollY } = useScroll();
    let [navTopVal, setNavTopVal] = useState('90px')

    useMotionValueEvent(scrollY, 'change', (event) => event > 25 ? setNavTopVal('0px') : setNavTopVal('90px'))

    // useMotionValueEvent(scrollY, 'change', (event) => {

    //     // if()
    // } )

    let { cartProducts } = useCart();
    // console.log('cartProducts', cartProducts)
    // console.log('cartProducts Length', cartProducts.length)
    let mainCartItemLen = 0;
    cartProducts.map(elem => mainCartItemLen += elem.quantity);

    // console.log('mainCartItemLen', mainCartItemLen)

    return (



        <>


            {/* >>>>>>>>>>>>>>> Desktop Header */}
            <motion.div
                animate={{ top: navTopVal }}
                transition={{ type: 'spring', stiffness: 350, damping: 30, }}
                className="bottom_header  gt-tab:flex hidden  fixed z-40 flex-wrap items-center gap-4 mx-auto w-full  border-t border-b border-[#E0E0E0] py-[17px] bg-white "
                style={{ top: navTopVal }}
            >

                <div className=' head_foot_cont max-w-[1440px] flex flex-wrap items-center gap-4  mx-auto w-full ' id='collapseMenu' >
                    <ul
                        className='gt-tab:flex hidden lg:gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
                        <li className='max-lg:border-b '>
                            <NavLink to='/' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "font-medium lg:hover:text-blue-700 font-inter text-black block text-[16px]"} >Home</NavLink>
                        </li>
                        <li className='max-lg:border-b '>
                            <NavLink to='/about-us' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "font-medium lg:hover:text-blue-700 font-inter text-black block text-[16px]"} >About Us</NavLink>
                        </li>
                        <li className='max-lg:border-b '>
                            <NavLink to='/blogs' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "font-medium lg:hover:text-blue-700 font-inter text-black block text-[16px]"} >Blogs</NavLink>
                        </li>
                        <li className='max-lg:border-b '>
                            <NavLink to='/products' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "font-medium lg:hover:text-blue-700 font-inter text-black block text-[16px]"} >Products</NavLink>
                        </li>
                        <li className='max-lg:border-b '>
                            <NavLink to='/contact-us' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "font-medium lg:hover:text-blue-700 font-inter text-black block text-[16px]"} >Contact</NavLink>
                        </li>

                    </ul>


                </div>
            </motion.div>


            {/* >>>>>>>>>>>>>>> Mobile Header */}
            <motion.div
                animate={{ top: navTopVal }}
                transition={{ type: 'spring', stiffness: 350, damping: 30, }}
                className='w-full  gt-tab:hidden flex  bg-[#f1f1f1]  py-[10px] px-[30px] fixed z-40 '
                style={{ top: navTopVal }}
            >
                <SearchBarMob />
            </motion.div>
        </>
    )
}


export default BottomHeaderBackup;


