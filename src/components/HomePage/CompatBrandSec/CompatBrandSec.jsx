import BrandSlider from "./BrandSlider"


const CompatBrandSec = () => {
    return (
        <div className=" mx-auto desktop:py-[90px]  gt-tab:py-[70px] py-[50px] bg-white  " >

            <h3
                className=' font-primary gt-tab:text-[45px]/[55px] tab:text-[40px]/[45px] text-[32px]/[40px] font-[300] text-center tab:px-0 px-[20px] pb-[30px]  '
            >
                Compatible With <br className=" tab:hidden block " />Brands Like
            </h3>

            <BrandSlider />

        </div>
    )
}

export default CompatBrandSec
