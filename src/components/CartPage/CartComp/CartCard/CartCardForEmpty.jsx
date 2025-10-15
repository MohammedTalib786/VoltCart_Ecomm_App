import './cartCard.css'
import { Link } from 'react-router-dom'
import empCartImg from './empty_cart_image.webp'

const CartCardForEmpty = () => {

    return (
        <div className="cart_card cart_card_empty w-full max-w-[800px] mx-auto tab:px-[40px] tab:py-[40px] px-[20px] py-[30px] flex items-center rounded-[12px] bg-white  " >
            <div className="prodInfo w-full flex tab:flex-row flex-col justify-center items-center gap-[30px]  ">
                <img src={empCartImg} alt="" className=' w-[120px] ' />
                <div className="text flex flex-col gap-[8px] ">
                    <h3 className=' tab:text-[24px]/[30px] text-[18px]/[28px]  ' >Your Cart is Currently Empty </h3>
                    <h5 className=' text-[20px]/[28px] font-semi-bold text-[var(--primary-color)] tab:text-left text-center ' ><Link to='/products' >Return to Shop</Link></h5>
                </div>
            </div>
        </div>
    )
}

export default CartCardForEmpty