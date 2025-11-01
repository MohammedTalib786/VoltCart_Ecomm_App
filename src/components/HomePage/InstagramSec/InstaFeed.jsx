
import { FaInstagram } from "react-icons/fa";
import './instaFeed.css'

import placeholderImg from '../../../assets/placeholder_img.png'

const InstaFeed = () => {
    return (

        <div className="flex flex-col py-[50px] gap-[16px] items-center ">

            <h3 className='uppercase text-[32px]/[40px] ' >SHOP OUR INSTA</h3>

            <div className="cont flex gap-[20px]  ">

                <div className="insta_box w-full cursor-pointer relative ">
                    <img
                        src={placeholderImg}
                        className='h-[320px] object-cover w-full '
                    />
                    <FaInstagram
                        className=' icon_insta text-[65px] text-white mx-auto  '
                    />
                </div>

                <div className="insta_box w-full cursor-pointer relative ">
                    <img
                        src={placeholderImg}
                        className='h-[320px] object-cover w-full '
                    />
                    <FaInstagram
                        className=' icon_insta text-[65px] text-white mx-auto  '
                    />
                </div>

                <div className="insta_box w-full cursor-pointer relative ">
                    <img
                        src={placeholderImg}
                        className='h-[320px] object-cover w-full '
                    />
                    <FaInstagram
                        className=' icon_insta text-[65px] text-white mx-auto  '
                    />
                </div>

                <div className="insta_box w-full cursor-pointer relative ">
                    <img
                        src={placeholderImg}
                        className='h-[320px] object-cover w-full '
                    />
                    <FaInstagram
                        className=' icon_insta text-[65px] text-white mx-auto  '
                    />
                </div>

                <div className="insta_box w-full cursor-pointer relative ">
                    <img
                        src={placeholderImg}
                        className='h-[320px] object-cover w-full '
                    />
                    <FaInstagram
                        className=' icon_insta text-[65px] text-white mx-auto  '
                    />
                </div>

            </div>
        </div>
    )
}

export default InstaFeed