import logo from '../../../assets/logo.svg';
import paymentOptImgs from '../../../assets/Footer/payment_gateway_options.png'

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import { FiPhone } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";

import { CiLocationOn } from "react-icons/ci";

import { Link } from 'react-router-dom';


const TopFooter = () => {
    return (
        // <footer className=" w-full bg-white border-[#b9b9b9] border-t " >
        <footer className=" w-full border-[#b9b9b9] border-t border-b " >
            <div
                // 1440 Not Working => max-w-[1440px]
                className=" head_foot_cont_full w-full max-w-[1400px] mx-auto flex desktop:flex-nowrap gt-tab:flex-wrap flex-wrap  gt-tab:gap-[40px] tab:gap-[40px] gap-x-0 gap-y-[25px] pt-[40px] pb-[50px] desktop:px-[50px] gt-tab:px-[30px] tab:px-[30px] px-[20px] " >

                <div className="columns cols-1 desktop:w-[50%] gt-tab:w-[50%] tab:w-[45%] w-full flex flex-col gap-[15px] ">
                    <Link to='/' ><img src={logo} alt="logo" className='max-w-[170px] ' /></Link>
                    <p className='text-para-black font-[400] text-[16px]/[22px] desktop:w-full gt-tab:w-[75%] w-full  ' >Best information about the company gies here but now lorem ipsum is</p>
                    <div className="socials flex gap-x-[20px] ">

                        <a href="#" className=' flex justify-center items-center rounded-[50px] cursor-pointer transition-all ' >
                            <FaFacebookF className='text-[22px]/[22px] h-fit fill-para-black ' />
                        </a>

                        <a href="#" className=' flex justify-center items-center rounded-[50px] cursor-pointer transition-all ' >
                            <FaTwitter className='text-[22px]/[22px] h-fit fill-para-black ' />
                        </a>

                        <a href="#" className=' flex justify-center items-center rounded-[50px] cursor-pointer transition-all ' >
                            <FaLinkedinIn className='text-[22px]/[22px] h-fit fill-para-black ' />
                        </a>

                        <a href="#" className=' flex justify-center items-center rounded-[50px] cursor-pointer transition-all ' >
                            <FaInstagram className='text-[22px]/[22px] h-fit fill-para-black ' />
                        </a>

                        <a href="#" className=' flex justify-center items-center rounded-[50px] cursor-pointer transition-all ' >
                            <FaYoutube className='text-[22px]/[22px] h-fit fill-para-black ' />
                        </a>
                        {/* bg-[#BDC4CD] */}

                    </div>
                </div>

                <div className="columns cols-2 desktop:w-[20%] gt-tab:w-[20%] tab:w-[20%] w-[48%] " >
                    <h4 className='text-[#1C1C1C] font-[600] text-[16px]/[22px] pb-[12px]   ' >Quick Links</h4>
                    <ul className='flex flex-col gap-[7px] ' >

                        <li className=' text-para-black  font-[400] text-[16px]/[22px] transition-all ' >
                            <Link to="/about-us">About Us</Link>
                        </li>
                        <li className=' text-text-para-black  font-[400] text-[16px]/[22px] transition-all '  >
                            <Link to="/blogs">Blogs</Link>
                        </li>
                        <li className=' text-text-para-black  font-[400] text-[16px]/[22px] transition-all ' >
                            <Link to="/products">Products</Link>
                        </li>
                        <li className=' text-text-para-black  font-[400] text-[16px]/[22px] transition-all '  >
                            <Link to="/contact">Contact</Link>
                        </li>

                    </ul>
                </div>

                <div className="columns cols-2 desktop:w-[30%] gt-tab:w-[20%] tab:w-[20%] w-[47%] " >
                    <h4 className='text-[#1C1C1C] font-[600] text-[16px]/[22px] pb-[12px]   ' >Help</h4>
                    <ul className='flex flex-col gap-[7px] ' >

                        <li className=' text-para-black   font-[400] text-[16px]/[22px] transition-all '  >
                            <Link to="/privacy-policy">Privacy Policy</Link>
                        </li>
                        <li className=' text-para-black   font-[400] text-[16px]/[22px] transition-all '  >
                            <Link to="/cancellation-policy">Cancellation Policy</Link>
                        </li>
                        <li className=' text-para-black   font-[400] text-[16px]/[22px] transition-all '  >
                            <Link to="/terms-of-use">Terms of Use</Link>
                        </li>
                        <li className=' text-para-black   font-[400] text-[16px]/[22px] transition-all '  >
                            <Link to="/shipping-policy" >Shipping Policy</Link>
                        </li>

                    </ul>
                </div>

                <div className="columns cols-2 desktop:w-[40%] gt-tab:w-[50%] tab:w-[45%] ">
                    <h4 className='text-[#1C1C1C] font-[600] text-[16px]/[22px] pb-[12px]   ' >Contact</h4>
                    <ul className='flex flex-col gap-[14px] contact_info ' >
                        <li className=' text-para-black  font-[400] text-[16px]/[22px] flex justify-start items-center gap-[10px] transition-all ' >
                            <svg className='fill-para-black w-[25px] ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M224.2 89C216.3 70.1 195.7 60.1 176.1 65.4L170.6 66.9C106 84.5 50.8 147.1 66.9 223.3C104 398.3 241.7 536 416.7 573.1C493 589.3 555.5 534 573.1 469.4L574.6 463.9C580 444.2 569.9 423.6 551.1 415.8L453.8 375.3C437.3 368.4 418.2 373.2 406.8 387.1L368.2 434.3C297.9 399.4 241.3 341 208.8 269.3L253 233.3C266.9 222 271.6 202.9 264.8 186.3L224.2 89z" /></svg>
                            <a href="tel:+918787878787">+91 8787878787</a>
                        </li>
                        <li className=' text-para-black  font-[400] text-[16px]/[22px] flex justify-start items-center gap-[10px] transition-all ' >
                            <svg className='fill-para-black w-[25px] ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M112 128C85.5 128 64 149.5 64 176C64 191.1 71.1 205.3 83.2 214.4L291.2 370.4C308.3 383.2 331.7 383.2 348.8 370.4L556.8 214.4C568.9 205.3 576 191.1 576 176C576 149.5 554.5 128 528 128L112 128zM64 260L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 260L377.6 408.8C343.5 434.4 296.5 434.4 262.4 408.8L64 260z" /></svg>
                            <a href="mailto:mail@mail.com">mail@mail.com</a>
                        </li>
                        <li className=' text-para-black font-[400] text-[16px]/[22px] flex justify-start items-start gap-[10px] ' >
                            <svg className='fill-para-black w-[30px] ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M128 252.6C128 148.4 214 64 320 64C426 64 512 148.4 512 252.6C512 371.9 391.8 514.9 341.6 569.4C329.8 582.2 310.1 582.2 298.3 569.4C248.1 514.9 127.9 371.9 127.9 252.6zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z" /></svg>
                            <span>13th Street 47 W 13th St, New York, NY 10011, USA</span>
                        </li>
                    </ul>
                </div>

                <div className="columns cols-2 desktop:w-[30%] gt-tab:w-[30%]  tab:w-[40%]  ">
                    <h4 className='text-[#1C1C1C] font-[600] text-[16px]/[22px] pb-[12px] ' >Payment Options</h4>
                    <img src={paymentOptImgs} alt="" />
                </div>

            </div>
        </footer>
    )
}

export default TopFooter