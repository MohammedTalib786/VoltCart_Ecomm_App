import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Button from '../../components/FormComp/Button';
import NumCounter from '../../components/NumCounter/NumCounter';
import ImageGallerySlider from '../../components/PDP_Page/ImageGallerySliders/ImageGallerySlider';
import ProductIconDetails from '../../components/PDP_Page/ProductFeaturesBlock/ProductIconDetails';
import './prodstyle.css'
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import ProductSlider from '../../components/ProductSlider/ProductSlider';
import Loader from '../../components/Loader/SkeletonLoaderProduct';
import placeholderImg from '../../assets/placeholder_img.png';
import QuantityCounter from '../../components/QuantityCounter/QuantityCounter';
import { BsCart2 } from 'react-icons/bs';
import ProdInfoTab from '../../components/PDP_Page/Tabs/ProdInfoTab';

const ProductDetail = () => {
    let params = useParams();
    let productsAPI = import.meta.env.VITE_PRODUCT_API_KEY;
    // console.log('params', params, typeof params)

    let useProdDetail = useFetch(`${productsAPI}${params.slug}`);
    let { loader, error, data: prodData } = useProdDetail;

    // console.log('prodData'.prodData)

    if (!prodData) return ("no product found")

    console.log('prodData', prodData)

    // console.log('DESC |', prodData?.description)
    // console.log('DESC SLICED |', prodData?.description?.split(' ').slice(0, 60).join(' ') )

    return (
        <>
            {
                loader ? <Loader /> : error ? (<p className="text-red-500">Something went wrong: {error.message}</p>) : (
                    <>
                        <div className="container_layout mx-auto flex justify-center items-center flex-col"  >

                            <div className="w-full pt-[50px] pb-[25px] ">
                                <BreadCrumbs />
                            </div>

                            <div className=' w-full flex flex-wrap sm:flex-nowrap gap-[50px] pb-[50px] ' >

                                {/* >>>>>>>>>>>>> Left Section */}
                                <div className="left_sec w-[100%] md:w-[50%]" >
                                    {/* >>>>>>>>>> Image Gallery Slider */}
                                    <ImageGallerySlider
                                        apiImg={!prodData?.img_gallery || prodData?.img_gallery.length < 2 ? [placeholderImg, placeholderImg, placeholderImg, placeholderImg] : prodData?.img_gallery}
                                    />
                                </div>

                                {/* >>>>>>>>>>>>> Right Section */}
                                <div className="right_sec w-[100%] md:w-[50%] pr-[20px] ">

                                    <div className="flex justify-between items-center pb-[10px] ">
                                        <span className='font-poppins text-[16px]/[24px] text-para-black  ' >{prodData?.sku}</span>
                                        <button className='share_btn cursor-pointer ' title='Share Product' >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"
                                                className=' w-[28px] fill-para-black ' ><path d="M448 256C501 256 544 213 544 160C544 107 501 64 448 64C395 64 352 107 352 160C352 165.4 352.5 170.8 353.3 176L223.6 248.1C206.7 233.1 184.4 224 160 224C107 224 64 267 64 320C64 373 107 416 160 416C184.4 416 206.6 406.9 223.6 391.9L353.3 464C352.4 469.2 352 474.5 352 480C352 533 395 576 448 576C501 576 544 533 544 480C544 427 501 384 448 384C423.6 384 401.4 393.1 384.4 408.1L254.7 336C255.6 330.8 256 325.5 256 320C256 314.5 255.5 309.2 254.7 304L384.4 231.9C401.3 246.9 423.6 256 448 256z" /></svg>
                                        </button>
                                    </div>

                                    <h3 className='font-montserrat text-[42px]/[55px] font-[400]'>{prodData?.name}</h3>

                                    <div className="price_cont flex flex-wrap items-center w-full  gap-[12px] my-[20px] " >
                                        <p className='font-poppins  text-[32px]/[32px] text-center  text-[#000]'  > &#8377;{prodData?.price.sale_price}</p>
                                        <p className='font-poppins  text-[24px] text-center line-through text-[#A0A0A0]'  > &#8377;{prodData?.price.reg_price}</p>
                                    </div>

                                    <div className=" flex gap-[15px] ">
                                        <Button
                                            text="Add to Cart"
                                            btnIcon={<BsCart2 className='text-[18px]/[18px] mb-[4px] ' />}
                                        />

                                        <Button
                                            text="Buy Now"
                                            btnIcon={<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 -960 960 960" className='fill-primary hover:fill-white ' ><path d="m40-240 20-80h220l-20 80H40Zm80-160 20-80h260l-20 80H120Zm623 240 20-160 29-240 10-79-59 479ZM240-80q-33 0-56.5-23.5T160-160h583l59-479H692l-11 85q-2 17-15 26.5t-30 7.5q-17-2-26.5-14.5T602-564l9-75H452l-11 84q-2 17-15 27t-30 8q-17-2-27-15t-8-30l9-74H220q4-34 26-57.5t54-23.5h80q8-75 51.5-117.5T550-880q64 0 106.5 47.5T698-720h102q36 1 60 28t19 63l-60 480q-4 30-26.5 49.5T740-80H240Zm220-640h159q1-33-22.5-56.5T540-800q-35 0-55.5 21.5T460-720Z" /></svg>}
                                            additionalClass="buy_now_btn  "
                                        />
                                    </div>

                                    <div className="text py-[20px]">
                                        <p
                                            className='font-poppins font-[400] text-[18px]/[26px] dang-cont'
                                            // dangerouslySetInnerHTML={{ __html: prodData?.description.length < 250 ? prodData?.description : prodData?.description.slice(0, 250) + '...' }}
                                            dangerouslySetInnerHTML={{ __html: prodData?.description?.length < 250 ? prodData?.description : prodData?.description?.split(' ').slice(0, 60).join(' ') + '...' }}
                                        />
                                    </div>



                                </div>
                            </div>
                            <div className="w-[100%]  ">
                                <ProductIconDetails />
                            </div>

                            <ProdInfoTab
                                prod_description={prodData?.description ? prodData?.description : "No Compatibilities Found for this Product!"}
                                prod_specifications={prodData?.specifications ? prodData?.specifications : "No Compatibilities Found for this Product!"}
                                prod_compatibility={prodData?.compatibility ? prodData?.compatibility : "No Compatibilities Found for this Product!"}
                            />


                            <ProductSlider title="Related Products" urlText="" urlVal="/products" categoryName={prodData?.category} />

                        </div>



                    </>
                )
            }
        </>
    )
}

export default ProductDetail;
