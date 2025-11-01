import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'

import placeholderImg from '../../assets/placeholder_img.png'

import './search-box.css'


const SearchBox = ({
    name,
    slug,
    category,
    post_category,
    post_categoryURL,
    feat_img = placeholderImg,
    isDisabled = false
}) => {

    return (
        <Link
            onClick={(e) => { if (isDisabled) e.preventDefault() }}
            to={`/${post_categoryURL}/${slug}`}
            className=' block desktop:w-[32%] tab:w-[48%] w-full  '
        >

            <div className="search_box w-full  bg-[#f9f9f9] rounded-[16px] pt-[25px] px-[20px] pb-[30px] flex flex-col justify-start items-center gap-[20px] border-[1px] border-[#b5b5b5]  " >

                <div className=" relative rounded-[12px] overflow-hidden w-full ">
                    <img src={feat_img} alt="img" className=' search_feat_img w-full gt-tab:h-[280px] h-[220px] object-cover rounded-[12px] ' />
                    <span className='absolute bottom-[15px] left-[15px] bg-[#0d6efdb5] px-[12px] py-[8px] rounded-[6px] text-white text-[12px]/[14px] ' >{post_category}</span>
                </div>

                <div className=" flex flex-col gap-[4px] ">
                    <p className='text-primary text-[16px]/[24px] font-[400] ' > <span className=' font-[500] ' >Category:</span> {category}</p>
                    <p className=' font-primary text-[18px]/[26px] font-[400] pb-[6px] ' >{name}</p>

                    <div className={`cta flex flex-row gap-[10px] item-center content-center`}> <BsArrowRight className='mt-[5px] ' /> <p className={`font-primary text-[16px]/[20px]`}>Read More</p></div>

                </div>

            </div>
        </Link>
    )
}

export default SearchBox