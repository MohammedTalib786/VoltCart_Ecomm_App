

import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { PiQuotesFill } from "react-icons/pi";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import TestimonialSlides from './TestimonialSlides';



const Testimonials = () => {
    return (

        <div className="w-full  py-[50px] ">
            <PiQuotesFill className='text-[120px] mx-auto mb-[8px] text-[#dddddd] ' />

            <Swiper
                // install Swiper modules
                modules={[Navigation]}
                slidesPerView={1}
                spaceBetween={0}
                navigation
                loop={true}
            >

                <SwiperSlide>
                    <TestimonialSlides
                        testimonialMsg='“A blog is a digital publication that can complement a website or exist independently. A blog may include articles, short posts, listicles, infographics, videos, and other digital content”'
                        author="JENNIEROSE"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <TestimonialSlides
                        testimonialMsg='“Tempus oncu enim pellen tesque este pretium in neque, elit morbi sagittis lorem habi mattis Pellen tesque pretium feugiat vel morbi suspen”'
                        author="EMMA CHAMBERLIN"
                    />
                </SwiperSlide>

            </Swiper>
        </div>

    )
}

export default Testimonials