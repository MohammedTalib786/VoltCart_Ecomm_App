import { Link } from 'react-router-dom'

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

            <div className="search_box w-full  bg-[#f9f9f9] rounded-[16px] pt-[25px] px-[20px] pb-[30px] flex flex-col justify-start gap-[20px] border-[1px] border-[#b5b5b5]  " >

                <div className=" relative rounded-[12px] overflow-hidden w-full ">
                    <img src={feat_img} alt="img" className=' search_feat_img w-full desktop:h-[300px] gt-tab:h-[320px] tab:h-[230px] h-[260px] object-cover rounded-[12px] ' />
                    <span className='absolute bottom-[15px] left-[15px] bg-[#0d6efdb5] px-[12px] py-[8px] rounded-[6px] text-white text-[12px]/[14px] ' >{post_category}</span>
                </div>

                <div className=" flex flex-col gap-[4px] ">
                    <p className='text-primary text-[16px]/[24px] font-[400] ' > <span className=' font-[500] ' >Category:</span> {category}</p>
                    <p className=' font-primary text-[18px]/[26px] font-[400] pb-[6px] ' >{name}</p>

                    <div className={`cta flex flex-row gap-[10px] item-center content-center`}>
                        <svg className="  mt-[5px] " stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="16px" width="16px" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"></path></svg>
                        <p className={`font-primary text-[16px]/[20px]`}>Read More</p>
                    </div>

                </div>

            </div>
        </Link>
    )
}

export default SearchBox