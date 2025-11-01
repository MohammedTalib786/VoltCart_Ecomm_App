
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Slides from './Slides';

import placeholderImg from '../../../assets/placeholder_img.png'


const SpotlightSlider = () => {

    let slides = [
        {
            title: "YOUR PRODUCTS <br/>ARE GREAT.",
            source: placeholderImg
        },
        {
            title: "TECHNOLOGY <br/>HACK YOU WON'T <br/>GET.",
            source: placeholderImg
        },
    ]

    return (
        <div className=" bg-[#F6F6F6] ">

            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                loop={true}
            >
                {
                    slides.map((elem) => {
                        return <SwiperSlide> <Slides title={elem.title} source={elem.source} /> </SwiperSlide>
                    })
                }

            </Swiper>
        </div>
    )
}

export default SpotlightSlider