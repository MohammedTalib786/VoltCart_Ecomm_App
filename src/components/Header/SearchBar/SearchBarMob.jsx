import { IoIosSearch } from "react-icons/io";


const SearchBarMob = () => {
  return (
    <div className='w-full flex items-center ' >
      <IoIosSearch className=' text-[18px]/[18px]  absolute left-[36px] ' />
      <input type="text" name="search" id="search" placeholder='Search'
        className=' bg-[#F7FAFC] w-[100%] py-[5px] pl-[34px] font-inter text-[#8B96A5] border-1 border-[#DEE2E7] placeholder-get-grey outline-0 rounded-[6px] '
      />
    </div>
  )
}

export default SearchBarMob;
