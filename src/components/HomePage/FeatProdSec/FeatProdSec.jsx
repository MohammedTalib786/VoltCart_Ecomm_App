import useFetch from "../../../hooks/useFetch";
import Loader from "../../Loader/SkeletonLoader"
import ProductCard from "../../ProductCard/ProductCard"

// import placeholderImg from '../../assets/placeholder_img.png'
import placeholderImg from '../../../assets/placeholder_img.png'

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';



const FeatProdSec = () => {


    let productsAPI = import.meta.env.VITE_PRODUCT_API_KEY;
    // console.log('Vite API Key', import.meta.env.VITE_PRODUCT_API_KEY)

    let useProdList = useFetch(productsAPI);
    let { loader, error, data: prodData } = useProdList;

    return (
        <div className=" flex flex-col desktop:py-[100px] gt-tab:py-[80px] py-[60px] gap-[20px] " >

            <h2
                className="font-primary gt-tab:text-[45px]/[55px] tab:text-[40px]/[45px] text-[32px]/[40px] font-[300] text-left ">Featured Products</h2>

            <div className="w-full   " >

                {
                    loader ?
                        (<Loader />)
                        : error ?
                            (<p className="text-red-500">Something went wrong: {error.message}</p>) :
                            (
                                <Swiper
                                    // install Swiper modules
                                    modules={[Pagination]}
                                    spaceBetween={40}
                                    slidesPerView={4}
                                    // navigation
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
                                        // prodData.filter(item => checkValue.length === 0 ? prodData : item.category === `${checkValue}`)
                                        prodData.map(elem => {
                                            return <SwiperSlide>
                                                <ProductCard
                                                    urlToProd={elem.slug}
                                                    key={elem.id}
                                                    id={elem.id}
                                                    slug={elem.slug}
                                                    boxWidth={"desktop:w-[31%] gt-tab:w-[48%] w-full "}
                                                    name={elem.name}
                                                    price={elem.price.sale_price}
                                                    featImg={!elem.feat_img || elem.feat_img == "empty" ? placeholderImg : elem.feat_img}
                                                    ImageGalleryFirst={!elem.img_gallery[1] || elem.img_gallery[1] == "empty" ? placeholderImg : elem.img_gallery[1]}
                                                    // ImageGalleryFirst={}
                                                    prodCat={elem.category}
                                                    savePercent={parseInt((elem.price.reg_price - elem.price.sale_price) / elem.price.reg_price * 100)}
                                                    // additionalClass="min-h-[460px]"
                                                />
                                            </SwiperSlide>
                                        }

                                        )
                                    }
                                </Swiper>
                            )
                }



                {/* <div className=" gt-tab:w-[50%] w-full ">
                    
                </div>

                <div className=" gt-tab:w-[50%] tab:w-full gt-tab:h-auto tab:h-[350px] flex gt-tab:flex-col tab:flex-row flex-col tab:gap-[35px] gap-[30px]  ">
                    
                </div> */}





            </div>


        </div>
    )
}

export default FeatProdSec
