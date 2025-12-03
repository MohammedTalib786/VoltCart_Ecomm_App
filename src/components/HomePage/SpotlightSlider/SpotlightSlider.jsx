import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

import subtleBgImg from '../../../assets/HomePage/spotlight_images/subtle_bg_img.webp'
import phoneCoverSpotImg from '../../../assets/HomePage/spotlight_images/phone_cover_spotlight_obj.webp'
import powerBankSpotImg from '../../../assets/HomePage/spotlight_images/power_bank_spotlight_obj.webp'
import watchesSpotImg from '../../../assets/HomePage/spotlight_images/watches_spotlight_obj.webp'
import useFetch from '../../../hooks/useFetch';
import Slides from './Slides';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './spotlight_slider_home_pg.css';


const SpotlightSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeIndexObj, setActiveIndexObj] = useState(0);

    let productsAPI = import.meta.env.VITE_PRODUCT_API_KEY;
    let { data: prodData } = useFetch(productsAPI)

    const calculateSalePrice = (itemCat) => prodData.filter(elem => elem.category == itemCat).map(elem => elem.price.sale_price).sort().slice(0, 1).join();

    const calculateSalePercent = (itemCat) => prodData
        .filter(elem => elem.category == itemCat)
        .map(elem => (parseInt(elem.price.reg_price - elem.price.sale_price) / elem.price.reg_price * 100).toFixed()).sort().slice(0, 1).join();

    let slides = [
        {
            title: "Shield Your Iphone in Style",
            subTitle: "Premium grip with all-round corner protection",
            source: subtleBgImg,
            objectImg: phoneCoverSpotImg,
            objectImgAddClass: "gt-tab:max-w-[400px] tab:max-w-[300px] max-w-[240px] ",
            saleMainPrice: calculateSalePrice("Covers and Cases"),
            mainPercentage: calculateSalePercent("Covers and Cases"),
            linkToCat: '/products?category=covers_and_cases'
        },
        {
            title: "Stay Charged, Always Ready",
            subTitle: "LED battery indicators for smart usage",
            source: subtleBgImg,
            objectImg: powerBankSpotImg,
            objectImgAddClass: " gt-tab:max-w-[500px] tab:max-w-[300px] max-w-[240px]  ",
            saleMainPrice: calculateSalePrice("Power Banks"),
            mainPercentage: calculateSalePercent("Power Banks"),
            linkToCat: '/products?category=power_bank'
        },
        {
            title: "Redefine Your Wrist Game",
            subTitle: "Premium leather, silicone, and metal options",
            source: subtleBgImg,
            objectImg: watchesSpotImg,
            objectImgAddClass: "gt-tab:max-w-[400px] tab:max-w-[300px] max-w-[240px] ",
            saleMainPrice: calculateSalePrice("Stand and Straps"),
            mainPercentage: calculateSalePercent("Stand and Straps"),
            linkToCat: '/products?category=stand_and_straps'
        }
    ];



    return (
        <div className=" bg-[#F6F6F6] home_pg_spotlight_slider ">
            <Swiper
                className='home_pg_spot_slider'
                modules={[Autoplay, Pagination, EffectFade]}
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ clickable: true }}
                loop={true}
                effect="fade"
                // fadeEffect={{ crossFade: true }}
                speed={2000}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: true,
                }}
                onSlideChange={(swiper) => {
                    setActiveIndex(swiper.realIndex)
                    setActiveIndexObj(swiper.realIndex)
                }}
            >
                {
                    slides.map((elem, index) => {
                        return <SwiperSlide key={`spotlight-${index}`} >
                            <Slides
                                title={elem.title}
                                subTitle={elem.subTitle}
                                source={elem.source}
                                isActive={activeIndex === index}
                                isActiveObj={activeIndexObj === index}
                                objectImg={elem.objectImg}
                                objectImgAddClass={elem.objectImgAddClass}
                                dynBgColor={elem.dynBgColor}

                                saleMainPrice={elem.saleMainPrice}
                                mainPercentage={elem.mainPercentage}

                                linkToCat={elem.linkToCat}
                            /> </SwiperSlide>
                    })
                }
            </Swiper>
        </div>
    )
}

export default SpotlightSlider;
