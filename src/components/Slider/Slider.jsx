

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Slides from './Slides';
// import 'swiper/css/scrollbar';

import placeholderImg from '../../assets/placeholder_img.png'

const Slider = () => {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide> <Slides source={placeholderImg} /> </SwiperSlide>
            <SwiperSlide> <Slides source={placeholderImg} /> </SwiperSlide>
            <SwiperSlide> <Slides source={placeholderImg} /> </SwiperSlide>
            <SwiperSlide> <Slides source={placeholderImg} /> </SwiperSlide>
            <SwiperSlide> <Slides source={placeholderImg} /> </SwiperSlide>

        </Swiper>
    )
}

export default Slider