import React, { useState } from 'react'
import './productCard.css'

import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../../contexts/ProdProvider'
import placeholderImg from '../../assets/placeholder_img.png'
import Button from '../FormComp/Button'

const ProductCard = ({
    id,
    slug,
    name = "Product Name",
    price = 500,
    // featImg = "https://www.tintaccessories.com/wp-content/uploads/2024/01/MagPop-JPEG-1024x1024.jpg",
    featImg = { placeholderImg },
    boxWidth = "w-full",
    urlToProd,
    prodCat = "Case & cover",
    ImageGalleryFirst,
}) => {

    let [btnElement, setBtnElement] = useState('addToCart');

    let navigateToCart = useNavigate();
    let { addToCartFunc } = useCart();

    const ItemAddToCart = () => addToCartFunc({ id: id, name: name, feat_img: featImg, price: price, slug: slug, quantity: 1 });

    const ItemViewCart = () => navigateToCart("/cart")

    const checkAddToCartElem = () => setBtnElement(btnElement === "addToCart" ? "viewCart" : "addToCart")

    const handlerAddToCart = (e) => {
        // >>>>>>>>>>>>>>>>>>>>>>> Calling Main Add to Cart Func
        e.stopPropagation();
        e.preventDefault();
        ItemAddToCart();
        checkAddToCartElem();
    }

    const handlerViewCart = (e) => {
        e.stopPropagation();
        e.preventDefault();
        ItemViewCart();
        checkAddToCartElem();
    }


    return (
        <>
            <div className={`prod_card flex flex-col gap-[12px] p-[20px] cursor-pointer ${boxWidth} bg-[#eeeeee] rounded-[9px] overflow-hidden `}
            >
                <Link to={`/products/${urlToProd}`} >

                    <div className="w-[100%] flex flex-col items-center">

                        {/* <img
                            // src={featImg}
                            src={hoverImage}
                            alt="prod-img" className='min-w-[200px] w-full object-cover rounded-lg '
                        /> */}

                        {/* Crossfade that doesn't collapse layout */}
                        <div className="image-wrapper">
                            {/* Base image in normal flow (defines height) */}
                            <img
                                src={featImg}
                                alt="prod-img"
                                loading="lazy"
                            />
                            {/* Hover image overlaid and faded in */}
                            <img
                                src={ImageGalleryFirst}
                                alt="prod-img-hover"
                                loading="lazy"
                            />
                        </div>

                        <div className="texts flex flex-col text-center items-center w-[100%] lg:my-[14px] my-[10px]">
                            <p className='font-[montserrat] font-[500] text-[#00000087] text-[10px] w-fit px-[10px] py-[04px] bg-[#E3F0FF] rounded-[12px] mb-[10px]' >{prodCat}</p>
                            {/* <button className='font-[montserrat] font-[500] text-[#00000087] text-[10px] w-fit px-[10px] py-[04px] bg-[#E3F0FF] rounded-[12px] my-[10px]' >{prodCat}</button> */}
                            <h3 className='font-[inter] font-[500] lg:text-[16px]/[20px] text-[14px]/[20px] w-[100%] capitalize ' >{name}</h3>
                        </div>

                        <p className='font-[inter] font-[600] text-center lg:text-[24px] text-[20px] w-[100%]'  > &#8377; {price} </p>

                        {/* <button className=' add_to_cart_btn font-[inter] font-[500] text-[14px] w-[200px] rounded-[12px] mt-[20px] uppercase transition-all flex justify-center items-center lg:py-[10px] py-[7px] border border-black bg-black text-white hover:bg-white hover:text-black cursor-pointer' >Add to Cart Old</button> */}
                        {
                            btnElement === "addToCart" ?

                                (<Button
                                    text="Add to Cart"
                                    handlerClickBtnComp={handlerAddToCart}
                                    // additionalClass="add_to_cart_btn w-[85%] top-[295px] left-[22px] absolute  uppercase transition-all flex justify-center items-center p-[12px 25px] px-[25px] py-[12px] border border-black bg-black text-white hover:bg-white hover:text-black cursor-pointer"
                                    // bgClr="bg-black "
                                    // borderClr="bg-black"
                                    additionalClass="add_to_cart_btn w-full font-poppins font-[500] text-[16px]/[24px] mt-[10px] uppercase transition-all flex justify-center items-center lg:py-[10px] py-[7px] "
                                />) :

                                (<Button
                                    text="View Cart"
                                    handlerClickBtnComp={handlerViewCart}
                                    // additionalClass=" view_cart_btn add_to_cart_btn w-[85%] top-[295px] left-[22px] absolute  uppercase transition-all flex justify-center items-center p-[12px 25px] px-[25px] py-[12px] border border-black bg-black text-white hover:bg-white hover:text-black hover:underline cursor-pointer  "
                                    // bgClr="bg-black "
                                    // borderClr="bg-black"
                                    additionalClass=" view_cart_btn add_to_cart_btn underline w-full font-poppins font-[500] text-[16px]/[24px] mt-[10px] uppercase transition-all flex justify-center items-center lg:py-[10px] py-[7px] "
                                />)
                        }
                    </div>

                </Link>
            </div>

        </>

    )
}

export default React.memo(ProductCard);
