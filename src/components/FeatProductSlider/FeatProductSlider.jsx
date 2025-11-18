import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import placeholderImg from '../../assets/placeholder_img.png';
import useFetch from '../../hooks/useFetch';
import ProductCard from '../ProductCard/ProductCard';
import Loader from '../Loader/SingleRowSkeleton';

import 'swiper/css';
import 'swiper/css/pagination';
import '../ProductSlider/productSlider.css';


const FeatProductSlider = ({ title }) => {
    let productsAPI = import.meta.env.VITE_PRODUCT_API_KEY;
    let useProdList = useFetch(productsAPI);
    let loader = useProdList.loader;
    let error = useProdList.error;
    let prodData = useProdList.data;
    let filteredData = prodData.filter((elem) => elem.featured_col)

    return (
        <div className=' w-full py-[50px]' >
            <div className="texts flex items-center justify-between pb-[20px] ">
                <h3 className=' font-primary gt-tab:text-[45px]/[55px] tab:text-[40px]/[45px] text-[32px]/[40px] font-[300] text-left ' >{title}</h3>
            </div>

            <div className="prodSlider">
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={40}
                    slidesPerView={4}
                    pagination={{ clickable: true }}
                    loop={true}
                >
                    {
                        loader ?
                            (<Loader />)
                            : error ?
                                (<p className="text-red-500">Something went wrong: {error.message}</p>) :
                                (
                                    filteredData.map((elem) => {
                                        return <SwiperSlide> <ProductCard
                                            urlToProd={elem.slug}
                                            key={elem.id}
                                            id={elem.id}
                                            slug={elem.slug}
                                            boxWidth={"desktop:w-[100%] gt-tab:w-[48%] w-full "}
                                            name={elem.name}
                                            price={elem.price.sale_price}
                                            featImg={!elem.feat_img || elem.feat_img == "empty" ? placeholderImg : elem.feat_img}
                                            ImageGalleryFirst={!elem.img_gallery[1] || elem.img_gallery[1] == "empty" ? placeholderImg : elem.img_gallery[1]}
                                            prodCat={elem.category}
                                            savePercent={parseInt((elem.price.reg_price - elem.price.sale_price) / elem.price.reg_price * 100)}

                                        /> </SwiperSlide>
                                    })
                                )
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default FeatProductSlider;
