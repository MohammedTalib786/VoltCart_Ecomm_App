import { useEffect, useState } from 'react';
// Import Swiper styles
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard'
import placeholderImg from '../../assets/placeholder_img.png'

import './productSlider.css'

const ProductSlider = ({
    title,
    urlText,
    urlVal,
    categoryName,
    isFeatCollecion = false
}) => {

    let [data, setProdData] = useState([])

    let productsAPI = import.meta.env.VITE_PRODUCT_API_KEY;
    useEffect(() => {
        (async () => {
            let data = await fetch(productsAPI);
            let res = await data.json();
            setProdData(res)
        })()
    }, [])

    let filteredData = data.filter((elem) => elem.category == categoryName)

    return (
        <div className=' w-full py-[50px] ' >

            <div className="texts flex items-center justify-between pb-[20px] ">
                <h3 className='font-montserrat font-medium text-[28px]/[36px] text-black ' >{title}</h3>
                <Link to={urlVal} className='font-montserrat font-regular text-[16px] hover:underline '>{urlText}</Link>
            </div>

            <div className="prodSlider">
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
                            slidesPerView: 3,
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
                        filteredData.map((elem) => {
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

                        })
                    }

                </Swiper>
            </div>
        </div>
    )
}

export default ProductSlider