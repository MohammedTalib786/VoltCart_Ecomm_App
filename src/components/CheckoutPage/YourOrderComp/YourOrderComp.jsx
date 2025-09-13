import { Link } from 'react-router-dom'
import { useCart } from '../../../contexts/ProdProvider'
import Button from '../../FormComp/Button'
import { useShippingDetails } from '../../../contexts/ShippingDetProvider'
import { useEffect, useState } from 'react'

const YourOrderComp = ({
    orderProcessLoader,
    isDisabled
}) => {
    let { cartProducts } = useCart();
    // console.log('cartProducts', cartProducts)

    let cartItemSubTotal = 0;

    let { shippingDetails } = useShippingDetails();
    let [pincode, states, town_city] = [shippingDetails.pincode, shippingDetails.states, shippingDetails.town_city]

    let [shippingCharges, setShippingCharges] = useState(55);
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
        let gstCalc = ((cartItemTotal * 12) / (100 + 12));
        let text = '';
        if (states === 'Maharashtra' || states === '' || states === undefined) {
            const halfGst = (gstCalc / 2).toFixed(2);
            text = `(includes <span className='text-[22px]/[28px] w-[100%] text-[var(--primary-color)] ' >₹${halfGst}</span> CGST, <span className='text-[22px]/[28px] w-[100%] text-[var(--primary-color)] ' >₹${halfGst}</span> SGST)`;
        }
        else text = `(includes <span className='text-[22px]/[28px] w-[100%] text-[var(--primary-color)] ' >₹${gstCalc.toFixed(2)}</span> IGST)`;
        setGstText(text);
    }, [cartItemTotal, states])

    return (
        <>
            <div className=' w-[50%] h-full bg-white rounded-[12px] flex flex-col justify-between ' >

                <div className="order_sum flex flex-col w-[100%] p-[30px] " >
                    <h3 className='uppercase text-[32px]/[40px] ' >Your Order</h3>

                    <div className=" flex flex-col  "  >

                        <div className=" py-[20px] px-[10px] border-b-1 border-[#676767] flex flex-col gap-[15px] ">
                            <div className="prods flex flex-col gap-[8px] ">
                                {
                                    cartProducts.map(elem => <p className=' text-[18px]/[26px]  ' key={elem.id} > <span className='text-primary ' ></span>&nbsp;{elem.name}<span className='font-[500] ' >&nbsp; x{elem.quantity}</span> </p>)
                                }
                            </div>
                            <p className=' text-[18px]/[26px] w-[100%]  ' >
                                Subtotal: &nbsp;
                                <span className='  text-[22px]/[28px] w-[100%] text-[var(--primary-color)] ' >&#8377;{cartItemSubTotal}</span>
                            </p>
                        </div>

                        <div className=" py-[20px] px-[10px] border-b-1 border-[#676767] flex flex-col gap-[15px] ">
                            <p className='  text-[22px]/[28px] w-[100%]  ' >Shipping Charges</p>
                            <div className="shippingDetailsInfo flex flex-col gap-[6px] ">
                                <p className='text-[18px]/[26px] ' >Flat Rate: &#8377;{shippingCharges}</p>
                                <p className='text-[18px]/[26px] ' >
                                    Shipping to {town_city}, {pincode}, {states}
                                </p>
                            </div>

                        </div>

                        <div className=" py-[20px] px-[10px] flex flex-col gap-[15px] ">
                            <p className=' text-[22px]/[28px] w-[100%]  ' >Total</p>
                            <div className="flex items-center "  >
                                <p className='  text-[22px]/[28px] w-fit text-[var(--primary-color)] pr-[10px] ' >
                                    &#8377;{cartItemTotal}
                                </p>

                                {/* >>>>>>>>>>>>>>>>>>>>>>>> Includes GST Text */}
                                <p dangerouslySetInnerHTML={{ __html: gstText }} />
                            </div>
                        </div>

                        <div className=" pb-[20px] px-[10px] border-b-1 border-[#676767] flex flex-col gap-[15px] ">
                            <p className='flex gap-[10px] ' >
                                <input type="radio" checked name="" id="razorpay_checked" readOnly />
                                <label htmlFor="razorpay_checked">Razorpay</label>
                            </p>
                        </div>

                        <div className=" py-[20px] px-[10px] flex flex-col gap-[15px] ">
                            <p className=' text-[16px]/[24px] w-[100%] ' >Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <Link to="/privacy-policy" className='text-primary '  >privacy policy.</Link></p>
                        </div>

                        <div className=" py-[20px] px-[10px] w-full flex flex-col gap-[15px] ">
                            <Button
                                text={orderProcessLoader ? <span className="orderProcessLoader m-2"></span> : "Place Order"}
                                // text={<span className="orderProcessLoader m-2"></span>}
                                btnWidth='w-full'
                                type="submit"
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
