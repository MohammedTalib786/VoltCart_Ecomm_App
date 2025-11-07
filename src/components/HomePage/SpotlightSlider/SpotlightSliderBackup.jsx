// import { Navigation, Pagination, EffectFade } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { useState } from 'react';

// import placeholderImg from '../../../assets/placeholder_img.png'
// import subtleBgImg from '../../../assets/HomePage/spotlight_images/subtle_bg_img.jpg'

// import phoneCoverSpotImg from '../../../assets/HomePage/spotlight_images/phone_cover_spotlight_obj.webp'
// import powerBankSpotImg from '../../../assets/HomePage/spotlight_images/power_bank_spotlight_obj.webp'
// import watchesSpotImg from '../../../assets/HomePage/spotlight_images/watches_spotlight_obj.webp'
// import Slides from './Slides';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import './spotlight_slider_home_pg.css'


// const SpotlightSlider = () => {

//     const [activeIndex, setActiveIndex] = useState(0);
//     // const [activeIndexObj, setActiveIndexObj] = useState(0);

//     let slides = [
//         {
//             title: "Shield Your Iphone in Style",
//             subTitle: "Premium grip with all-round corner protection",
//             source: subtleBgImg,
//             objectImg: phoneCoverSpotImg,
//         },
//         {
//             title: "Stay Charged, Always Ready",
//             subTitle: "LED battery indicators for smart usage",
//             source: subtleBgImg,
//             objectImg: phoneCoverSpotImg,
//         },
//         {
//             title: "Redefine Your Wrist Game",
//             subTitle: "Premium leather, silicone, and metal options",
//             source: subtleBgImg,
//             objectImg: phoneCoverSpotImg,
//         }
//     ]

//     return (
//         <div className=" bg-[#F6F6F6] home_pg_spotlight_slider ">

//             <Swiper
//                 modules={[Pagination, EffectFade]}
//                 spaceBetween={0}
//                 slidesPerView={1}
//                 pagination={{ clickable: true }}
//                 loop={true}
//                 effect="fade"
//                 fadeEffect={{ crossFade: true }}
//                 speed={800}
//                 onSlideChange={(swiper) => {
//                     setActiveIndex(swiper.realIndex)
//                     // setActiveIndexObj(swiper.realIndex)

//                 }}
//             >
//                 {
//                     slides.map((elem, index) => {
//                         return <SwiperSlide>
//                             <Slides
//                                 title={elem.title}
//                                 subTitle={elem.subTitle}
//                                 source={elem.source}
//                                 isActive={activeIndex === index}
//                                 // isActiveObj={activeIndexObj === index}
//                                 objectImg={elem.objectImg}
//                                 dynBgColor={elem.dynBgColor}
//                             /> </SwiperSlide>
//                     })
//                 }
//             </Swiper>
//         </div>
//     )
// }

// export default SpotlightSlider