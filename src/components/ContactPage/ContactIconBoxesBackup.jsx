import { FaPhone } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"
import { MdEmail } from "react-icons/md"



const ContactIconBoxesBackup = () => {
    return (

        <div className=" contact_icon_boxes w-[100%] flex flex-col justify-center gap-[50px] lg:gap-[75px] desktop:pt-[140px] desktop:pb-[100px]  gt-tab:pt-[120px]  gt-tab:pb-[80px]  pt-[105px] pb-[60px] ">



            <div className="w-[100%] md:w-[100%] flex gap-[70px] md:gap-[20px] lg:flex-row flex-wrap">

                <div className="group w-[100%] md:w-[46%] lg:w-[32%] text-center pt-[70px] pb-[30px] px-[20px] rounded-[12px] relative " >
                    <div className="w-fit iconStyle transition-all duration-300 ease-in-out">
                        <FaLocationDot className="w-[30px] h-[30px] transition-all duration-300 ease-in-out  " />
                    </div>
                    <h5 className="font-primary font-[500] text-[20px] pb-[10px] ">Location Address</h5>
                    <p className="font-body font-[400] text-[16px] ">
                        Shop No. 2, near Cement Bridge, Baramulla, Jammu and Kashmir 193101
                    </p>
                </div>

                <div className="group w-[100%] md:w-[46%] lg:w-[32%]  text-center  pt-[70px] pb-[30px] px-[20px] rounded-xl relative transition-all duration-300 ease-in-out">
                    <div className="w-fit iconStyle transition-all duration-300 ease-in-out">
                        <FaPhone className="w-[30px] h-[30px]  rotate-90 transition-all duration-300 ease-in-out  " />
                    </div>
                    <h5 className="font-primary font-[500] text-[22px] pb-[10px] " >Connect over call</h5>
                    <a className='font-body font-[400] text-[16px]  ' href="tel:+91 8454896170">+91 84548-96170</a>
                </div>

                <div className="group w-[100%] md:w-[46%] lg:w-[32%] text-center pt-[70px] pb-[30px] px-[20px] rounded-xl relative transition-all duration-300 ease-in-out">

                    <div className="w-fit iconStyle transition-all duration-300 ease-in-out">
                        <MdEmail className="w-[30px] h-[30px] transition-all duration-300 ease-in-out  " />
                    </div>
                    <h5 className="font-primary font-[500] text-[22px] pb-[10px] ">Contact via mail</h5>
                    <a className='font-body font-[400] text-[16px]  ' href="mailto:tausif8454@gmail.com">tausif8454@gmail.com</a>
                </div>

            </div>

        </div>
    )
}

export default ContactIconBoxesBackup