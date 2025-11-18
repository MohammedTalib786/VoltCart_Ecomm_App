import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BsCart2 } from "react-icons/bs";

import placeholderImg from '../../assets/placeholder_img.png'
import { useCart } from '../../contexts/ProdProvider'
import Button from '../FormComp/Button'

import './productCard.css'


const ProductCard = ({
    id,
    slug,
    name = "Product Name",
    price = 500,
    featImg = { placeholderImg },
    boxWidth = "w-full",
    urlToProd,
    prodCat = "Case & cover",
    ImageGalleryFirst,
    savePercent = 20,
}) => {
    let [btnElement, setBtnElement] = useState('addToCart');
    let navigateToCart = useNavigate();
    let { cartProducts, addToCartFunc } = useCart();
    let checkExisting = cartProducts.filter(elem => elem.id === id)

    const ItemAddToCart = () => addToCartFunc({ id: id, name: name, feat_img: featImg, price: price, slug: slug, quantity: 1 });

    const ItemViewCart = () => navigateToCart("/cart")

    const checkAddToCartElem = () => setBtnElement(btnElement === "addToCart" ? "viewCart" : "addToCart")

    const handlerAddToCart = (e) => {
        // >>>>>>>>>>>>>>>>>>>>>>> Calling Main Add to Cart Func
        e.stopPropagation();
        e.preventDefault();

        if (checkExisting[0] === undefined) {
            ItemAddToCart();
            checkAddToCartElem();
        }
        else if (checkExisting[0].quantity > 9) {
            alert('Maximum number of single cart items reached.')
            // console.log('maximum number reached!')
            return
        }
        else {
            // console.log('can add')
            ItemAddToCart();
            checkAddToCartElem();
        }
    }

    const handlerViewCart = (e) => {
        e.stopPropagation();
        e.preventDefault();
        ItemViewCart();
        checkAddToCartElem();
    }

    return (
        <>
            <div
                className={`prod_card flex flex-col gap-[12px] p-[15px] cursor-pointer ${boxWidth} rounded-[9px] overflow-hidden  `} >
                <Link to={`/products/${urlToProd}`} >
                    <div className="w-full flex flex-col items-center">
                        <div className="image-wrapper relative ">
                            <img
                                src={featImg}
                                alt="prod-img"
                                loading="lazy"
                            />
                            <img
                                src={ImageGalleryFirst}
                                alt="prod-img-hover"
                                loading="lazy"
                            />
                            <span
                                className='absolute bottom-[10px] left-[10px] bg-[#0d6efdb5] px-[12px] py-[8px] rounded-[6px] text-white text-[12px]/[14px] ' >
                                Save {savePercent}%</span>
                        </div>

                        <div className="texts flex flex-col text-center w-[100%] mt-[20px] mb-[15px] ">
                            <h3 className='font-primary text-[18px]/[24px] font-[400] w-[100%] text-left mb-[10px] ' >{name}</h3>
                            <p className='font-body font-[500] text-[#3d3d3d] text-left uppercase text-[12px]/[20px]  rounded-[12px] ' >{prodCat}</p>
                        </div>

                        <div className="flex w-full justify-between items-center  " >
                            <p className='font-primary text-left font-[500] text-[22px]/[28px] w-[50%] '  > &#8377;{price}</p>
                            {
                                btnElement === "addToCart" ?
                                    (<Button
                                        text="Add to Cart"
                                        btnIcon={<BsCart2 className='text-[18px]/[18px] mb-[4px] ' />}
                                        handlerClickBtnComp={handlerAddToCart}
                                        additionalClass="add_to_cart_btn w-full font-body text-[16px]/[24px]  uppercase transition-all flex justify-center items-center lg:py-[10px] py-[7px] "
                                    />) :

                                    (<Button
                                        text="View Cart"
                                        btnIcon={<BsCart2 className='text-[18px]/[18px] mb-[4px] ' />}
                                        handlerClickBtnComp={handlerViewCart}
                                        additionalClass=" view_cart_btn add_to_cart_btn underline w-full font-body text-[16px]/[24px] uppercase transition-all flex justify-center items-center lg:py-[10px] py-[7px] "
                                    />)
                            }
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default React.memo(ProductCard);
