import placeholderImg from '../../assets/placeholder_img.png'


const NoResultSearchBox = () => {
    return (
        <div className="search_box w-full  bg-[#f9f9f9] rounded-[16px] pt-[25px] px-[20px] pb-[30px] flex flex-col justify-start items-center gap-[20px] border-[1px] border-[#b5b5b5]  " >

            <div className=" relative rounded-[12px] overflow-hidden w-full ">
                <img src={placeholderImg} alt="img" className=' search_feat_img w-full gt-tab:h-[280px] h-[220px] object-cover rounded-[12px] ' />
            </div>

            <div className=" flex flex-col gap-[4px] ">
                <p className=' font-primary text-[22px]/[28px] font-[400] pb-[6px] ' >No Data Found!</p>
            </div>

        </div>
    )
}

export default NoResultSearchBox