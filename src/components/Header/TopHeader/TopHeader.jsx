import React, { useState } from 'react'
import { GrCart } from 'react-icons/gr'
import { Link, NavLink } from 'react-router-dom'
import '../header.css'
import '../../../index.css'
import { useCart } from '../../../contexts/ProdProvider'

// import logo from '../../../assets/Header/logo.png';
// import logo from '../../../../final_logo.png';
import logo from '../../../../src/assets/final_logo.png';

import cartIcon from '../../../assets/Header/cart_icon.svg';
import { MdOutlineShoppingCart } from "react-icons/md";


import wishlistIcon from '../../../assets/Header/wishlist_icon.svg';
import { FaRegHeart } from "react-icons/fa";



import hamNavIcon from '../../../assets/Header/ham_nav_icon.svg';
import { RxHamburgerMenu } from "react-icons/rx";



import closeIcon from '../../../assets/Header/close_icon.svg';
import { IoCloseOutline } from "react-icons/io5";
import { TfiClose } from "react-icons/tfi";




import SearchBar from '../SearchBar/SearchBar';

import { motion, useScroll, useMotionValueEvent } from 'framer-motion'


const TopHeader = () => {

    // let [openMenu, setOpenMenu] = useState('-540px');
    let [openMenu, setOpenMenu] = useState({
        left: "-540px",
        opacity: 0,
        pointerEvents: "none"
    });

    let { cartProducts } = useCart();
    // console.log('cartProducts', cartProducts)
    // console.log('cartProducts Length', cartProducts.length)
    let mainCartItemLen = 0;
    cartProducts.map(elem => mainCartItemLen += elem.quantity);

    // console.log('mainCartItemLen', mainCartItemLen)

    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, 'change', (event) => event > 10 ? setOpenMenu({ left: "-540px", opacity: 0, pointerEvents: "none" }) : '')

    return (
        <>

            {/* >>>>>>>>>>>>>>> Desktop Header */}
            {/* mob:blue till 767 | tab:cyan from 768 to 1023 | gt-tab:pink min 1024 no max limit  */}
            {/* <div className='desktop_header bg-blue-800  tab:bg-cyan-200 gt-tab:bg-pink-400   flex-wrap max-h-[90px] py-[20px] items-center max-w-[1440px] mx-auto px-[50px] w-full ' > */}
            <div className='desktop_header gt-tab:flex hidden  flex-wrap max-h-[90px] py-[20px] items-center max-w-[1440px] mx-auto px-[50px] w-full ' >

                <div className="logoCont w-[20%]  ">
                    <Link to="/" >
                        <img src={logo} alt="logo" width="150px" />
                    </Link>
                </div>

                <div className="searchCont w-[60%]  ">
                    <SearchBar />
                </div>

                <div className="iconsCont w-[20%] flex justify-end gap-[24px] ">

                    <button className="wishlist-box flex justify-center items-center flex-col cursor-pointer ">
                        {/* <img src={wishlistIcon} alt="wishlist icon" className="w-[24px] " /> */}
                        <FaRegHeart className=' text-[22px]/[22px] text-black  ' />
                    </button>



                    <Link to='/cart' className="cart-box flex justify-center items-center flex-col relative "  >
                        {/* <img src={cartIcon} alt="cart icon" className="w-[24px] " /> */}
                        <MdOutlineShoppingCart className=' text-[24px]/[24px] text-black  ' />

                        {
                            cartProducts && cartProducts.length >= 1 ? <div className=" text-white bg-[var(--primary-color)] text-[13px]/[13px] rounded-[50%] w-[24px] h-[24px] p-0 flex justify-center items-center absolute top-[-14px] right-[-16px]    ">{mainCartItemLen}</div> : null
                        }
                    </Link>



                </div>

            </div>


            {/* >>>>>>>>>>>>>>> Mobile Header */}
            <div className='mobile_header   gt-tab:hidden flex   py-[20px] items-center mx-auto tab:px-[30px] px-[20px] w-full ' >

                <div className=" tab:w-[10%] w-[15%] flex items-center " >

                    <button
                        onClick={() => setOpenMenu({ left: "0px", opacity: 1, pointerEvents: "all" })}
                        className=' cursor-pointer '  >
                        {/* <img src={hamNavIcon} alt="navbar-icon" className='w-[30px]' /> */}
                        <RxHamburgerMenu className=' text-black text-[30px]/[30px]  ' />
                    </button>

                </div>

                {/* // Absolute Navbar */}
                <motion.div
                    animate={{ left: openMenu.left, opacity: openMenu.opacity, pointerEvents: openMenu.pointerEvents }}
                    className=" w-[70%] h-[100%] bg-white  tab:left-[0px] flex  absolute top-0 z-99   flex-col justify-start gap-[30px] px-[30px] pt-[100px] pb-[30px]  "
                    transition={{ type: 'spring', stiffness: 300, damping: 35, }}
                    style={{ left: openMenu.left, opacity: openMenu.opacity, pointerEvents: openMenu.pointerEvents }}
                >

                    <button
                        onClick={() => setOpenMenu({ left: "-540px", opacity: 0, pointerEvents: "none" })}
                        className='w-fit absolute top-[30px] right-[30px] cursor-pointer  ' >
                        {/* <img src={closeIcon} alt="" className='w-[30px] ' /> */}
                        <TfiClose className=' text-black text-[28px]/[28px]  ' />
                        
                    </button>

                    <Link to="/" >
                        <img src={logo} alt="logo" />
                    </Link>

                    <nav className='mob_nav  ' >
                        <ul className=' flex flex-col ' >
                            <li className='max-lg:border-b py-[20px] '>
                                <NavLink to='/' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "font-medium lg:hover:text-blue-700 font-inter text-black block text-[16px]"} >Home</NavLink>
                            </li>
                            <li className='max-lg:border-b py-[20px] '>
                                <NavLink to='/about-us' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "font-medium lg:hover:text-blue-700 font-inter text-black block text-[16px]"} >About Us</NavLink>
                            </li>
                            <li className='max-lg:border-b py-[20px] '>
                                <NavLink to='/blogs' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "font-medium lg:hover:text-blue-700 font-inter text-black block text-[16px]"} >Blogs</NavLink>
                            </li>
                            <li className='max-lg:border-b py-[20px] '>
                                <NavLink to='/products' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "font-medium lg:hover:text-blue-700 font-inter text-black block text-[16px]"} >Products</NavLink>
                            </li>
                            <li className=' py-[10px] '>
                                <NavLink to='/contact-us' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "font-medium lg:hover:text-blue-700 font-inter text-black block text-[16px]"} >Contact</NavLink>
                            </li>
                        </ul>

                    </nav>
                </motion.div>

                <div className="logoCont tab:w-[40%] w-[45%]  ">
                    <Link to="/" >
                        <img src={logo} alt="logo" />
                    </Link>
                </div>

                <div className="iconsCont tab:w-[50%] w-[40%] flex justify-end gap-[24px] ">

                    <button className="wishlist-box flex justify-center items-center flex-col cursor-pointer ">
                        <img src={wishlistIcon} alt="wishlist icon" className="w-[24px] " />
                    </button>

                    <Link to='/cart' className="cart-box flex justify-center items-center flex-col relative "  >
                        <img src={cartIcon} alt="cart icon" className="w-[24px] " />
                        {
                            cartProducts && cartProducts.length >= 1 ? <div className=" text-white bg-[var(--primary-color)] text-[13px]/[13px] rounded-[50%] w-[24px] h-[24px] p-0 flex justify-center items-center absolute top-[-14px] right-[-16px]    ">{mainCartItemLen}</div> : null
                        }
                    </Link>

                </div>

            </div>

        </>
    )
}

export default TopHeader
