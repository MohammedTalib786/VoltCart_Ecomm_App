import { BsBoxFill } from 'react-icons/bs';
import { FaTruckFast } from 'react-icons/fa6';
import { IoShieldCheckmarkSharp } from 'react-icons/io5';
import { PiCreditCardFill } from 'react-icons/pi';
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import ProdIconBox from './ProdIconBox';

import 'swiper/css';
import 'swiper/css/pagination';
import './product-icon-details.css';


const ProductIconDetails = () => {
  return (
    <>
      {/* >>>>>>>>>>>>>>>>>> Desktop */}
      <div className="icons hidden tab:flex flex-wrap justify-center lg:justify-between gt-tab:gap-[15px] gap-[20px] tab:flex-row flex-col items-center pt-[50px] pb-[50px] border-y-[1px] border-dashed border-[#bcbcbc]">
        <ProdIconBox mainIcon={<IoShieldCheckmarkSharp className='text-[30px]/[40px] fill-primary ' />} textContent="100% Original Products" />
        <ProdIconBox mainIcon={<FaTruckFast className='text-[30px]/[40px]  fill-primary ' />} textContent="Fast & Free Delivery" />
        <ProdIconBox mainIcon={<BsBoxFill className='text-[30px]/[40px]  fill-primary ' />} textContent="Easy Returns" />
        <ProdIconBox mainIcon={<PiCreditCardFill className='text-[30px]/[40px] fill-primary  ' />} textContent="Secure Payments" />
      </div>

      {/* >>>>>>>>>>>>>>>>>> Mobile */}
      <div className="prod_icon_box_slider flex tab:hidden pt-[50px] pb-[50px] border-y-[1px] border-dashed border-[#bcbcbc]" >
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={40}
          slidesPerView={4}
          navigation
          loop={true}
          // autoplay={{
          //   delay: 3000,
          //   disableOnInteraction: false, // Autoplay continues after user interaction
          // }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1025: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          <SwiperSlide>
            <ProdIconBox mainIcon={<IoShieldCheckmarkSharp className='text-[30px]/[40px] fill-primary ' />} textContent="100% Original Products" />
          </SwiperSlide>

          <SwiperSlide>
            <ProdIconBox mainIcon={<FaTruckFast className='text-[30px]/[40px]  fill-primary ' />} textContent="Fast & Free Delivery" />
          </SwiperSlide>

          <SwiperSlide>
            <ProdIconBox mainIcon={<BsBoxFill className='text-[30px]/[40px]  fill-primary ' />} textContent="Easy Returns" />
          </SwiperSlide>

          <SwiperSlide>
            <ProdIconBox mainIcon={<PiCreditCardFill className='text-[30px]/[40px] fill-primary  ' />} textContent="Secure Payments" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default ProductIconDetails;
