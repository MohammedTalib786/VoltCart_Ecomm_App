import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

import placeholderImg from '../../assets/placeholder_img.png';
import useFetch from '../../hooks/useFetch';
import ProductCard from '../ProductCard/ProductCard';
import Loader from '../Loader/HomePage/FeatProdLoader';

import 'swiper/css';
import 'swiper/css/pagination';
import './productSlider.css'


const ProductSlider = ({ prodId, title, urlText, urlVal, categoryName }) => {
    let productsAPI = import.meta.env.VITE_PRODUCT_API_KEY;
    let { loader, error, data: prodData } = useFetch(productsAPI)
    let filteredData = prodData.filter(elem => elem.category == categoryName)
    let mainFilteredData;
    if (prodId) mainFilteredData = filteredData.filter(elem => elem.id !== prodId)

    return (
        <div className=' w-full py-[50px] ' >
            <div className="texts flex items-center justify-between pb-[20px] ">
                <h3 className='font-primary font-medium text-[28px]/[36px] text-black ' >{title}</h3>
                <Link to={urlVal} className='font-primary font-regular text-[16px] hover:underline '>{urlText}</Link>
            </div>
            <div className="prodSlider">
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
                                    {
                                        mainFilteredData.map((elem) => {
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
                                                    prodCat={categoryName}
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

export default ProductSlider;
