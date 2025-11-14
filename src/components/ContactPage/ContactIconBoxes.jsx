import { FaPhone } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"
import { MdEmail } from "react-icons/md"



const ContactIconBoxes = () => {
    return (
        <div className=" contact_icon_boxes w-[100%] flex flex-col justify-center gap-[50px] lg:gap-[75px]   ">

            <div className="w-full flex gt-tab:gap-y-[30px] gt-tab:gap-x-0 tab:gap-y-[40px] gap-y-[25px] tab:gap-x-[20px] flex-wrap ">

                <div className=" cont_icon_box gt-tab:w-full tab:w-[48%] relative flex tab:gap-[15px] gap-[12px] " >
                    <FaLocationDot className=" w-[20px] h-[20px] " />
                    <div className="">
                        <h5 className="font-primary font-[500] text-[20px]/[20px] pb-[10px] ">Location Address</h5>
                        {/* <p className="font-body font-[400] text-[16px] ">
                            Shop No. 2, near Cement Bridge, Baramulla, <br className=' gt-tab:block hidden  ' />Jammu and Kashmir 193101
                        </p> */}
                        <p className="font-body font-[400] text-[16px] ">
                            Vinoba Bhave Nagar, Kurla (West), <br className=' gt-tab:block hidden  ' />Mumbai - 400070, Maharashtra
                        </p>
                    </div>
                </div>

                <div className=" cont_icon_box gt-tab:w-full tab:w-[48%] relative flex tab:gap-[15px] gap-[12px] " >
                    <FaPhone className=" w-[20px] h-[20px]  rotate-90  " />
                    <div className=" " >
                        <h5 className="font-primary font-[500] text-[20px]/[20px] pb-[10px] " >Connect over a call</h5>
                        <a className='font-body font-[400] text-[16px]/[22px] pb-[8px] ' href="tel:+91 9987034815">+91 9987034815</a>
                        <a className='font-body font-[400] text-[16px]/[22px] ' href="tel:+91 8454896170">+91 8454896170</a>
                    </div>
                </div>

                <div className=" cont_icon_box gt-tab:w-full relative flex tab:gap-[15px] gap-[12px] " >
                    <MdEmail className=" w-[20px] h-[20px] " />
                    <div className="  " >
                        <h5 className="font-primary font-[500] text-[20px]/[20px] pb-[10px] ">Contact via email</h5>
                        <a className='font-body font-[400] text-[16px] ' href="mailto:info.voltcartt@gmail.com">info.voltcartt@gmail.com</a>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ContactIconBoxes
