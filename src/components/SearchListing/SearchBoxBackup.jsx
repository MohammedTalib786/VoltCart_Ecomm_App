// import placeholderImg from '../../assets/placeholder_img.png'
// import { Link } from 'react-router-dom'
// import './search-box.css'

// const SearchBoxBackup = ({
//     name,
//     slug,
//     category,
//     categoryURL,
//     feat_img = placeholderImg,
//     isDisabled = false
// }) => {

//     return (
//         <Link
//             onClick={(e) => { if (isDisabled) e.preventDefault() }}
//             to={`/${categoryURL}/${slug}`}  >
//             <div className="search_box bg-[#f9f9f9] rounded-[16px] w-full px-[14px] py-[12px] flex justify-start items-center gap-[14px] border-[1px] border-[#b5b5b5]  " >
//                 <img src={feat_img} alt="img" className='w-full h-full max-w-[110px] max-h-[110px] object-cover rounded-[12px] ' />
//                 <div className=" flex flex-col gap-[4px] ">
//                     <p className='text-primary text-[16px]/[24px] font-[500] ' >{category}</p>
//                     <p className=' font-primary text-[18px]/[24px] font-[400] ' >{name}</p>
//                 </div>
//             </div>
//         </Link>
//     )
// }

// export default SearchBoxBackup