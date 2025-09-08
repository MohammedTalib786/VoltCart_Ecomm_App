import React from 'react'
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
            <div className="main-cont flex items-center gap-[60px] w-full py-[100px]">

                <div className="img w-[40%]">
                    <img className='w-full h-[550px] object-cover ' src={mission} alt="Hand holding mobile" />
                </div>

                <div className="contnt w-[60%] flex flex-col gap-[40px] ">

                    <div className="flex flex-col gap-[25px]">
                        <h3 className="font-montserrat text-[42px]/[38px] font-[400] text-black">Our Vision</h3>
                        <p className="font-poppins text-[18px]/[26px] font-[400]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aliquid magni ullam quas, minima sed repellat error voluptas fugiat doloremque cupiditate illo reiciendis nemo odit architecto laborum id rem. Nemo ipsa labore inventore! Illum quod explicabo saepe ducimus expedita repellendus inventore ipsa ea libero voluptatem molestias. </p>
                    </div>

                    <div className="flex flex-col gap-[25px] ">

                        <h3 className="font-montserrat text-[42px]/[38px] font-[400] text-black">Our Values</h3>

                        <div className="flex flex-row justify-between gap-[30px] py-[30px]">
                            <div className=" w-[30%] flex flex-col justify-center items-center gap-[20px] ">
                                {/* <BsPatchCheck className='text-[50px] fill-[#0d6efd]' /> */}
                                <MdOutlineWorkspacePremium className='text-[70px] fill-[#0d6efd]' />
                                <p className="font-montserrat text-[22px]/[28px] font-[500] text-center " >Premium <br />Quality</p>
                            </div>
                            <div className=" w-[30%] flex flex-col justify-center items-center gap-[20px] ">
                                {/* <HiLink className='text-[50px] fill-[#0d6efd]' /> */}
                                <FaShieldAlt className='text-[60px] fill-[#0d6efd]' />
                                <p className="font-montserrat text-[22px]/[28px] font-[500] text-center " >Life Long <br />Duarability</p>
                            </div>
                            <div className="w-[30%] flex flex-col justify-center items-center gap-[20px] " >
                                {/* <BsTrophy className='text-[50px] fill-[#0d6efd]' /> */}
                                {/* <BsBoxSeam className='text-[50px] fill-[#0d6efd]' /> */}
                                <BsBoxSeamFill className='text-[60px] fill-[#0d6efd]' />
                                <p className="font-montserrat text-[22px]/[28px] font-[500] text-center " >Fine <br />Product</p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default AboutVissionMission