import { Link } from 'react-router-dom'


const ShopCatCard = ({
    catImg,
    catName,
    catLink,
    additionalClass,
    imgHeight
}) => {
    return (
        <Link
            to={catLink}
            className={` block w-full ${additionalClass} `} >
            <div className={` cat_card relative w-full  rounded-[20px] overflow-hidden  `}  >
                <img src={catImg} alt="" className={` w-full h-full  object-cover rounded-[20px] ${imgHeight}  `} />
                <div className="texts absolute bottom-0 left-[25px] ">
                    <h3 className=' font-primary font-[400] text-[24px]/[32px] text-white  ' >{catName}</h3>
                    <p
                        className=" text-white shop_link font-body tab:text-[18px]/[28px] text-[16px]/[26px] font-[300] relative -bottom-[20px] opacity-0 pointer-events-none " >
                        Shop Now
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default ShopCatCard;
