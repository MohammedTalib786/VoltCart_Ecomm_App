import { useState } from 'react'
import { Link } from 'react-router-dom';
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import './cartCard.css'
import { useCart } from '../../../../contexts/ProdProvider'
import placeholderImg from '../../../../assets/placeholder_img.png'
import Button from '../../../FormComp/Button';
import QuantityCounter from '../../../QuantityCounter/QuantityCounter';

const CartCard = ({
    id,
    prodName = "Item 1",
    price,
    slug,
    feat_img = placeholderImg
}) => {

    let { cartProducts, changeQuantityFunc, removeFromCartFunc } = useCart();
    // let item = cartProducts.find(item => item.id === id);

    // let [msg, showMsg] = useState({
    //     maxItemMsg: false,
    //     minItemMsg: false
    // })

    const handlerRemoveItem = (id) => removeFromCartFunc(id)

    // const handlerAddQnt = () => {
    //     if (item.quantity >= 10) {
    //         showMsg(prevVal => ({ ...prevVal, maxItemMsg: true }))
    //         setTimeout(() => showMsg(prevVal => ({ ...prevVal, maxItemMsg: false })), 1500)
    //     }
    //     changeQuantityFunc(id, item.quantity <= 9 ? item.quantity + 1 : 10)
    // }

    // const handlerMinusQnt = () => {
    //     if (item.quantity <= 1) {
    //         showMsg(prevVal => ({ ...prevVal, minItemMsg: true }))
    //         setTimeout(() => showMsg(prevVal => ({ ...prevVal, minItemMsg: false })), 1500)
    //     }
    //     changeQuantityFunc(id, item.quantity > 1 ? item.quantity - 1 : 1)
    // }

    return (

        <div className="cart_card w-full p-[20px] flex justify-between items-center tab:flex-row flex-col rounded-[12px] border-[1px] border-[#737373] " >

            <Link to={`/products/${slug}`} className=' w-full ' >
                <div className="prodInfo flex w-full items-center tab:flex-row flex-col gap-[20px] ">
                    <img src={feat_img}
                        alt="" className='tab:min-w-[110px] tab:w-[110px] min-w-[250px] w-full rounded-[12px] '
                    />
                    <div className="text flex flex-col items-start tab:gap-[5px] gap-[10px]  ">
                        <h3 className=' font-primary desktop:text-[22px]/[28px] text-[20px]/[28px] tab:mr-[10px] mr-0 tab:text-left text-center ' >{prodName}</h3>
                        <h5 className=' text-[20px]/[28px] font-semi-bold text-[var(--primary-color)] tab:w-auto w-full tab:text-left text-center   ' >&#8377;{price}</h5>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                handlerRemoveItem(id)
                            }}
                            className='text-red-500 cursor-pointer hover:underline tab:w-auto w-full tab:text-left text-center  ' 
                        >Remove Item From Cart</button>
                    </div>
                </div>
            </Link>


            <QuantityCounter
                id={id}
                borderColor="primary"
                additionalClass=" tab:w-auto w-[70%] flex justify-between tab:mt-0 mt-[20px] "

            />

        </div>

    )

}

export default CartCard