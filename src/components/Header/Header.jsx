import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import { TfiClose } from "react-icons/tfi";
import { useMotionValueEvent, useScroll } from 'framer-motion';

import logo from '../../../src/assets/logo.svg';
import { useCart } from '../../contexts/ProdProvider';
import SearchBar from './SearchBar/SearchBar';

import './header.css';
import '../../index.css';


const Header = () => {
    let location = useLocation();
    let queryParams = new URLSearchParams(location.search);
    let query = queryParams.get('category');
    let [headerBg, setHeaderBg] = useState('transparent');
    let [svgLogoColor, setSvgLogoColor] = useState('white');
    let [navLinksAndIconsColor, setNavLinksAndIconsColor] = useState('white');
    let [scrolledHeader, setScrolledHeader] = useState('unScrolledHeader');
    let [searchBoxOpen, setSearchBoxOpen] = useState({
        topVal: "-top-[490px]",
        opacity: 0,
        pointerEvents: "none"
    });

    let [openMenu, setOpenMenu] = useState({
        left: "-540px",
        opacity: 0,
        pointerEvents: "none",
        // left: "0px",
        // opacity: 1,
        // pointerEvents: "all",
    });

    let { cartProducts } = useCart();

    let mainCartItemLen = 0;
    cartProducts.map(elem => mainCartItemLen += elem.quantity);

    const { scrollY } = useScroll()


    useMotionValueEvent(scrollY, 'change', (event) => {
        if (event > 10) {
            // setOpenMenu({ left: "-540px", opacity: 0, pointerEvents: "none" })
            setHeaderBg('white');
            setSvgLogoColor('#0D6EFD')
            setScrolledHeader('scrolledHeader')
            setNavLinksAndIconsColor('black')
        }
        else {
            setHeaderBg('transparent')
            setSvgLogoColor('white')
            setNavLinksAndIconsColor('white')
            setScrolledHeader('unScrolledHeader')
        }
    })

    useEffect(() => {
        setSearchBoxOpen({
            topVal: "-top-[490px]",
            opacity: 0,
            pointerEvents: "none"
        })
    }, [location]);

    const handlerSearchActive = () => {
        if (searchBoxOpen.opacity === 0) {
            setSearchBoxOpen({
                topVal: "top-[85px]",
                opacity: 1,
                pointerEvents: "all"
            })
            setHeaderBg('white');
            setSvgLogoColor('#0D6EFD')
            setScrolledHeader('scrolledHeader')
            setNavLinksAndIconsColor('black')
        }

        else {
            setSearchBoxOpen({
                topVal: "-top-[490px]",
                opacity: 0,
                pointerEvents: "none"
            })

            if (window.scrollY > 10) {
                setHeaderBg('white');
                setSvgLogoColor('#0D6EFD')
                setScrolledHeader('scrolledHeader')
                setNavLinksAndIconsColor('black')
            }

            else {
                setHeaderBg('transparent')
                setSvgLogoColor('white')
                setNavLinksAndIconsColor('white')
                setScrolledHeader('unScrolledHeader')
            }
        }
    }

    const handlerSearchActiveTab = () => {
        if (searchBoxOpen.opacity === 0) {
            setSearchBoxOpen({
                topVal: "top-[104px]",
                opacity: 1,
                pointerEvents: "all"
            })
        }
        else {
            setSearchBoxOpen({
                topVal: "-top-[490px]",
                opacity: 0,
                pointerEvents: "none"
            })
        }
    }

    const handlerSearchActiveMobile = () => {
        if (searchBoxOpen.opacity === 0) {
            setSearchBoxOpen({
                topVal: "top-[86px]",
                opacity: 1,
                pointerEvents: "all"
            })
        }
        else {
            setSearchBoxOpen({
                topVal: "-top-[490px]",
                opacity: 0,
                pointerEvents: "none"
            })
        }
    }

    useEffect(() => {
        setOpenMenu({ left: "-540px", opacity: 0, pointerEvents: "none" })
    }, [location.pathname, location.search])


    return (
        <header className={` head_foot_cont_full ${scrolledHeader} w-full flex flex-col bg-${headerBg}  fixed top-0 z-[999]  border-b border-[#7b7b7b87] `} >

            {/* >>>>>>>>>>>>>>> Desktop Header */}
            <div className='desktop_header gt-tab:flex hidden flex-wrap max-h-[90px]  items-center max-w-[1440px] mx-auto gt-tab:px-[30px] desktop:px-[50px] py-[20px] w-full bg-transparent ' >

                <div className="logoCont w-[20%]  ">
                    <Link to="/" className='  w-fit '  >
                        {/* <img src={logo} alt="logo" width="170px" /> */}

                        <svg width="170" viewBox="0 0 920 240"
                            fill={svgLogoColor}
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g>
                                <path d="M82.5 195C87.7055 195 92.7499 196.805 96.7738 200.108C100.798 203.41 103.552 208.005 104.568 213.111C105.583 218.216 104.797 223.516 102.343 228.107C99.8891 232.698 95.9193 236.296 91.11 238.288C86.3008 240.28 80.9496 240.542 75.9682 239.031C70.9869 237.52 66.6836 234.329 63.7917 230C60.8997 225.672 59.5979 220.475 60.1082 215.295C60.6184 210.114 62.9091 205.271 66.59 201.59C68.679 199.5 71.1593 197.843 73.8893 196.712C76.6192 195.581 79.5452 195 82.5 195ZM202.5 195C207.705 195 212.75 196.805 216.774 200.108C220.798 203.41 223.552 208.005 224.568 213.111C225.583 218.216 224.797 223.516 222.343 228.107C219.889 232.698 215.919 236.296 211.11 238.288C206.301 240.28 200.95 240.542 195.968 239.031C190.987 237.52 186.684 234.329 183.792 230C180.9 225.672 179.598 220.475 180.108 215.295C180.618 210.114 182.909 205.271 186.59 201.59C188.679 199.5 191.159 197.843 193.889 196.712C196.619 195.581 199.545 195 202.5 195ZM82.5 208.5C80.4177 208.498 78.3992 209.219 76.7884 210.538C75.1777 211.858 74.0743 213.695 73.6664 215.737C73.2585 217.779 73.5713 219.899 74.5515 221.737C75.5316 223.574 77.1185 225.014 79.0417 225.813C80.9649 226.611 83.1054 226.718 85.0984 226.115C87.0915 225.512 88.8138 224.236 89.9719 222.505C91.1299 220.775 91.6521 218.696 91.4493 216.624C91.2466 214.552 90.3315 212.614 88.86 211.14C87.1738 209.452 84.8861 208.502 82.5 208.5ZM202.5 208.5C200.418 208.501 198.401 209.223 196.792 210.544C195.183 211.865 194.081 213.703 193.675 215.745C193.269 217.786 193.583 219.906 194.564 221.742C195.546 223.578 197.133 225.017 199.056 225.814C200.98 226.612 203.12 226.717 205.112 226.113C207.104 225.51 208.826 224.234 209.983 222.503C211.141 220.773 211.662 218.695 211.459 216.623C211.256 214.551 210.341 212.613 208.87 211.14C208.034 210.303 207.041 209.639 205.948 209.186C204.855 208.733 203.683 208.5 202.5 208.5ZM37.5 0.000217357C38.8109 -0.00977516 40.1014 0.324933 41.2422 0.970803C42.383 1.61667 43.334 2.55102 44 3.68022L44.57 4.88022L54 30.0002H129.76L118.76 45.0002H60L90 120H118.7L107.89 135H90C89.2165 135.001 88.4341 134.941 87.66 134.82L75.6 165H217.5C219.374 164.997 221.182 165.695 222.567 166.958C223.952 168.221 224.814 169.956 224.983 171.823C225.152 173.689 224.617 175.551 223.482 177.043C222.347 178.534 220.694 179.546 218.85 179.88L217.5 180H75.59C73.2992 180.002 71.0382 179.48 68.9807 178.473C66.9231 177.466 65.1235 176.001 63.72 174.19C62.3166 172.38 61.3463 170.273 60.8835 168.03C60.4207 165.787 60.4776 163.468 61.05 161.25L61.65 159.44L74.45 127.44L32.28 15.0002H7.5C5.74514 14.9989 4.04617 14.383 2.69805 13.2596C1.34993 12.1361 0.43779 10.5761 0.12 8.85022L0 7.50022C0.00136263 5.74536 0.617222 4.04638 1.74066 2.69826C2.86409 1.35014 4.42415 0.438008 6.15 0.120217L7.5 0.000217357H37.5ZM225 30.0002C227.304 30.0011 229.578 30.533 231.643 31.5546C233.709 32.5762 235.512 34.0599 236.911 35.8908C238.311 37.7217 239.269 39.8503 239.713 42.1117C240.157 44.373 240.074 46.7062 239.47 48.9302L238.92 50.5802L208.92 125.58C207.919 128.073 206.267 130.25 204.137 131.886C202.007 133.522 199.476 134.556 196.81 134.88L195 135H145.34L156.14 120H195L225 45.0002H161.65L172.65 30.0002H225Z" fill={svgLogoColor} />
                                <path d="M140 73.23L162 10L96 86.77H140L118 150L184 73.23" fill={svgLogoColor} />
                            </g>
                            <path d="M363.8 67.2L322.04 178.4H300.92L259 67.2H278.52L311.48 159.68L344.6 67.2H363.8Z" fill={svgLogoColor} />
                            <path d="M417.294 179.84C408.974 179.84 401.454 177.973 394.734 174.24C388.014 170.4 382.734 165.067 378.894 158.24C375.054 151.307 373.134 143.307 373.134 134.24C373.134 125.28 375.107 117.333 379.054 110.4C383 103.467 388.387 98.1333 395.214 94.4C402.04 90.6667 409.667 88.8 418.094 88.8C426.52 88.8 434.147 90.6667 440.974 94.4C447.8 98.1333 453.187 103.467 457.134 110.4C461.08 117.333 463.054 125.28 463.054 134.24C463.054 143.2 461.027 151.147 456.974 158.08C452.92 165.013 447.374 170.4 440.334 174.24C433.4 177.973 425.72 179.84 417.294 179.84ZM417.294 164C421.987 164 426.36 162.88 430.414 160.64C434.574 158.4 437.934 155.04 440.494 150.56C443.054 146.08 444.334 140.64 444.334 134.24C444.334 127.84 443.107 122.453 440.654 118.08C438.2 113.6 434.947 110.24 430.894 108C426.84 105.76 422.467 104.64 417.774 104.64C413.08 104.64 408.707 105.76 404.654 108C400.707 110.24 397.56 113.6 395.214 118.08C392.867 122.453 391.694 127.84 391.694 134.24C391.694 143.733 394.094 151.093 398.894 156.32C403.8 161.44 409.934 164 417.294 164Z" fill={svgLogoColor} />
                            <path d="M499.325 60V178.4H481.085V60H499.325Z" fill={svgLogoColor} />
                            <path d="M544.552 105.12V153.92C544.552 157.227 545.299 159.627 546.793 161.12C548.393 162.507 551.059 163.2 554.793 163.2H565.992V178.4H551.592C543.379 178.4 537.086 176.48 532.712 172.64C528.339 168.8 526.152 162.56 526.152 153.92V105.12H515.753V90.24H526.152V68.32H544.552V90.24H565.992V105.12H544.552Z" fill={svgLogoColor} />
                            <path d="M576.724 122.56C576.724 111.68 579.23 101.92 584.244 93.28C589.364 84.64 596.244 77.92 604.884 73.12C613.63 68.2133 623.177 65.76 633.524 65.76C645.364 65.76 655.87 68.6933 665.044 74.56C674.324 80.32 681.044 88.5333 685.204 99.2H663.284C660.404 93.3333 656.404 88.96 651.284 86.08C646.164 83.2 640.244 81.76 633.524 81.76C626.164 81.76 619.604 83.4133 613.844 86.72C608.084 90.0267 603.55 94.7733 600.244 100.96C597.044 107.147 595.444 114.347 595.444 122.56C595.444 130.773 597.044 137.973 600.244 144.16C603.55 150.347 608.084 155.147 613.844 158.56C619.604 161.867 626.164 163.52 633.524 163.52C640.244 163.52 646.164 162.08 651.284 159.2C656.404 156.32 660.404 151.947 663.284 146.08H685.204C681.044 156.747 674.324 164.96 665.044 170.72C655.87 176.48 645.364 179.36 633.524 179.36C623.07 179.36 613.524 176.96 604.884 172.16C596.244 167.253 589.364 160.48 584.244 151.84C579.23 143.2 576.724 133.44 576.724 122.56Z" fill={svgLogoColor} />
                            <path d="M700.474 133.92C700.474 125.067 702.287 117.227 705.914 110.4C709.647 103.573 714.66 98.2933 720.954 94.56C727.354 90.72 734.394 88.8 742.074 88.8C749.007 88.8 755.034 90.1867 760.154 92.96C765.38 95.6267 769.54 98.9867 772.634 103.04V90.24H791.034V178.4H772.634V165.28C769.54 169.44 765.327 172.907 759.994 175.68C754.66 178.453 748.58 179.84 741.754 179.84C734.18 179.84 727.247 177.92 720.954 174.08C714.66 170.133 709.647 164.693 705.914 157.76C702.287 150.72 700.474 142.773 700.474 133.92ZM772.634 134.24C772.634 128.16 771.354 122.88 768.794 118.4C766.34 113.92 763.087 110.507 759.034 108.16C754.98 105.813 750.607 104.64 745.914 104.64C741.22 104.64 736.847 105.813 732.794 108.16C728.74 110.4 725.434 113.76 722.874 118.24C720.42 122.613 719.194 127.84 719.194 133.92C719.194 140 720.42 145.333 722.874 149.92C725.434 154.507 728.74 158.027 732.794 160.48C736.954 162.827 741.327 164 745.914 164C750.607 164 754.98 162.827 759.034 160.48C763.087 158.133 766.34 154.72 768.794 150.24C771.354 145.653 772.634 140.32 772.634 134.24Z" fill={svgLogoColor} />
                            <path d="M833.231 103.04C835.898 98.56 839.418 95.0933 843.791 92.64C848.271 90.08 853.551 88.8 859.631 88.8V107.68H854.991C847.845 107.68 842.405 109.493 838.671 113.12C835.045 116.747 833.231 123.04 833.231 132V178.4H814.991V90.24H833.231V103.04Z" fill={svgLogoColor} />
                            <path d="M897.677 105.12V153.92C897.677 157.227 898.424 159.627 899.917 161.12C901.517 162.507 904.184 163.2 907.917 163.2H919.117V178.4H904.718C896.504 178.4 890.211 176.48 885.838 172.64C881.464 168.8 879.278 162.56 879.278 153.92V105.12H868.878V90.24H879.278V68.32H897.677V90.24H919.117V105.12H897.677Z" fill={svgLogoColor} />
                        </svg>
                    </Link>
                </div>

                <div
                    className="  gt-tab:flex hidden  z-40 flex-wrap items-center gap-4 mx-auto w-[60%]  " >
                    <div className=' head_foot_cont max-w-[1440px] flex flex-wrap justify-center items-center gt-tab:p-0 mx-auto w-full ' id='collapseMenu' >
                        <ul
                            className='gt-tab:flex hidden gap-[40px] max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
                            <li className=' '>
                                <NavLink to='/' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ` relative font-primary text-[18px]/[24px] font-[300]  text-${navLinksAndIconsColor}  tracking-[0.5px]  `} >Home</NavLink>
                            </li>
                            <li className=' '>
                                <NavLink to='/about-us' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ` relative font-primary text-[18px]/[24px] font-[300]  text-${navLinksAndIconsColor}  tracking-[0.5px] `} >About Us</NavLink>
                            </li>
                            <li className=' '>
                                <NavLink to='/blogs' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ` relative font-primary text-[18px]/[24px] font-[300]  text-${navLinksAndIconsColor}  tracking-[0.5px] `} >Blogs</NavLink>
                            </li>
                            <li className=' '>
                                <NavLink to='/products' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ` relative font-primary text-[18px]/[24px] font-[300]   text-${navLinksAndIconsColor}  tracking-[0.5px] `} >Products</NavLink>
                            </li>
                            <li className=' '>
                                <NavLink to='/contact-us' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ` relative font-primary text-[18px]/[24px] font-[300]  text-${navLinksAndIconsColor}  tracking-[0.5px] `} >Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="iconsCont desktop:w-[20%] gt-tab:w-[15%] flex justify-end gap-[24px]  ">

                    {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Search Icon */}
                    <button
                        onClick={handlerSearchActive}
                        className=" search_btn flex justify-center items-center flex-col relative cursor-pointer "  >
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill={navLinksAndIconsColor} d="M9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.6 5.6q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-5.6-5.6q-.75.6-1.725.95T9.5 16m0-2q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14" /></svg>
                    </button>

                    {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Wishlist Icon */}
                    {/* <button className="wishlist-box flex justify-center items-center flex-col cursor-pointer ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="none" stroke={navLinksAndIconsColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.5 12.572L12 20l-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 1 1 7.5 6.572" /></svg>
                    </button> */}

                    {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Cart Icon */}
                    <Link to='/cart' className="cart-box flex justify-center items-center flex-col relative "  >
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><rect width="24" height="24" fill="none" /><g fill="none" stroke={navLinksAndIconsColor} strokeWidth="1.5"><circle cx="10" cy="19" r="1.5" /><circle cx="17" cy="19" r="1.5" /><path strokeLinecap="round" strokeLinejoin="round" d="M3.5 4h2l3.504 11H17" /><path strokeLinecap="round" strokeLinejoin="round" d="M8.224 12.5L6.3 6.5h12.507a.5.5 0 0 1 .475.658l-1.667 5a.5.5 0 0 1-.474.342z" /></g></svg>
                        {
                            cartProducts && cartProducts.length >= 1 ? <div className=" text-white bg-[var(--primary-color)] text-[13px]/[13px] rounded-[50%] w-[24px] h-[24px] p-0 flex justify-center items-center absolute top-[-14px] right-[-16px]    ">{mainCartItemLen}</div> : null
                        }
                    </Link>
                </div>
            </div>


            {/* >>>>>>>>>>>>>>> Tab/Mobile Header */}
            <div className='mobile_header gt-tab:hidden flex py-[25px] items-center mx-auto tab:px-[30px] px-[20px] w-full ' >
                <div className=" tab:w-[20%] w-[15%] flex items-center " >
                    <button
                        onClick={() => setOpenMenu({ left: "0px", opacity: 1, pointerEvents: "all" })}
                        className=' cursor-pointer '  >
                        <RxHamburgerMenu className=' text-black tab:text-[32px]/[32px] text-[26px]/[26px]  ' />
                    </button>
                </div>

                {/* // Absolute Navbar */}
                <div
                    className=" mob_header_nav w-[100%] h-[100vh] z-[9999] bg-[#0000001f] tab:left-[0px] flex absolute top-0 flex-col justify-start gap-[50px] px-[30px] pt-[100px] pb-[30px]  "
                    style={{ left: 0, opacity: openMenu.opacity, pointerEvents: openMenu.pointerEvents }}
                    onClick={() => setOpenMenu({ left: "-540px", opacity: 0, pointerEvents: "none" })}
                >
                    <div
                        className=" mob_header_nav_inside overflow-y-scroll w-[85%] h-[100vh] z-[9999] bg-white tab:left-[0px] flex absolute top-0 flex-col justify-start tab:pt-[60px] tab:pb-[60px] pt-[30px] pb-[50px]  "
                        style={{ left: openMenu.left, opacity: openMenu.opacity, pointerEvents: openMenu.pointerEvents }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* >>>>>>>>>>>>>>>>>>>>>>> Close btn */}
                        <button
                            onClick={() => setOpenMenu({ left: "-540px", opacity: 0, pointerEvents: "none" })}
                            className='w-fit absolute tab:top-[60px] top-[40px] right-[30px] cursor-pointer  ' >
                            <TfiClose className=' text-black tab:text-[35px]/[35px]  text-[25px]/[25px]  ' />
                        </button>

                        <div className=" tab:px-[45px] px-[35px] ">
                            <Link to="/" >
                                <img src={logo} alt="logo" className=' tab:w-[250px] w-[160px] ' />
                            </Link>
                        </div>

                        <nav className='mob_nav ' >
                            <ul className=' flex flex-col ' >
                                <li className='  '>
                                    <NavLink to='/about-us' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "font-[300]  font-primary text-black  text-[18px]/[26px]  "} >
                                        <span>About Us</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                        </svg>
                                    </NavLink>
                                </li>

                                <li className='  '>
                                    <NavLink to='/products' className={({ isActive, isPending }) => {
                                        if (isActive && query == null) {
                                            return isPending ? "pending" : isActive ? "active" : "font-[300]  font-primary text-black  text-[18px]/[26px]  "
                                        }
                                    }} >
                                        <span>Shop All</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                        </svg>
                                    </NavLink>
                                </li>

                                <ul>
                                    <li className='  '>
                                        <NavLink to='/products?category=covers_and_cases' className={({ isActive, isPending }) => {
                                            if (isActive && query == "covers_and_cases") {
                                                return isPending ? "pending" : isActive ? "active" : "font-[300]  font-primary text-black  text-[18px]/[26px]  "
                                            }
                                        }} >
                                            <span>Cover and Cases</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                            </svg>
                                        </NavLink>
                                    </li>

                                    <li className='  '>
                                        <NavLink to='/products?category=power_bank' className={({ isActive, isPending }) => {
                                            if (isActive && query == "power_bank") {
                                                return isPending ? "pending" : isActive ? "active" : "font-[300]  font-primary text-black  text-[18px]/[26px]  "
                                            }
                                        }} >
                                            <span>Power Banks</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                            </svg>
                                        </NavLink>
                                    </li>

                                    <li className='  '>
                                        <NavLink to='/products?category=stand_and_straps' className={({ isActive, isPending }) => {
                                            if (isActive && query == "stand_and_straps") {
                                                return isPending ? "pending" : isActive ? "active" : "font-[300]  font-primary text-black  text-[18px]/[26px]  "
                                            }
                                        }} >
                                            <span>Stand and Straps</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                            </svg>
                                        </NavLink>
                                    </li>
                                </ul>

                                <li className='  '>
                                    <NavLink to='/blogs' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "font-[300]  font-primary text-black  text-[18px]/[26px]  "} >
                                        <span>Blogs</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                        </svg>
                                    </NavLink>
                                </li>

                                <li className=' py-[10px] '>
                                    <NavLink to='/contact-us' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "font-[300]  font-primary text-black  text-[18px]/[26px]  "} >
                                        <span>Contact</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                        </svg>
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>

                        <div className=" tab:px-[45px] px-[35px] flex flex-col gap-[20px] " >
                            <Link
                                to="/help-and-support"
                                className=' w-fit  '
                            >
                                <button className='  w-fit flex items-center justify-start gap-[16px] cursor-pointer  '  >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-question-circle" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                        <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94" />
                                    </svg>
                                    <span className=' text-[16px]/[24px] font-[400] ' >Get Help</span>
                                </button>
                            </Link>

                            <Link
                                to="/cart"
                                className=' w-fit  '
                            >
                                <button className=' w-fit flex items-center justify-start gap-[16px] cursor-pointer '  >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                                    </svg>
                                    <span className=' text-[16px]/[24px] font-[400] ' >Cart</span>
                                </button>

                            </Link>
                        </div>
                    </div>
                </div>

                <div className="logoCont tab:w-[60%] w-[60%] flex justify-center  ">
                    <Link to="/" >
                        <img src={logo} alt="logo" className=' tab:w-[200px] w-[130px] ' />
                    </Link>
                </div>

                <div className="iconsCont tab:w-[20%] w-[25%] flex justify-end tab:gap-[24px] gap-[10px]  ">
                    {/* >>>>>>>>>>>>>>>>>> Search Tab Icon */}
                    <button
                        onClick={handlerSearchActiveTab}
                        className="cart-box tab:flex hidden justify-center items-center flex-col relative cursor-pointer  "
                    >
                        <svg className=' tab:w-[34px]  w-[24px] ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="black" d="M9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.6 5.6q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-5.6-5.6q-.75.6-1.725.95T9.5 16m0-2q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14" /></svg>
                    </button>

                    {/* >>>>>>>>>>>>>>>>>> Search Mob Icon */}
                    <button
                        onClick={handlerSearchActiveMobile}
                        className="cart-box tab:hidden flex justify-center items-center flex-col relative cursor-pointer  "
                    >
                        <svg className=' tab:w-[34px]  w-[24px] ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="black" d="M9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.6 5.6q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-5.6-5.6q-.75.6-1.725.95T9.5 16m0-2q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14" /></svg>
                    </button>

                    {/* >>>>>>>>>>>>>>>>>> Wishlist Icon */}
                    {/* <button className="wishlist-box flex justify-center items-center flex-col cursor-pointer ">
                        <svg className=' tab:w-[30px]  w-[22px] ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.5 12.572L12 20l-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 1 1 7.5 6.572" /></svg>
                    </button> */}

                    {/* >>>>>>>>>>>>>>>>>> Cart Icon */}
                    <Link to='/cart' className="cart-box flex justify-center items-center flex-col relative "  >
                        <svg className=' tab:w-[34px]  w-[24px] ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect width="24" height="24" fill="none" /><g fill="none" stroke="black" strokeWidth="1.5"><circle cx="10" cy="19" r="1.5" /><circle cx="17" cy="19" r="1.5" /><path strokeLinecap="round" strokeLinejoin="round" d="M3.5 4h2l3.504 11H17" /><path strokeLinecap="round" strokeLinejoin="round" d="M8.224 12.5L6.3 6.5h12.507a.5.5 0 0 1 .475.658l-1.667 5a.5.5 0 0 1-.474.342z" /></g></svg>
                        {
                            cartProducts && cartProducts.length >= 1 ? <div className=" text-white bg-[var(--primary-color)] text-[13px]/[13px] rounded-[50%] w-[24px] h-[24px] p-0 flex justify-center items-center absolute top-[-14px] right-[-16px]    ">{mainCartItemLen}</div> : null
                        }
                    </Link>
                </div>
            </div >

            <SearchBar
                searchBoxOpen={searchBoxOpen}
                setSearchBoxOpen={setSearchBoxOpen}
                setHeaderBg={setHeaderBg}
                setSvgLogoColor={setSvgLogoColor}
                setNavLinksAndIconsColor={setNavLinksAndIconsColor}
                setScrolledHeader={setScrolledHeader}
            />

        </header >
    )
}

export default Header;