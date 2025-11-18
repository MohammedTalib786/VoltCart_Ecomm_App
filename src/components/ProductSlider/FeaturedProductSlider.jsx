import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import placeholderImg from '../../assets/placeholder_img.png';
import useFetch from '../../hooks/useFetch';
import Loader from '../Loader/HomePage/FeatProdLoader';
import ProductCard from '../ProductCard/ProductCard';

import 'swiper/css';
import 'swiper/css/pagination';
import './productSlider.css';


const FeaturedProductSlider = ({ title }) => {
    let productsAPI = import.meta.env.VITE_PRODUCT_API_KEY;
    let useProdList = useFetch(productsAPI);
    let { loader, error, data: prodData } = useProdList;
    let filteredData = prodData.filter(elem => !elem.featured_col)

    return (
        <div className=' w-full  gt-tab:py-[80px] py-[60px] ' >
            <div className="texts flex items-center justify-between gt-tab:pb-[30px] tab:pb-[25px] pb-[15px] ">
                <h3 className=' font-primary gt-tab:text-[45px]/[55px] tab:text-[40px]/[45px] text-[32px]/[40px] font-[300] text-left ' >{title}</h3>
            </div>
            <div className="prodSlider">
                {
                    loader
                        ? <Loader />
                        : error
                            ? <p className='text-[20px]/[28px] font-primary  ' >No Data Found</p>
                            : <>
                                <Swiper
                                    modules={[Autoplay, Pagination]}
                                    spaceBetween={40}
                                    slidesPerView={4}
                                    pagination={{ clickable: true }}
                                    loop={true}
                                    autoplay={{
                                        delay: 3500,
                                        disableOnInteraction: true,
                                    }}
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
                                        1240: {
                                            slidesPerView: 4,
                                            spaceBetween: 20,
                                        },

                                    }}
                                >
                                    {filteredData.map((elem) => {
                                        return <SwiperSlide>
                                            <ProductCard
                                                key={elem.id}
                                                id={elem.id}
                                                name={elem.name}
                                                price={elem.price.sale_price}
                                                // featImg={elem.feat_img}
                                                featImg={!elem.feat_img || elem.feat_img == "empty" ? placeholderImg : elem.feat_img}
                                                ImageGalleryFirst={!elem.img_gallery[1] || elem.img_gallery[1] == "empty" ? placeholderImg : elem.img_gallery[1]}
                                                urlToProd={elem.slug}
                                                // prodCat={categoryName}
                                                savePercent={parseInt((elem.price.reg_price - elem.price.sale_price) / elem.price.reg_price * 100)}
                                            />
                                        </SwiperSlide>
                                    })}
                                </Swiper>
                            </>
                }
            </div>
        </div>
    )
}

export default FeaturedProductSlider;
