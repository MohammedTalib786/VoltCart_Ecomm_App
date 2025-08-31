import Button from '../../FormComp/Button'

const YourOrderComp = ({
    orderProcessLoader
}) => {


    return (
        <>
            <div className=' w-[40%] bg-red-200 flex flex-col justify-between ' >

                <p>YourOrderComp</p>

                {/* >>>>>>>>>>>>>> Demo Submit Button */}
                <div className="flex" >
                    <Button
                        // text='Dummy Place Order'
                        text={orderProcessLoader ? <span className="orderProcessLoader m-2"></span> : "Dummy Place Order"}
                        btnWidth='w-[100%]'
                        type="submit"
                    />

                </div>
            </div>

        </>
    )
}

export default YourOrderComp