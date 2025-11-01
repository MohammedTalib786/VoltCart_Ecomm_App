
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import useFetch from '../../hooks/useFetch';
import BlogCard from './BlogCards/BlogCard';


const BlogDetailsSlider = () => {
    let blogApi = import.meta.env.VITE_BLOGS_API_KEY;
    let blogDetList = useFetch(blogApi);
    let blogData = blogDetList.data;

    console.log('inside blog slider')

    console.log('blogData', blogData)

    return (
        <div className=' m-auto'>
            <Swiper
                // install Swiper modules
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
                {
                    !blogData
                        ? "No Data Found!"
                        : blogData.map((elem) => {
                            return (
                                <SwiperSlide>
                                    <BlogCard featImg={elem.blog_feat_img} name={elem.blog_title} urlToblog={elem.blog_slug} />
                                </SwiperSlide>
                            )
                        })
                }


            </Swiper>
        </div>
    )
}

export default BlogDetailsSlider