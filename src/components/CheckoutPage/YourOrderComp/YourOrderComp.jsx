import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '../../FormComp/Button';


const YourOrderComp = ({
    orderProcessLoader,
    isDisabled,
    cartProducts,
    cartItemSubTotal,
    itemTotal,
    calculateTotal,
    shippingDetails,
    shippingCharges,
    setShippingCharges
}) => {
    let [pincode, states, town_city] = [shippingDetails.pincode, shippingDetails.states, shippingDetails.town_city]
    let [cartItemTotal, setCartItemTotal] = useState(cartItemSubTotal);
    let [gstText, setGstText] = useState('')
    cartProducts.map(elem => cartItemSubTotal += (elem.price * elem.quantity))

    // >>>>>>>>>>>>>>>>>>>>>>>>> Set Shipping Charges
    useEffect(() => {
        if (cartItemSubTotal < 1100) setShippingCharges(55);
        else if (cartItemSubTotal >= 1100 && cartItemSubTotal <= 4000) setShippingCharges(349);
        else if (cartItemSubTotal >= 4001 && cartItemSubTotal <= 7000) setShippingCharges(599);
        else if (cartItemSubTotal >= 7001) setShippingCharges(999);
    }, [cartItemSubTotal, shippingDetails]);

    useEffect(() => {
        if (town_city === undefined ||
            town_city === '' ||
            states === '' ||
            states === undefined ||
            pincode === 0 ||
            pincode === '' ||
            pincode === undefined) {
            setCartItemTotal(cartItemSubTotal)
        }
        else {
            setCartItemTotal(cartItemSubTotal + shippingCharges)
        }
    }, [shippingDetails, cartItemSubTotal, shippingCharges])

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>> GST Text Logic
    useEffect(() => {
        let gstCalc = ((cartItemTotal * 100) / (100 + 5)) * 5 / 100;
        let text = '';
        if (states === 'Maharashtra' || states === '' || states === undefined) {
            const halfGst = (gstCalc / 2).toFixed(2);
            text = `(includes <span className='text-[22px]/[28px] w-[100%] text-[var(--primary-color)] ' >₹${halfGst}</span> CGST, <span className='text-[22px]/[28px] w-[100%] text-[var(--primary-color)] ' >₹${halfGst}</span> SGST)`;
        }
        else text = `(includes <span className='text-[22px]/[28px] w-[100%] text-[var(--primary-color)] ' >₹${gstCalc.toFixed(2)}</span> IGST)`;
        setGstText(text);
    }, [cartItemTotal, states])

    useEffect(() => {
        calculateTotal(cartItemTotal)
    }, [cartItemTotal])
    // console.log('itemTotal inside yourOrderComp ', itemTotal, typeof itemTotal)

    return (
        <>
            <div className=' gt-tab:w-[50%] w-full h-full bg-white rounded-[12px] flex flex-col justify-between ' >
                <div className="order_sum flex flex-col w-[100%] tab:py-[30px] tab:px-[30px] py-[25px] px-[20px]  " >
                    <h3 className=' font-primary tab:text-[36px]/[44px] text-[30px]/[38px] font-[400] ' >Your Order</h3>

                    <div className=" flex flex-col  "  >
                        <div className=" py-[20px] tab:px-[10px] px-[5px] border-b-1 border-[#676767] flex flex-col gap-[15px] ">
                            <div className="prods flex flex-col gap-[8px] ">
                                {
                                    cartProducts.map(elem => <p className=' text-[18px]/[26px]  ' key={elem.id} >
                                        <span className='text-primary ' >&#8377;{elem.price * elem.quantity}</span>&nbsp;{elem.name}<span className='font-[500] ' >&nbsp; x{elem.quantity}</span>
                                    </p>)
                                }
                            </div>
                            <p className=' text-[18px]/[26px] w-[100%]  ' >
                                Subtotal: &nbsp;
                                <span className=' text-[22px]/[28px] w-[100%] text-[var(--primary-color)] ' >&#8377;{cartItemSubTotal}</span>
                            </p>
                        </div>

                        <div className=" py-[20px] tab:px-[10px] px-[5px] border-b-1 border-[#676767] flex flex-col gap-[15px] ">
                            <p className='  font-body tab:text-[22px]/[28px] text-[20px]/[26px] font-[500] w-[100%]  ' >Shipping Charges</p>
                            {
                                town_city === undefined ||
                                    town_city === '' ||
                                    states === '' ||
                                    states === undefined ||
                                    pincode === 0 ||
                                    pincode === '' ||
                                    pincode === undefined
                                    ? (<p className='text-[18px]/[26px] ' >Add Shipping Details (City, Pincode, State) </p>)
                                    : (<div className="shippingDetailsInfo flex flex-col gap-[6px] ">
                                        <p className='text-[18px]/[26px] ' >Flat Rate: &#8377;{shippingCharges}</p>
                                        <p className='text-[18px]/[26px] ' >
                                            Shipping to {town_city}, {pincode}, {states}
                                        </p>
                                    </div>)
                            }
                        </div>

                        <div className=" py-[20px] tab:px-[10px] px-[5px] flex flex-col gap-[15px] ">
                            <p className=' font-body tab:text-[22px]/[28px] text-[20px]/[26px] font-[500] w-[100%]  ' >Total</p>

                            <div className="flex tab:items-center items-start tab:flex-row flex-col "  >
                                <p className='  text-[22px]/[28px] w-fit text-[var(--primary-color)] pr-[10px] ' >
                                    &#8377;{cartItemTotal}
                                </p>

                                {/* >>>>>>>>>>>>>>>>>>>>>>>> Includes GST Text */}
                                <p dangerouslySetInnerHTML={{ __html: gstText }} />
                            </div>
                        </div>

                        <div className=" pb-[20px] tab:px-[10px] px-[5px] border-b-1 border-[#676767] flex flex-col gap-[15px] ">
                            <p className='flex gap-[10px] ' >
                                <input type="radio" checked name="" id="razorpay_checked" readOnly />
                                <label className='text-[18px]/[26px]' htmlFor="razorpay_checked">Razorpay</label>
                            </p>
                        </div>

                        <div className=" py-[20px] tab:px-[10px] px-[5px] flex flex-col gap-[15px] ">
                            <p className=' text-[16px]/[24px] w-[100%] ' >Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <Link to="/privacy-policy" className='text-primary '  >privacy policy.</Link></p>
                        </div>

                        <div className=" py-[10px] tab:px-[10px] px-[5px] w-full flex flex-col gap-[15px] ">
                            <Button
                                type="submit"
                                text={orderProcessLoader ? <span className="orderProcessLoader m-[2px] "></span> : "Place Order"}
                                btnIcon={orderProcessLoader ? null : <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="m17 21l-2.75-3l1.16-1.16L17 18.43l3.59-3.59l1.16 1.41M12.8 21H5c-1.11 0-2-.89-2-2V5c0-1.11.89-2 2-2h14c1.11 0 2 .89 2 2v7.8c-.61-.35-1.28-.6-2-.72V5H5v14h7.08c.12.72.37 1.39.72 2m-.8-4H7v-2h5m2.68-2H7v-2h10v1.08c-.85.14-1.63.46-2.32.92M17 9H7V7h10" /></svg>}
                                btnWidth='w-full'
                                additionalClass="min-w-full"
                                disabled={isDisabled}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default YourOrderComp;
