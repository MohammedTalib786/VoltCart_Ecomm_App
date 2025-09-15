import { useState } from 'react'
import Button from '../../FormComp/Button';
import { useNavigate } from 'react-router-dom';
import { IoCloseOutline } from "react-icons/io5";
import './search-bar.css'

const SearchBar = ({ searchBoxOpen, setSearchBoxOpen }) => {
    let navigate = useNavigate();
    let [searchQuery, setSearchQuery] = useState('');

    const handlerSearch = (e) => {
        // console.log('search form submit!')
        e.preventDefault();
        setSearchBoxOpen({
            topVal: "-top-[490px]",
            opacity: 0,
            pointerEvents: "none"
        })
        // setSearchQuery(e.target.value)
        // console.log('searchQuery', searchQuery, typeof searchQuery)
        if (!searchQuery || searchQuery.length <= 0) {
            alert('Search Box Can not be empty!');
        }
        else {
            navigate(`/search-listing?query=${searchQuery}`)
            setSearchQuery('')
        }
    }

    const handerCloseSearchBar = () => {
        setSearchBoxOpen({
            topVal: "-top-[490px]",
            opacity: 0,
            pointerEvents: "none"
        })
    }

    return (

        <div className={`desktop:h-[90vh] gt-tab:h-[94vh] h-[90vh] w-full bg-white absolute ${searchBoxOpen.topVal}  z-[9999999] flex flex-col gap-[20px] text-para-black justify-center items-start opacity-${searchBoxOpen.opacity} pointer-events-${searchBoxOpen.pointerEvents} searchBarMainBox `} >

            <h4 className='font-inter text-[26px]/[26px] font-400 tab:px-[50px] px-[20px] ' >Explore more</h4>

            <form
                onSubmit={handlerSearch}
                className='w-full tab:px-[50px] px-[20px]  '
            >
                <div className='flex items-center' >

                    <input type="text" name="search" id="search" placeholder='Search'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className='w-[100%] py-[9px] pl-[20px] font-inter text-black-1c border-1 border-r-0 border-primary placeholder-[#7a7a7a] outline-0 rounded-bl-[6px] rounded-tl-[6px] '
                    />

                    <Button
                        type="submit"
                        additionalClass="search_btn "
                        btnWidth="w-fit"
                        text='Search'
                    />

                </div>
            </form >
            <button
                onClick={handerCloseSearchBar}
                className=' absolute  top-[25px] right-[30px] text-para-black text-[40px]/[40px] cursor-pointer ' >
                <IoCloseOutline /> </button>

        </div>

    )
}

export default SearchBar;