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
    let prices = [];
    let percents = [];
    prodData.map(elem => {
        prices.push(elem.price.sale_price)
        percents.push((parseInt(elem.price.reg_price - elem.price.sale_price) / elem.price.reg_price * 100).toFixed())
    })
    let saleMainPrice = prices.sort().slice(0, 1).join()
    let mainPercentage = percents.sort().slice(-1).join()
    let slides = [
        {
            title: "Shield Your Iphone in Style",
            subTitle: "Premium grip with all-round corner protection",
            source: subtleBgImg,
            objectImg: phoneCoverSpotImg,
            objectImgAddClass: "gt-tab:max-w-[400px] tab:max-w-[300px] max-w-[240px] "
        },
        {
            title: "Stay Charged, Always Ready",
            subTitle: "LED battery indicators for smart usage",
            source: subtleBgImg,
            objectImg: powerBankSpotImg,
            objectImgAddClass: " gt-tab:max-w-[500px] tab:max-w-[300px] max-w-[240px]  "
        },
        {
            title: "Redefine Your Wrist Game",
            subTitle: "Premium leather, silicone, and metal options",
            source: subtleBgImg,
            objectImg: watchesSpotImg,
            objectImgAddClass: "gt-tab:max-w-[400px] tab:max-w-[300px] max-w-[240px] "
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
                                saleMainPrice={saleMainPrice}
                                mainPercentage={mainPercentage}
                            /> </SwiperSlide>
                    })
                }
            </Swiper>
        </div>
    )
}

export default SpotlightSlider;
