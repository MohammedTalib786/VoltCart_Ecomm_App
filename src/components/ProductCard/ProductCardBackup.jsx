// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { useCart } from '../../contexts/ProdProvider'
// import placeholderImg from '../../assets/placeholder_img.png'
// import Button from '../FormComp/Button'
// import { BsCart2 } from "react-icons/bs";

// import './productCard.css'

// const ProductCard = ({
//     id,
//     slug,
//     name = "Product Name",
//     price = 500,
//     // featImg = "https://www.tintaccessories.com/wp-content/uploads/2024/01/MagPop-JPEG-1024x1024.jpg",
//     featImg = { placeholderImg },
//     boxWidth = "w-full",
//     urlToProd,
//     prodCat = "Case & cover",
//     ImageGalleryFirst,
//     savePercent = 20
// }) => {

//     let [btnElement, setBtnElement] = useState('addToCart');

//     let navigateToCart = useNavigate();
//     let { cartProducts, addToCartFunc } = useCart();

//     let checkExisting = cartProducts.filter(elem => {
//         // console.log('getting', elem.id === id)
//         // console.log(elem.id)
//         return elem.id === id;
//     })

//     const ItemAddToCart = () => addToCartFunc({ id: id, name: name, feat_img: featImg, price: price, slug: slug, quantity: 1 });

//     const ItemViewCart = () => navigateToCart("/cart")

//     const checkAddToCartElem = () => setBtnElement(btnElement === "addToCart" ? "viewCart" : "addToCart")

//     const handlerAddToCart = (e) => {
//         // >>>>>>>>>>>>>>>>>>>>>>> Calling Main Add to Cart Func
//         e.stopPropagation();
//         e.preventDefault();

//         if (checkExisting[0] === undefined) {
//             ItemAddToCart();
//             checkAddToCartElem();
//         }
//         else if (checkExisting[0].quantity > 9) {
//             alert('maximum number reached!')
//             console.log('maximum number reached!')
//             return
//         }
//         else {
//             console.log('can add')
//             ItemAddToCart();
//             checkAddToCartElem();
//         }


//     }

//     const handlerViewCart = (e) => {
//         e.stopPropagation();
//         e.preventDefault();
//         ItemViewCart();
//         checkAddToCartElem();
//     }



//     return (
//         <>
//             <div
//                 className={`prod_card flex flex-col gap-[12px] p-[15px] cursor-pointer ${boxWidth} bg-[#eeeeee] rounded-[9px] overflow-hidden `}
//             >
//                 <Link to={`/products/${urlToProd}`} >

//                     <div className="w-full flex flex-col items-center">

//                         {/* <img
//                             // src={featImg}
//                             src={hoverImage}
//                             alt="prod-img" className='min-w-[200px] w-full object-cover rounded-lg '
//                         /> */}

//                         {/* Crossfade that doesn't collapse layout */}
//                         <div className="image-wrapper relative ">
//                             {/* Base image in normal flow (defines height) */}
//                             <img
//                                 src={featImg}
//                                 alt="prod-img"
//                                 loading="lazy"
//                             />
//                             {/* Hover image overlaid and faded in */}
//                             <img
//                                 src={ImageGalleryFirst}
//                                 alt="prod-img-hover"
//                                 loading="lazy"
//                             />

//                             <span
//                                 className='absolute bottom-[10px] left-[10px] bg-[#0d6efdb5] px-[12px] py-[8px] rounded-[6px] text-white text-[12px]/[14px] ' >
//                                 Save {savePercent}%</span>

//                         </div>

//                         <div className="texts flex flex-col text-center w-[100%] mt-[20px] mb-[15px] ">
//                             <h3 className='font-primary text-[18px]/[24px] font-[400] w-[100%] text-left mb-[10px] ' >{name}</h3>
//                             <p className='font-body font-[500] text-[#3d3d3d] text-left uppercase text-[12px]/[20px]  rounded-[12px] ' >{prodCat}</p>
//                         </div>

//                         <div className="flex w-full justify-between items-center  " >

//                             <p className='font-primary text-left font-[500] text-[22px]/[28px] w-[50%] '  > &#8377;{price}</p>

//                             {/* <button className=' add_to_cart_btn font-[inter] font-[500] text-[14px] w-[200px] rounded-[12px] mt-[20px] uppercase transition-all flex justify-center items-center lg:py-[10px] py-[7px] border border-black bg-black text-white hover:bg-white hover:text-black cursor-pointer' >Add to Cart Old</button> */}
//                             {
//                                 btnElement === "addToCart" ?

//                                     (<Button
//                                         text="Add to Cart"
//                                         btnIcon={<BsCart2 className='text-[18px]/[18px] mb-[4px] ' />}
//                                         handlerClickBtnComp={handlerAddToCart}
//                                         // additionalClass="add_to_cart_btn w-[85%] top-[295px] left-[22px] absolute  uppercase transition-all flex justify-center items-center p-[12px 25px] px-[25px] py-[12px] border border-black bg-black text-white hover:bg-white hover:text-black cursor-pointer"
//                                         // bgClr="bg-black "
//                                         // borderClr="bg-black"
//                                         additionalClass="add_to_cart_btn w-full font-body text-[16px]/[24px]  uppercase transition-all flex justify-center items-center lg:py-[10px] py-[7px] "
//                                     />) :

//                                     (<Button
//                                         text="View Cart"
//                                         btnIcon={<BsCart2 className='text-[18px]/[18px] mb-[4px] ' />}
//                                         handlerClickBtnComp={handlerViewCart}
//                                         // additionalClass=" view_cart_btn add_to_cart_btn w-[85%] top-[295px] left-[22px] absolute  uppercase transition-all flex justify-center items-center p-[12px 25px] px-[25px] py-[12px] border border-black bg-black text-white hover:bg-white hover:text-black hover:underline cursor-pointer  "
//                                         // bgClr="bg-black "
//                                         // borderClr="bg-black"
//                                         additionalClass=" view_cart_btn add_to_cart_btn underline w-full font-body text-[16px]/[24px] uppercase transition-all flex justify-center items-center lg:py-[10px] py-[7px] "
//                                     />)
//                             }
//                         </div>
//                     </div>

//                 </Link>
//             </div>

//         </>

//     )
// }

// export default React.memo(ProductCard);
