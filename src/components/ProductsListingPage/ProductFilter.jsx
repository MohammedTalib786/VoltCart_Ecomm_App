import { useState } from 'react';
import { motion } from 'framer-motion'
import { TfiClose } from "react-icons/tfi";

import Button from '../FormComp/Button';

import './product-comp-style.css'


const ProductFilter = ({
    minVal,
    maxVal,
    priceFilter,
    setPriceFilter,
    checkValue,
    handleCheckbox
}) => {
    let [filterBox, setFilterBox] = useState({
        pointerEvents: "none",
        top: "400px"
    })

    let [filterBoxCont, setFilterBoxCont] = useState({
        opacity: 0,
        pointerEvents: "none"
    })

    return (
        <>
            {/* >>>>>>>>>>>>>>>>>>>>>>>>>>> Desktop Filter Section */}
            <div
                className=" desktop:w-[25%] gt-tab:w-[30%] w-[45%] sticky gt-tab:top-[110px] top-[130px] left-0 tab:flex hidden  " >
                <div className="cat-search  w-full bg-white px-[20px] py-[30px] rounded-[12px] 
            sticky top-[100px]  ">
                    <h3 className="font-primary font-[400] text-[24px]/[32px]  ">Filter By</h3>
                    <div className="  pt-[12px] px-[10px] pb-[0] " >
                        <h4 className="font-primary font-[500] text-[18px]/[24px]" >Category</h4>
                        <div className="checkbox-cat flex flex-col gap-[15px]  border-black border-b pt-[15px] px-[10px] pb-[25px] " >
                            <div className="chkbox flex flex-row gap-[10px] items-center ">
                                <input
                                    type="checkbox" id="coverCases" name="Covers and Cases"
                                    value="Covers and Cases"
                                    onChange={handleCheckbox}
                                    checked={checkValue.includes("Covers and Cases")}
                                />
                                <label htmlFor="coverCases"
                                    className='font-body font-[400] text-[16px]/[22px] '
                                > Cover and Cases</label>
                            </div>
                            <div className="chkbox flex flex-row gap-[10px] items-center " >
                                <input
                                    type="checkbox" id="powerBanks" name="powerBanks"
                                    value="Power Banks"
                                    onChange={handleCheckbox}
                                    checked={checkValue.includes("Power Banks")}
                                />
                                <label htmlFor="powerBanks"
                                    className='font-body font-[400] text-[16px]/[22px] '
                                >Power Banks</label>
                            </div>
                            <div className="chkbox flex flex-row gap-[10px] items-center " >
                                <input
                                    type="checkbox" id="belts" name="belts"
                                    value="Stand and Straps"
                                    onChange={handleCheckbox}
                                    checked={checkValue.includes("Stand and Straps")}
                                />
                                <label htmlFor="belts"
                                    className='font-body font-[400] text-[16px]/[22px] '
                                >Stand and Straps</label>
                            </div>
                        </div>
                        <h4 className="font-primary font-[500] text-[18px]/[24px] pt-[20px] " >Price</h4>
                        <div className=" px-[10px] pt-[10px] ">
                            <input
                                type="range" className="slider"
                                min={minVal ?? 0}
                                max={maxVal ?? 0}
                                value={priceFilter ?? 0}
                                onChange={(e) => setPriceFilter(Number(e.target.value))}
                            />
                            <div className=" w-full flex justify-between pt-[15px] ">
                                <span className='font-body font-[400] text-[16px]/[22px] ' >&#8377;{minVal ?? 0}</span>
                                <span className='font-body font-[400] text-[16px]/[22px] ' >&#8377;{priceFilter}</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <Button
                text="Filter By"
                additionalClass=" filter_by_mob_btn tab:hidden flex "
                btnIcon={<svg className="w-[20px] h-[20px] " viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M640 288a64 64 0 1 1 0.032-128.032A64 64 0 0 1 640 288z m123.456-96c-14.304-55.04-64-96-123.456-96s-109.152 40.96-123.456 96H128v64h388.544c14.304 55.04 64 96 123.456 96s109.152-40.96 123.456-96H896V192h-132.544zM640 864a64 64 0 1 1 0.032-128.032A64 64 0 0 1 640 864m0-192c-59.456 0-109.152 40.96-123.456 96H128v64h388.544c14.304 55.04 64 96 123.456 96s109.152-40.96 123.456-96H896v-64h-132.544c-14.304-55.04-64-96-123.456-96M384 576a64 64 0 1 1 0.032-128.032A64 64 0 0 1 384 576m0-192c-59.456 0-109.152 40.96-123.456 96H128v64h132.544c14.304 55.04 64 96 123.456 96s109.152-40.96 123.456-96H896v-64H507.456c-14.304-55.04-64-96-123.456-96" fill="white" /></svg>}
                handlerClickBtnComp={() => {
                    setFilterBox({
                        pointerEvents: "all",
                        top: "0px"
                    });
                    setFilterBoxCont({
                        opacity: 1,
                        pointerEvents: "all"
                    })
                }}
            />

            {/* >>>>>>>>>>>>>>>>>>>>>>>>>>> Mobile Filter Section */}
            <motion.div
                className=" mob_filter desktop:w-[25%] gt-tab:w-[30%] w-[100%] tab:hidden flex items-end fixed bottom-0 left-0 z-[999999] h-[100vh]  bg-[#000000bf]  "
                animate={{ opacity: filterBoxCont.opacity, pointerEvents: filterBoxCont.pointerEvents }}
                transition={{ type: 'tween', duration: .5, ease: 'easeInOut' }}
                style={{ opacity: filterBoxCont.opacity, pointerEvents: filterBoxCont.pointerEvents }}
                onClick={() => {
                    setFilterBox({
                        pointerEvents: "none",
                        top: "400px"
                    });
                    setFilterBoxCont({
                        opacity: 0,
                        pointerEvents: "none"
                    })
                }}
            >
                <motion.div
                    className="cat-search w-full  px-[20px] py-[30px] max-h-[60vh]  rounded-tl-[22px] rounded-tr-[22px] flex flex-col justify-center bg-white relative "
                    animate={{ pointerEvents: filterBox.pointerEvents, top: filterBox.top }}
                    transition={{ type: 'tween', duration: .5, ease: 'easeInOut' }}
                    style={{ pointerEvents: filterBox.pointerEvents, top: filterBox.top }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <TfiClose
                        className='absolute text-[24px]/[24px] top-[20px] right-[20px] cursor-pointer '
                        onClick={() => {
                            setFilterBox({
                                pointerEvents: "none",
                                top: "400px"
                            });
                            setFilterBoxCont({
                                opacity: 0,
                                pointerEvents: "none"
                            })
                        }}
                    />

                    <h3 className="font-primary font-[400] text-[24px]/[32px]  ">Filter By</h3>
                    <div className="  pt-[12px] px-[10px] pb-[0] " >
                        <h4 className="font-primary font-[500] text-[18px]/[24px]" >Category</h4>
                        <div className="checkbox-cat flex flex-col gap-[15px]  border-black border-b pt-[15px] px-[10px] pb-[25px] " >
                            <div className="chkbox flex flex-row gap-[10px] items-center ">
                                <input
                                    type="checkbox" id="coverCases" name="Covers and Cases"
                                    value="Covers and Cases"
                                    onChange={handleCheckbox}
                                    checked={checkValue.includes("Covers and Cases")}
                                />
                                <label htmlFor="coverCases"
                                    className='font-body font-[400] text-[16px]/[22px] '
                                > Cover and Cases</label>
                            </div>

                            <div className="chkbox flex flex-row gap-[10px] items-center " >
                                <input
                                    type="checkbox" id="powerBanks" name="powerBanks"
                                    value="Power Banks"
                                    onChange={handleCheckbox}
                                    checked={checkValue.includes("Power Banks")}
                                />
                                <label htmlFor="powerBanks"
                                    className='font-body font-[400] text-[16px]/[22px] '
                                >Power Banks</label>
                            </div>

                            <div className="chkbox flex flex-row gap-[10px] items-center " >
                                <input
                                    type="checkbox" id="belts" name="belts"
                                    value="Stand and Straps"
                                    onChange={handleCheckbox}
                                    checked={checkValue.includes("Stand and Straps")}
                                />
                                <label htmlFor="belts"
                                    className='font-body font-[400] text-[16px]/[22px] '
                                >Stand and Straps</label>
                            </div>
                        </div>

                        <h4 className="font-primary font-[500] text-[18px]/[24px] pt-[20px] " >Price</h4>
                        <div className=" px-[10px] pt-[10px] ">
                            <input
                                type="range" className="slider"
                                min={minVal ?? 0}
                                max={maxVal ?? 0}
                                value={priceFilter ?? 0}
                                onChange={(e) => setPriceFilter(Number(e.target.value))}
                            />
                            <div className=" w-full flex justify-between pt-[15px] ">
                                <span className='font-body font-[400] text-[16px]/[22px] ' >&#8377;{minVal ?? 0}</span>
                                <span className='font-body font-[400] text-[16px]/[22px] ' >&#8377;{priceFilter}</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </>
    )
}

export default ProductFilter;
