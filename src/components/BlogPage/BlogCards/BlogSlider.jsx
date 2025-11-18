import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

import BlogCard from './BlogCard';

import 'swiper/css';
import 'swiper/css/pagination';


const BlogSlider = () => {
    return (
        <div className=' w-full py-[50px]' >
            <div className="texts flex items-center justify-between pb-[20px] ">
                <h3 className='text-[32px]/[40px] ' >LATEST POSTS</h3>
                <Link to='/blogs' className=' hover:underline ' >READ BLOG</Link>
            </div>
            <div className="prodSlider" >
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={30}
                    slidesPerView={3}
                    navigation
                    loop={true}
                >
                    <SwiperSlide> <BlogCard /> </SwiperSlide>
                    <SwiperSlide> <BlogCard /> </SwiperSlide>
                    <SwiperSlide> <BlogCard /> </SwiperSlide>
                    <SwiperSlide> <BlogCard /> </SwiperSlide>
                    <SwiperSlide> <BlogCard /> </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default BlogSlider;
