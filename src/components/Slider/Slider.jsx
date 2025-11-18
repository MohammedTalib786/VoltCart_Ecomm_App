import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import placeholderImg from '../../assets/placeholder_img.png';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Slides from './Slides';


const Slider = () => {
    return (
        <Swiper
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

export default Slider;
