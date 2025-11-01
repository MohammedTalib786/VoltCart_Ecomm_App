
import Button from '../../FormComp/Button'

const NewYearSaleSec = () => {
    return (
        <div className=" relative min-h-[600px] bg-[#F6F6F6] w-full flex justify-between items-center " >
            <div className=" p-[50px] max-w-[1440px] mx-auto w-full text_cont flex flex-col justify-center items-start gap-[30px]  ">
                <div className="">
                    <h3 className='text-[20px]/[30px] font-light'  >10% off</h3>
                    <h2 className='text-[60px]/[70px] font-light'  >NEW YEAR <br /> SALE</h2>
                </div>
                <Button text="SHOP SALE" />
            </div>
            <img src="https://themewagon.github.io/MiniStore/images/single-image1.png" alt="" className='w-[500px] absolute right-0 bottom-0  ' />
        </div>
    )
}

export default NewYearSaleSec