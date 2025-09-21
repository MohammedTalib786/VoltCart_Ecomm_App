
const ProductFilter = ({
    checkBoxChanged
}) => {
    return (
        <div
            className=" lg:w-[25%] md:w-[25%]  " >
            <div className="cat-search  w-full bg-white px-[20px] py-[30px] rounded-[12px] 
            sticky top-[100px]  "> {/* This sticky not Working >>> */}

                <h3 className="font-montserrat font-[400] text-[24px]/[32px] border-b-1 pb-[16px] ">Search By Category</h3>
                {/* <h2
                className="font-montserrat tab:text-[26px]/[32px] text-[32px]/[40px] font-[400] border-b-1 pb-[16px] " >Search By Category</h2> */}

                <div className="checkbox-cat flex flex-col md:mt-[30px] mt-[20px] gap-[15px] " >

                    <div className="chkbox flex flex-row gap-[15px] items-center ">
                        <input type="checkbox" name="Covers and Cases" value='Covers and Cases' id="coverCases" onChange={checkBoxChanged}
                            className=' w-[20px] h-[20px] ' />
                        <label htmlFor="coverCases"
                            className='font-poppins font-[400] text-[16px]/[22px] '
                        > Cover and Cases</label>
                    </div>

                    <div className="chkbox flex flex-row gap-[15px] items-center " >
                        <input type="checkbox" name="powerBanks" value='Power Banks' id="powerBanks" onChange={checkBoxChanged}
                            className=' w-[20px] h-[20px] ' />
                        <label htmlFor="powerBanks"
                            className='font-poppins font-[400] text-[16px]/[22px] '
                        >Power Banks</label>
                    </div>

                    <div className="chkbox flex flex-row gap-[15px] items-center " >
                        <input type="checkbox" name="belts" value='Stand and Straps' id="belts" onChange={checkBoxChanged}
                            className=' w-[20px] h-[20px] ' />
                        <label htmlFor="belts"
                            className='font-poppins font-[400] text-[16px]/[22px] '
                        >Stand and Straps</label>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProductFilter