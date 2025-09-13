import mission from '../../assets/about-page/revised-img/vision_mission.jpg'

import { BsPatchCheck } from "react-icons/bs";
import { MdOutlineWorkspacePremium } from "react-icons/md";

import { HiLink } from "react-icons/hi";
import { FaShieldAlt } from "react-icons/fa";

import { BsTrophy } from "react-icons/bs";
import { BsBoxSeam } from "react-icons/bs";
import { BsBoxSeamFill } from "react-icons/bs";


const AboutVissionMission = () => {
    return (
        <div className="container_layout">

            <div className="main-cont flex items-center desktop:gap-[60px] tab:gap-[40px] gap-[30px] w-full gt-tab:py-[100px] tab:py-[80px] py-[60px] gt-tab:flex-row tab:flex-col flex-col " >

                <div className="img desktop:w-[40%] gt-tab:w-[50%] tab:w-[100%] " >
                    <img className='w-full desktop:h-[550px] gt-tab:h-[550px] tab:h-[720px] h-auto object-cover ' src={mission} alt="Hand holding mobile" />
                </div>

                <div className="contnt desktop:w-[60%] gt-tab:w-[50%] tab:w-[100%] flex flex-col desktop:gap-[40px] gt-tab:gap-[40px] gap-[30px]  " >

                    <div className="flex flex-col  tab:gap-[20px] gap-[8px]">
                        <h3 className="font-montserrat tab:text-[42px]/[50px] text-[32px]/[40px] font-[400] text-black">Our Vision</h3>
                        <p className=" text-para-black font-poppins text-[16px]/[26px] font-[400]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aliquid magni ullam quas, minima sed repellat error voluptas fugiat doloremque cupiditate illo reiciendis nemo odit architecto laborum id rem. Nemo ipsa labore inventore! Illum quod explicabo saepe ducimus expedita repellendus inventore ipsa ea libero voluptatem molestias. </p>
                    </div>

                    <div className="flex flex-col tab:gap-[25px] gap-[10px] ">

                        <h3 className="font-montserrat tab:text-[42px]/[50px] text-[32px]/[40px] font-[400] text-black">Our Values</h3>

                        <div className="flex flex-row tab:flex-nowrap flex-wrap justify-between tab:gap-[30px] gap-y-[30px]  ">
                            <div className=" tab:w-[30%] w-[50%] flex flex-col justify-center items-center gap-[20px] ">
                                <MdOutlineWorkspacePremium className=' desktop:text-[70px] gt-tab:text-[60px] tab:text-[60px] text-[50px] fill-[#0d6efd]' />
                                <p className=" text-para-black font-montserrat text-[22px]/[28px] font-[500] text-center " >Premium <br className=' desktop:block tab:hidden hidden ' />Quality</p>
                            </div>
                            <div className=" tab:w-[30%] w-[50%] flex flex-col justify-center items-center gap-[20px] ">
                                <FaShieldAlt className=' desktop:text-[60px] gt-tab:text-[50px] tab:text-[50px] text-[40px] fill-[#0d6efd]' />
                                <p className=" text-para-black font-montserrat text-[22px]/[28px] font-[500] text-center " >Life Long <br className=' desktop:block tab:hidden hidden ' />Duarability</p>
                            </div>
                            <div className=" tab:w-[30%] w-[50%] flex flex-col justify-center items-center gap-[20px] " >
                                <BsBoxSeamFill className=' desktop:text-[60px] gt-tab:text-[50px] tab:text-[50px] text-[40px]  fill-[#0d6efd]' />
                                <p className=" text-para-black font-montserrat text-[22px]/[28px] font-[500] text-center " >Fine <br className=' desktop:block tab:hidden hidden ' />Product</p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default AboutVissionMission;
