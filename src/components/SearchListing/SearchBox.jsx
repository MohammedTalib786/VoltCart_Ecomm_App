import placeholderImg from '../../assets/placeholder_img.png'
import { Link } from 'react-router-dom'
import './search-box.css'

const SearchBox = ({
    name,
    slug,
    category,
    categoryURL,
    feat_img = placeholderImg,
}) => {
    // console.log('name', name)
    // console.log('slug', slug)
    return (
        <Link to={`/${categoryURL}/${slug}`}  >
            <div className="search_box bg-[#f9f9f9] rounded-[16px] w-full px-[14px] py-[12px] flex justify-start items-center gap-[14px] border-[1px] border-[#b5b5b5]  " >
                <img src={feat_img} alt="img" className='w-full max-w-[110px] rounded-[12px] ' />
                <div className=" flex flex-col gap-[6px] ">
                    <p className='text-primary font-[500] ' >{category}</p>
                    <p>{name}</p>
                </div>
            </div>
        </Link>
    )
}

export default SearchBox