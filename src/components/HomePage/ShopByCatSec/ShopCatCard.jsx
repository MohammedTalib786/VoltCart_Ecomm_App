import { Link } from 'react-router-dom'
import './shop_cat_card.css'

const ShopCatCard = ({
    catImg,
    additionalClass
}) => {

    return (
        <Link

            className={` block w-full  ${additionalClass} `}
        >

            <div className={` cat_card relative w-full  rounded-[20px] overflow-hidden ${additionalClass} `}  >
                <img src={catImg} alt="" className={` w-full h-full  object-cover rounded-[20px] `} />

                <div className="texts absolute bottom-0 left-[25px] ">
                    <h3 className=' font-primary font-[400] text-[24px]/[32px] text-white  ' >Covers And Cases</h3>
                    <p
                        to="/products"
                        className=" text-white shop_link font-body tab:text-[18px]/[28px] text-[16px]/[26px] font-[300] relative -bottom-[20px] opacity-0 pointer-events-none " >
                        Shop Now
                    </p>
                </div>

            </div>

        </Link>
    )
}

export default ShopCatCard;
