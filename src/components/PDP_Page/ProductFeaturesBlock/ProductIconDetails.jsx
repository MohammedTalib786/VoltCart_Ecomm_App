import React from 'react'
import { BsBoxFill } from 'react-icons/bs';
import { FaTruckFast } from 'react-icons/fa6';
import { IoShieldCheckmarkSharp } from 'react-icons/io5';
import { PiCreditCardFill } from 'react-icons/pi';
import './product-icon-details.css';

const ProductIconDetails = () => {
  return (
    
    <div className="icons flex flex-wrap justify-center lg:justify-between  gap-[15px] sm:gap-[10px] items-center pt-[20px] pb-[20px] border-y-[1px]  border-dashed border-[#bcbcbc]">
      
      <div className="icon_box flex flex-col text-center justify-center items-center gap-[10px] bg-white w-[300px] sm:h-[130px] sm:w-[23%] px-[10px] py-[20px] rounded-[10px] cursor-default " >
        <IoShieldCheckmarkSharp className='text-[30px]/[40px] fill-primary ' />
        <h5 className='text-[16px]/[24px] font-[Poppins] text-para-black ' >100% Original Products</h5>
      </div>

      <div className="icon_box flex flex-col text-center justify-center items-center gap-[10px] bg-white w-[300px] sm:h-[130px] sm:w-[23%] px-[10px] py-[20px] rounded-[10px] cursor-default " >
        <FaTruckFast className='text-[30px]/[40px]  fill-primary ' />
        <h5 className='text-[16px]/[24px] font-[Poppins]  ' >Fast & Free Delivery</h5>
      </div>

      <div className="icon_box flex flex-col text-center justify-center items-center gap-[10px] bg-white w-[300px] sm:h-[130px] sm:w-[23%] px-[10px] py-[20px] rounded-[10px] cursor-default " >
        <BsBoxFill className='text-[30px]/[40px]  fill-primary ' />
        <h5 className='text-[16px]/[24px] font-[Poppins]  ' >Easy Returns</h5>
      </div>

      <div className="icon_box flex flex-col text-center justify-center items-center  gap-[15px] sm:gap-[10px] bg-white w-[300px] sm:h-[130px] sm:w-[23%] px-[10px] py-[20px] rounded-[10px] cursor-default " >
        <PiCreditCardFill className='text-[30px]/[40px] fill-primary  ' />
        <h5 className='text-[16px]/[24px] font-[Poppins] ' >Secure Payments</h5>
      </div>

    </div>
  )
}

export default ProductIconDetails;