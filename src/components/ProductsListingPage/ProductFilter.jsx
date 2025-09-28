import FilterTest from './FilterTest'
import './product-comp-style.css'

const ProductFilter = ({
    minVal,
    maxVal,
    priceFilter,
    setPriceFilter,
    checkValue,
    handleCheckbox
}) => {

    return (
        <div
            className=" lg:w-[25%] md:w-[25%] sticky top-[25px] left-0  " >

            <div className="cat-search  w-full bg-white px-[20px] py-[30px] rounded-[12px] 
            sticky top-[100px]  "> {/* This sticky not Working >>> */}

                <h3 className="font-montserrat font-[400] text-[24px]/[32px]  ">Filter By</h3>
                {/* <h2
                className="font-montserrat tab:text-[26px]/[32px] text-[32px]/[40px] font-[400] border-b-1 pb-[16px] " >Search By Category</h2> */}

                <div className="  pt-[12px] px-[10px] pb-[0] " >


                    <h4 className="font-montserrat font-[500] text-[18px]/[24px]" >Category</h4>

                    <div className="checkbox-cat flex flex-col gap-[15px]  border-black border-b pt-[15px] px-[10px] pb-[25px] " >

                        <div className="chkbox flex flex-row gap-[10px] items-center ">
                            <input
                                type="checkbox" id="coverCases" name="Covers and Cases"
                                value="Covers and Cases"
                                onChange={handleCheckbox}
                                checked={checkValue.includes("Covers and Cases")}
                            />

                            <label htmlFor="coverCases"
                                className='font-poppins font-[400] text-[16px]/[22px] '
                            > Cover and Cases</label>
                        </div>

                        <div className="chkbox flex flex-row gap-[10px] items-center " >
                            <input
                                type="checkbox" id="powerBanks" name="powerBanks"
                                value="Power Banks"
                                onChange={handleCheckbox}
                                checked={checkValue.includes("Power Banks")}
                            />

                            <label htmlFor="powerBanks"
                                className='font-poppins font-[400] text-[16px]/[22px] '
                            >Power Banks</label>
                        </div>

                        <div className="chkbox flex flex-row gap-[10px] items-center " >
                            <input
                                type="checkbox" id="belts" name="belts"
                                value="Stand and Straps"
                                onChange={handleCheckbox}
                                checked={checkValue.includes("Stand and Straps")}
                            />

                            <label htmlFor="belts"
                                className='font-poppins font-[400] text-[16px]/[22px] '
                            >Stand and Straps</label>
                        </div>

                    </div>

                    <h4 className="font-montserrat font-[500] text-[18px]/[24px] pt-[20px] " >Price</h4>

                    <div className=" px-[10px] pt-[10px] ">

                        <input
                            type="range" className="slider"
                            min={minVal ?? 0}
                            max={maxVal ?? 0}
                            value={priceFilter ?? 0}
                            onChange={(e) => setPriceFilter(Number(e.target.value))}
                        />

                        <div className=" w-full flex justify-between pt-[15px] ">
                            <span className='font-poppins font-[400] text-[16px]/[22px] ' >&#8377;{minVal ?? 0}</span>
                            <span className='font-poppins font-[400] text-[16px]/[22px] ' >&#8377;{priceFilter}</span>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProductFilter