import logo from '../../../assets/logo.svg';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import paymentOptImgs from '../../../assets/Footer/payment_gateway_options.png'
import { FiPhone } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa";

import { SlLocationPin } from "react-icons/sl";
import { CiLocationOn } from "react-icons/ci";
import { Link } from 'react-router-dom';


const TopFooter = () => {
    return (
        // <footer className=" w-full bg-white border-[#b9b9b9] border-t " >
        <footer className=" w-full border-[#b9b9b9] border-t border-b " >
            <div className=" head_foot_cont_full w-full max-w-[1440px] mx-auto  flex gt-tab:flex-nowrap flex-wrap  gt-tab:gap-[50px] tab:gap-[40px]  gap-x-0 gap-y-[25px]  pt-[40px] pb-[50px] gt-tab:px-[50px] tab:px-[30px] px-[20px]  "  >

                <div className="columns cols-1 tab:w-[45%] gt-tab:w-full w-full flex flex-col gap-[15px] ">
                    <Link to='/' ><img src={logo} alt="logo" className='max-w-[170px] ' /></Link>
                    <p className='text-para-black font-[400] text-[16px]/[22px]  ' >Best information about the company gies here but now lorem ipsum is</p>
                    <div className="socials flex gap-[11px] ">

                        <button className=' bg-[#BDC4CD] w-[32px] h-[32px] flex justify-center items-center rounded-[50px] cursor-pointer transition-all ' >
                            <FaFacebookF className='text-[18px]/[18px] h-fit fill-white ' />
                        </button>

                        <button className=' bg-[#BDC4CD] w-[32px] h-[32px] flex justify-center items-center rounded-[50px] cursor-pointer transition-all ' >
                            <FaTwitter className='text-[18px]/[18px] h-fit fill-white ' />
                        </button>

                        <button className=' bg-[#BDC4CD] w-[32px] h-[32px] flex justify-center items-center rounded-[50px] cursor-pointer transition-all ' >
                            <FaLinkedinIn className='text-[18px]/[18px] h-fit fill-white ' />
                        </button>

                        <button className=' bg-[#BDC4CD] w-[32px] h-[32px] flex justify-center items-center rounded-[50px] cursor-pointer transition-all ' >
                            <FaInstagram className='text-[18px]/[18px] h-fit fill-white ' />
                        </button>

                        <button className=' bg-[#BDC4CD] w-[32px] h-[32px] flex justify-center items-center rounded-[50px] cursor-pointer transition-all ' >
                            <FaYoutube className='text-[18px]/[18px] h-fit fill-white ' />
                        </button>

                    </div>
                </div>

                <div className="columns cols-2  gt-tab:w-[50%] tab:w-[20%] w-[48%] " >
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

                <div className="columns cols-2 tab:w-[20%] gt-tab:w-[50%]  w-[47%] " >
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

                <div className="columns cols-2  gt-tab:w-[80%] tab:w-[45%] ">
                    <h4 className='text-[#1C1C1C] font-[600] text-[16px]/[22px] pb-[12px]   ' >Contact</h4>
                    <ul className='flex flex-col gap-[14px] ' >
                        <li className=' text-para-black  font-[400] text-[16px]/[22px] flex justify-start items-center gap-[10px] transition-all ' >
                            <FiPhone className='text-[20px]/[20px]  h-fit ' />
                            <a className='  ' href="tel:+918787878787">+91 8787878787</a>
                        </li>
                        <li className=' text-para-black  font-[400] text-[16px]/[22px] flex justify-start items-center gap-[10px] transition-all ' >
                            <FaRegEnvelope className='text-[20px]/[20px]  h-fit ' />
                            <a href="mailto:mail@mail.com">mail@mail.com</a>
                        </li>
                        <li className=' text-para-black font-[400] text-[16px]/[22px] flex justify-start items-start gap-[10px] ' >
                            <SlLocationPin className=' difLocation_icon_footer text-[24px]/[24px] tab:text-[33px]/[33px] gt-tab:text-[33px]/[33px] h-fit ' />
                            <span>13th Street 47 W 13th St, New York, NY 10011, USA</span>
                        </li>
                    </ul>
                </div>

                <div className="columns  cols-2 gt-tab:w-[80%]  tab:w-[40%]  ">
                    <h4 className='text-[#1C1C1C] font-[600] text-[16px]/[22px] pb-[12px] ' title='Need to use new image later ' >Payment Options</h4>
                    <img src={paymentOptImgs} alt="" />
                </div>
            </div>
        </footer>
    )
}

export default TopFooter


