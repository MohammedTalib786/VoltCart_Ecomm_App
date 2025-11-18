
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import useFetch from '../../hooks/useFetch';
import BlogCard from './BlogCards/BlogCard';
import Loader from '../Loader/BlogListingLoader';


const BlogDetailsSlider = ({
    blog_id
}) => {
    let blogApi = import.meta.env.VITE_BLOGS_API_KEY;
    let { loader, error, data: blogData } = useFetch(blogApi);
    let filteredData = blogData.filter(elem => elem.blog_id !== blog_id)

    return (
        <div className=' m-auto'>
            {
                loader
                    ? <Loader />
                    : error
                        ? <p className='text-[20px]/[28px] font-primary  ' >No Data Found</p>
                        : <>
                            <Swiper
                                modules={[Pagination]}
                                spaceBetween={40}
                                slidesPerView={4}
                                pagination={{ clickable: true }}
                                loop={true}
                                breakpoints={{
                                    320: {
                                        slidesPerView: 1,
                                        spaceBetween: 20,
                                    },

                                    768: {
                                        slidesPerView: 1,
                                        spaceBetween: 20,
                                    },
                                    1024: {
                                        slidesPerView: 1,
                                        spaceBetween: 20,
                                    },
                                    1025: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                }}
                            >
                                {filteredData.map((elem) => {
                                    return <SwiperSlide>
                                        <BlogCard
                                            key={elem.blog_id}
                                            blog_id={elem.blog_id}
                                            name={elem.blog_title}
                                            featImg={elem.blog_feat_img}
                                            urlToblog={elem.blog_slug}
                                        />
                                    </SwiperSlide>
                                })}
                            </Swiper>
                        </>
            }
        </div>
    )
}

export default BlogDetailsSlider;
