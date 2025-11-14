import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { TfiClose } from "react-icons/tfi";

import Button from '../../FormComp/Button';

import './search-bar.css';


const SearchBar = ({ searchBoxOpen, setSearchBoxOpen, setHeaderBg, setSvgLogoColor, setNavLinksAndIconsColor, setScrolledHeader }) => {
    let navigate = useNavigate();
    let [searchQuery, setSearchQuery] = useState('');

    const handlerSearch = (e) => {
        e.preventDefault();
        setSearchBoxOpen({
            topVal: "-top-[490px]",
            opacity: 0,
            pointerEvents: "none"
        })

        if (!searchQuery || searchQuery.length <= 0) alert('Search field can not be empty!');

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

        if (window.scrollY > 10) {
            setHeaderBg('white');
            setSvgLogoColor('#0D6EFD')
            setScrolledHeader('scrolledHeader')
            setNavLinksAndIconsColor('black')
        }

        else {
            setHeaderBg('transparent')
            setSvgLogoColor('white')
            setNavLinksAndIconsColor('white')
            setScrolledHeader('unScrolledHeader')
        }
    }


    return (
        <div className={` min-h-[250px] h-full w-full bg-white absolute ${searchBoxOpen.topVal} z-[9999999] flex flex-col gap-[20px] text-black justify-center items-start opacity-${searchBoxOpen.opacity} pointer-events-${searchBoxOpen.pointerEvents} searchBarMainBox `} >

            <div className=" relative max-w-[1440px] w-full mx-auto flex flex-col gap-[20px] text-black justify-center items-start  ">

                <h4 className='font-primary text-[26px]/[34px] font-[300] desktop:px-[50px] tab:px-[30px] px-[20px] ' >Explore More</h4>

                <form
                    onSubmit={handlerSearch}
                    className='w-full desktop:px-[50px] tab:px-[30px] px-[20px]  '
                >
                    <div className='flex items-center' >

                        <input type="text" name="search" id="search" placeholder='Search'
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className='w-[100%] py-[9px] pl-[20px] border-3 border-r-0 border-primary placeholder-[#494949] outline-0 rounded-bl-[6px] rounded-tl-[6px] '
                        />
                        <Button
                            type="submit"
                            additionalClass="search_btn "
                            btnWidth="w-fit"
                            text='Search'
                        />
                    </div>
                </form>

                <button
                    onClick={handerCloseSearchBar}
                    className=' absolute tab:-top-[30px] -top-[15px] desktop:right-[45px] gt-tab:right-[25px] tab:right-[30px] right-[20px] text-black text-[40px]/[40px] cursor-pointer ' >
                    <TfiClose className=' tab:text-[30px]/[30px] text-[25px]/[25px] ' />
                </button>
            </div>
        </div>
    )
}

export default SearchBar;
