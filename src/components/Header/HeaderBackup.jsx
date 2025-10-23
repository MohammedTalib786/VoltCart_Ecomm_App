// import { useState } from 'react'
// import { Link, NavLink } from 'react-router-dom'
// import logo from '../../../src/assets/final_logo.png';
// import { MdOutlineShoppingCart } from "react-icons/md";
// import { MdOutlineSearch } from "react-icons/md";
// import { FaRegHeart } from "react-icons/fa";
// import { RxHamburgerMenu } from "react-icons/rx";
// import { TfiClose } from "react-icons/tfi";
// import { useCart } from '../../contexts/ProdProvider';
// import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
// import './header.css'
// import '../../index.css'


// const Header = () => {
//     // let [openMenu, setOpenMenu] = useState('-540px');
//     let [openMenu, setOpenMenu] = useState({
//         left: "-540px",
//         opacity: 0,
//         pointerEvents: "none"
//     });

//     let { cartProducts } = useCart();
//     // console.log('cartProducts', cartProducts)
//     // console.log('cartProducts Length', cartProducts.length)
//     let mainCartItemLen = 0;
//     cartProducts.map(elem => mainCartItemLen += elem.quantity);

//     // console.log('mainCartItemLen', mainCartItemLen)

//     const { scrollY } = useScroll()

//     useMotionValueEvent(scrollY, 'change', (event) => event > 10 ? setOpenMenu({ left: "-540px", opacity: 0, pointerEvents: "none" }) : '')


//     return (
//         <header className=' head_foot_cont_full w-full flex flex-col '
//         >

//             {/* >>>>>>>>>>>>>>> Desktop Header */}
//             <div className='desktop_header gt-tab:flex hidden flex-wrap max-h-[90px] py-[20px] items-center max-w-[1440px] mx-auto gt-tab:px-[30px] desktop:px-[50px]  w-full  border-b border-[#b9b9b9] ' >

//                 <div className="logoCont w-[20%]  ">
//                     <Link to="/" >
//                         <img src={logo} alt="logo" width="150px" />
//                     </Link>
//                 </div>

//                 <div
//                     className="  gt-tab:flex hidden  z-40 flex-wrap items-center gap-4 mx-auto w-[60%]    " >

//                     <div className=' head_foot_cont max-w-[1440px] flex flex-wrap justify-center items-center gt-tab:p-0 mx-auto w-full ' id='collapseMenu' >
//                         <ul
//                             className='gt-tab:flex hidden gap-[40px] max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
//                             <li className='max-lg:border-b '>
//                                 <NavLink to='/' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "font-medium lg:hover:text-primary font-inter text-black block text-[16px]"} >Home</NavLink>
//                             </li>
//                             <li className='max-lg:border-b '>
//                                 <NavLink to='/about-us' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "font-medium lg:hover:text-primary font-inter text-black block text-[16px]"} >About Us</NavLink>
//                             </li>
//                             <li className='max-lg:border-b '>
//                                 <NavLink to='/blogs' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "font-medium lg:hover:text-primary font-inter text-black block text-[16px]"} >Blogs</NavLink>
//                             </li>
//                             <li className='max-lg:border-b '>
//                                 <NavLink to='/products' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "font-medium lg:hover:text-primary font-inter text-black block text-[16px]"} >Products</NavLink>
//                             </li>
//                             <li className='max-lg:border-b '>
//                                 <NavLink to='/contact-us' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "font-medium lg:hover:text-primary font-inter text-black block text-[16px]"} >Contact</NavLink>
//                             </li>
//                             <li className='max-lg:border-b '>
//                                 <NavLink to='/test' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "font-medium lg:hover:text-primary font-inter text-black block text-[16px]"} >Test</NavLink>
//                             </li>
//                         </ul>

//                     </div>
//                 </div>


//                 <div className="iconsCont desktop:w-[20%] gt-tab:w-[15%] flex justify-end gap-[24px]  ">

//                     <Link to='/cart' className="cart-box flex justify-center items-center flex-col relative "  >
//                         <MdOutlineSearch className=' text-[28px]/[28px] text-black   ' />
//                     </Link>

//                     <button className="wishlist-box flex justify-center items-center flex-col cursor-pointer ">
//                         {/* <img src={wishlistIcon} alt="wishlist icon" className="w-[24px] " /> */}
//                         <FaRegHeart className=' text-[22px]/[22px] text-black  ' />
//                     </button>

//                     <Link to='/cart' className="cart-box flex justify-center items-center flex-col relative "  >
//                         {/* <MdOutlineShoppingCart className=' text-[24px]/[24px] text-black   ' /> */}
//                         <MdOutlineShoppingCart className=' text-[24px]/[24px] text-[#393939]   ' />

//                         {
//                             cartProducts && cartProducts.length >= 1 ? <div className=" text-white bg-[var(--primary-color)] text-[13px]/[13px] rounded-[50%] w-[24px] h-[24px] p-0 flex justify-center items-center absolute top-[-14px] right-[-16px]    ">{mainCartItemLen}</div> : null
//                         }
//                     </Link>

