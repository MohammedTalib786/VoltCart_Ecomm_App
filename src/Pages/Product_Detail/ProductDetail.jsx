import { useNavigate, useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Button from '../../components/FormComp/Button';
import NumCounter from '../../components/NumCounter/NumCounter';
import ImageGallerySlider from '../../components/PDP_Page/ImageGallerySliders/ImageGallerySlider';
import ProductIconDetails from '../../components/PDP_Page/ProductFeaturesBlock/ProductIconDetails';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import ProductSlider from '../../components/ProductSlider/ProductSlider';
import Loader from '../../components/Loader/SkeletonLoaderProduct';
import placeholderImg from '../../assets/placeholder_img.png';
import QuantityCounter from '../../components/QuantityCounter/QuantityCounter';
import { BsCart2 } from 'react-icons/bs';
import ProdInfoTab from '../../components/PDP_Page/Tabs/ProdInfoTab';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { TfiClose } from "react-icons/tfi";

import { MdShare } from "react-icons/md";
import { useCart } from '../../contexts/ProdProvider';
import { useEffect, useState } from 'react';

import ShareComponent from '../../components/PDP_Page/ShareComponent/ShareComponent';
import { Accordion } from 'radix-ui';
import ProdInfoAccordian from '../../components/PDP_Page/Accordian/ProdInfoAccordian';

import './prodstyle.css'


const ProductDetail = () => {

    let params = useParams();
    let navigate = useNavigate()
    let productsAPI = import.meta.env.VITE_PRODUCT_API_KEY;
    // console.log('params', params, typeof params)

    let useProdDetail = useFetch(`${productsAPI}${params.slug}`);
    let { loader, error, data: prodData } = useProdDetail;
    let { category, compatibility, description, feat_img, excerpt, featured_col, id, img_gallery, inStock, name, price, sku, slug, specifications }
        = prodData;
    // console.log('prodData'.prodData)
    if (!prodData) return ("no product found")

    let [btnElement, setBtnElement] = useState('addToCart');
    const checkAddToCartElem = () => setBtnElement(btnElement === "addToCart" ? "viewCart" : "addToCart")

    let { cartProducts, addToCartFunc } = useCart();

    let [shareComp, openShareComp] = useState({
        opacity: 0,
        pointerEvents: "none"
        // opacity: 1,
        // pointerEvents: "all"
    })

    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, 'change', (event) => {
        // console.log('event', event)
        return event > 1 ? openShareComp({ opacity: 0, pointerEvents: "none" }) : '';
    })

    let currentLocalShareURL = `${window.location.hostname}:${window.location.port}${window.location.pathname}`

    let checkExisting = cartProducts.filter(elem => elem.id === id)
    // console.log('checkExisting[0]', checkExisting[0])

    // Issue when there is no product

    // and add a msg when someone puts something in cart
    const handlerAddToCartItem = () => {
        console.log('item added to cart')

        if (checkExisting[0] === undefined) {
            addToCartFunc({ id: id, name: name, feat_img: feat_img, price: price.sale_price, slug: slug, quantity: 1 })
            checkAddToCartElem()
        }
        else if (checkExisting[0].quantity > 9) {
            alert('maximum number reached!')
            console.log('maximum number reached!')
            return
        }
        else {
            console.log('can add')
            addToCartFunc({ id: id, name: name, feat_img: feat_img, price: price.sale_price, slug: slug, quantity: 1 })
            checkAddToCartElem()
        }
    }

    const handlerViewCart = () => {
        navigate("/cart")
    }

    const handlerBuyNowItem = () => {
        if (checkExisting[0] === undefined) {
            addToCartFunc({ id: id, name: name, feat_img: feat_img, price: price.sale_price, slug: slug, quantity: 1 })
            navigate("/checkout")
        }
        else if (checkExisting[0].quantity > 9) {
            alert('Please Reduce the Quantity of This Product From Cart to Continue!')
            console.log('maximum number reached!')
            return
        }
        else {
            addToCartFunc({ id: id, name: name, feat_img: feat_img, price: price.sale_price, slug: slug, quantity: 1 })
            navigate("/checkout")
        }
    }


    return (
        <>
            {
                loader ? <Loader /> : error ? (<p className="text-red-500 font-body tab:text-[18px]/[28px] text-[16px]/[26px] font-[300] ">Something went wrong: {error.message}</p>) : (
                    <>
                        <div className="container_layout mx-auto flex justify-center items-center flex-col"  >

                            <div className="w-full pt-[50px] pb-[20px] tab:block hidden ">
                                <BreadCrumbs />
                            </div>

                            <div className=' w-full flex flex-wrap sm:flex-nowrap tab:gap-[30px] gap-[50px]  pb-[50px] ' >

                                {/* >>>>>>>>>>>>> Left Section */}
                                <div className="left_sec w-[100%] md:w-[50%] tab:pt-0 pt-[50px] " >
                                    {/* >>>>>>>>>> Image Gallery Slider */}
                                    <ImageGallerySlider
                                        // apiImg={!prodData?.img_gallery || prodData?.img_gallery.length < 2 ? [placeholderImg, placeholderImg, placeholderImg, placeholderImg] : prodData?.img_gallery}
                                        apiImg={!img_gallery || img_gallery.length < 2 ? [placeholderImg, placeholderImg, placeholderImg, placeholderImg] : img_gallery}
                                    />
                                </div>

                                {/* >>>>>>>>>>>>> Right Section */}
                                <div className="right_sec w-[100%] md:w-[50%] tab:pr-[20px] pr-0  ">

                                    <div className="w-full  pb-[20px] tab:hidden block ">
                                        <BreadCrumbs />
                                    </div>

                                    <div className="flex justify-between items-center  gt-tab:pb-[5px]  ">
                                        <span className='font-body text-[16px]/[24px] text-black  ' >{sku}</span>
                                        <button title='Share this Product'
                                            className='share_btn cursor-pointer '
                                            onClick={() => openShareComp({ opacity: 1, pointerEvents: "all" })}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className='w-full h-[35px] fill-[#0D6EFD] ' ><path d="M371.8 82.4C359.8 87.4 352 99 352 112L352 192L240 192C142.8 192 64 270.8 64 368C64 481.3 145.5 531.9 164.2 542.1C166.7 543.5 169.5 544 172.3 544C183.2 544 192 535.1 192 524.3C192 516.8 187.7 509.9 182.2 504.8C172.8 496 160 478.4 160 448.1C160 395.1 203 352.1 256 352.1L352 352.1L352 432.1C352 445 359.8 456.7 371.8 461.7C383.8 466.7 397.5 463.9 406.7 454.8L566.7 294.8C579.2 282.3 579.2 262 566.7 249.5L406.7 89.5C397.5 80.3 383.8 77.6 371.8 82.6z" /></svg>
                                        </button>
                                    </div>


                                    <ShareComponent shareComp={shareComp} openShareComp={openShareComp} currentLocalShareURL={currentLocalShareURL} />

                                    {/* <h3 className='font-primary text-[42px]/[55px] font-[400]'>{prodData?.name}</h3> */}
                                    <h3 className='font-primary gt-tab:text-[34px]/[42px] tab:text-[30px]/[40px] text-[26px]/[34px] font-[300]'>{name}</h3>

                                    <div className="price_cont flex flex-wrap items-center w-full  gap-[12px] my-[20px] gt-tab:mt-[15px] " >
                                        <p className='font-body tab:text-[30px]/[36px] text-[28px]/[34px] text-center  text-black'  > &#8377;{price?.sale_price}</p>
                                        <p className='font-body tab:text-[24px]/[30px] text-[22px]/[28px] text-center line-through text-[#A0A0A0]'  > &#8377;{price?.reg_price}</p>
                                    </div>

                                    <div className=" flex gap-[15px] gt-tab:flex-row  tab:flex-col flex-col ">

                                        {
                                            btnElement === "addToCart" ?

                                                (<Button
                                                    text="Add to Cart"
                                                    handlerClickBtnComp={handlerAddToCartItem}
                                                    btnIcon={<BsCart2 className='text-[18px]/[18px] mb-[4px] ' />}
                                                    additionalClass=" w-full "
                                                // additionalClass="add_to_cart_btn w-[85%] top-[295px] left-[22px] absolute  uppercase transition-all flex justify-center items-center p-[12px 25px] px-[25px] py-[12px] border border-black bg-black text-white hover:bg-white hover:text-black cursor-pointer"
                                                // bgClr="bg-black "
                                                // borderClr="bg-black"
                                                />) :

                                                (<Button
                                                    text="View Cart"
                                                    handlerClickBtnComp={handlerViewCart}
                                                    btnIcon={<BsCart2 className='text-[18px]/[18px] mb-[4px] ' />}
                                                    additionalClass=" w-full "
                                                // additionalClass=" view_cart_btn add_to_cart_btn w-[85%] top-[295px] left-[22px] absolute  uppercase transition-all flex justify-center items-center p-[12px 25px] px-[25px] py-[12px] border border-black bg-black text-white hover:bg-white hover:text-black hover:underline cursor-pointer  "
                                                // bgClr="bg-black "
                                                // borderClr="bg-black"
                                                />)
                                        }

                                        <Button
                                            text="Buy Now"
                                            btnIcon={<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 -960 960 960" className='fill-primary hover:fill-white ' ><path d="m40-240 20-80h220l-20 80H40Zm80-160 20-80h260l-20 80H120Zm623 240 20-160 29-240 10-79-59 479ZM240-80q-33 0-56.5-23.5T160-160h583l59-479H692l-11 85q-2 17-15 26.5t-30 7.5q-17-2-26.5-14.5T602-564l9-75H452l-11 84q-2 17-15 27t-30 8q-17-2-27-15t-8-30l9-74H220q4-34 26-57.5t54-23.5h80q8-75 51.5-117.5T550-880q64 0 106.5 47.5T698-720h102q36 1 60 28t19 63l-60 480q-4 30-26.5 49.5T740-80H240Zm220-640h159q1-33-22.5-56.5T540-800q-35 0-55.5 21.5T460-720Z" /></svg>}
                                            additionalClass="buy_now_btn w-full  "
                                            handlerClickBtnComp={handlerBuyNowItem}
                                        />
                                    </div>

                                    <div className="text tab:py-[20px] pt-[20px] " >
                                        <p
                                            className='text-black font-body tab:text-[18px]/[28px] text-[16px]/[26px] font-[300] dang-cont'
                                            // dangerouslySetInnerHTML={{ __html: prodData?.description.length < 250 ? prodData?.description : prodData?.description.slice(0, 250) + '...' }}
                                            // dangerouslySetInnerHTML={{ __html: prodData?.description?.length < 250 ? prodData?.description : prodData?.description?.split(' ').slice(0, 60).join(' ') + '...' }}
                                            dangerouslySetInnerHTML={{ __html: description?.split('<ul>')?.slice(0, 1)?.join() }}
                                        />
                                    </div>

                                </div>
                            </div>

                            <div className="w-[100%]  ">
                                <ProductIconDetails />

                            </div>

                            <ProdInfoTab
                                prod_description={description ? description : "No Description Found for this Product!"}
                                prod_specifications={specifications ? specifications : "No Specifications Found for this Product!"}
                                prod_compatibility={compatibility ? compatibility : "No Compatibilities Found for this Product!"}
                            />


                            <ProdInfoAccordian
                                prod_description={description ? description : "No Description Found for this Product!"}
                                prod_specifications={specifications ? specifications : "No Specifications Found for this Product!"}
                                prod_compatibility={compatibility ? compatibility : "No Compatibilities Found for this Product!"}
                            />


                            <ProductSlider title="Related Products" urlText="" urlVal="/products" categoryName={category} />

                        </div>

                    </>
                )
            }
        </>
    )
}

export default ProductDetail;
