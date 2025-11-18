const WhyChooseFeatCard = ({ additionalClass, mainIcon, iconText, }) => {
    return (
        <div
            className={` icon_box ${additionalClass} flex flex-col text-center justify-center items-center gap-[10px] bg-white  min-h-[130px] desktop:w-[23%] gt-tab:w-[30%] tab:w-[48%] w-full px-[20px] py-[20px] rounded-[10px] cursor-default `} >
            {mainIcon}
            <h5 className='text-[16px]/[24px] font-[Poppins] text-black ' >{iconText}</h5>
        </div>
    )
}

export default WhyChooseFeatCard;