//                 </div>

//             </div>




//             {/* >>>>>>>>>>>>>>> Mobile Header */}
//             <div className='mobile_header gt-tab:hidden flex py-[25px] items-center mx-auto tab:px-[30px] px-[20px] w-full ' >

//                 <div className=" tab:w-[20%] w-[15%] flex items-center " >

//                     <button
//                         onClick={() => setOpenMenu({ left: "0px", opacity: 1, pointerEvents: "all" })}
//                         className=' cursor-pointer '  >
//                         {/* <img src={hamNavIcon} alt="navbar-icon" className='w-[30px]' /> */}
//                         <RxHamburgerMenu className=' text-black tab:text-[32px]/[32px] text-[26px]/[26px]  ' />
//                     </button>

//                 </div>

//                 {/* // Absolute Navbar */}
//                 <motion.div
//                     animate={{ left: openMenu.left, opacity: openMenu.opacity, pointerEvents: openMenu.pointerEvents }}
//                     className=" w-[70%] h-[100%] bg-white  tab:left-[0px] flex  absolute top-0 z-99   flex-col justify-start gap-[50px] px-[30px] pt-[100px] pb-[30px]  "
//                     transition={{ type: 'spring', stiffness: 300, damping: 35, }}
//                     style={{ left: openMenu.left, opacity: openMenu.opacity, pointerEvents: openMenu.pointerEvents }}
//                 >

//                     <button
//                         onClick={() => setOpenMenu({ left: "-540px", opacity: 0, pointerEvents: "none" })}
//                         className='w-fit absolute top-[30px] right-[30px] cursor-pointer  ' >
//                         {/* <img src={closeIcon} alt="" className='w-[30px] ' /> */}
//                         <TfiClose className=' text-black text-[28px]/[28px]  ' />

//                     </button>

//                     <Link to="/" >
//                         <img src={logo} alt="logo"
//                             className=' w-[250px] tab:w-[250px] '
//                         />
//                     </Link>

//                     <nav className='mob_nav  ' >
//                         <ul className=' flex flex-col ' >
//                             <li className='max-lg:border-b py-[20px] '>
//                                 <NavLink to='/' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "font-medium lg:hover:text-primary font-inter text-black block text-[16px]"} >Home</NavLink>
//                             </li>
//                             <li className='max-lg:border-b py-[20px] '>
//                                 <NavLink to='/about-us' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "font-medium lg:hover:text-primary font-inter text-black block text-[16px]"} >About Us</NavLink>
//                             </li>
//                             <li className='max-lg:border-b py-[20px] '>
//                                 <NavLink to='/blogs' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "font-medium lg:hover:text-primary font-inter text-black block text-[16px]"} >Blogs</NavLink>
//                             </li>
//                             <li className='max-lg:border-b py-[20px] '>
//                                 <NavLink to='/products' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "font-medium lg:hover:text-primary font-inter text-black block text-[16px]"} >Products</NavLink>
//                             </li>
//                             <li className=' py-[10px] '>
//                                 <NavLink to='/contact-us' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "font-medium lg:hover:text-primary font-inter text-black block text-[16px]"} >Contact</NavLink>
//                             </li>
//                         </ul>

//                     </nav>
//                 </motion.div>

//                 <div className="logoCont tab:w-[60%] w-[60%] flex justify-center  ">
//                     <Link to="/" >
//                         <img src={logo} alt="logo" className=' tab:w-[200px] w-[130px] ' />
//                     </Link>
//                 </div>

//                 <div className="iconsCont tab:w-[20%] w-[25%] flex justify-end tab:gap-[24px] gap-[10px]  ">

//                     <Link to='/cart' className="cart-box flex justify-center items-center flex-col relative "  >
//                         <MdOutlineSearch className=' tab:text-[32px]/[32px] text-[24px]/[24px] text-black   ' />
//                     </Link>

//                     <button className="wishlist-box flex justify-center items-center flex-col cursor-pointer ">
//                         {/* <img src={wishlistIcon} alt="wishlist icon" className="w-[24px] " /> */}
//                         <FaRegHeart className=' tab:text-[24px]/[24px] text-[18px]/[18px] text-black  ' />
//                     </button>

//                     <Link to='/cart' className="cart-box flex justify-center items-center flex-col relative "  >
//                         {/* <MdOutlineShoppingCart className=' text-[24px]/[24px] text-black   ' /> */}
//                         <MdOutlineShoppingCart className=' tab:text-[28px]/[28px] text-[20px]/[20px] text-[#393939]   ' />

//                         {
//                             cartProducts && cartProducts.length >= 1 ? <div className=" text-white bg-[var(--primary-color)] text-[13px]/[13px] rounded-[50%] w-[24px] h-[24px] p-0 flex justify-center items-center absolute top-[-14px] right-[-16px]    ">{mainCartItemLen}</div> : null
//                         }
//                     </Link>

//                 </div>

//             </div>

//         </header>
//     )
// }

// export default Header
