import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import useFetch from '../../../hooks/useFetch';
import Loader from '../../Loader/HomePage/BlogsLoader'
import BlogSliderCard from './BlogSliderCard';

import 'swiper/css';
import 'swiper/css/pagination';


const BlogSlider = () => {
    const blogapi = import.meta.env.VITE_BLOGS_API_KEY;
    const { loader, error, data: blogData } = useFetch(blogapi);

    return (
        <>
            {
                loader ? <Loader /> : error ? <p className=' font-primary text-[18px]/[26px] text-black ' >Something Went Wrong</p>
                    : <>
                        <Swiper
                            modules={[Pagination]}
                            spaceBetween={25}
                            slidesPerView={4}
                            pagination={{ clickable: true }}
                            loop={true}
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
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                1025: {
                                    slidesPerView: 3,
                                    spaceBetween: 25,
                                },
                                1368: {
                                    slidesPerView: 4,
                                    spaceBetween: 25,
                                },
                            }}
                        >
                            {blogData.slice(0, 6).map((elem) =>
                                <SwiperSlide>
                                    <BlogSliderCard
                                        name={elem.blog_title}
                                        slug={elem.blog_slug}
                                        category={elem.blog_category}
                                        feat_img={elem.blog_feat_img}
                                    />
                                </SwiperSlide>
                            )}
                        </Swiper>
                    </>
            }
        </>
    )
}

export default BlogSlider;
