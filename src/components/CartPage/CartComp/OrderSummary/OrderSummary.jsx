import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { useCart } from '../../../../contexts/ProdProvider';
import { useShippingDetails } from '../../../../contexts/ShippingDetProvider';
import ShippingForm from '../../ShippingComp/ShippingForm';
import CartAccordian from '../OrderSummary/CartAccordian/CartAccordian'
import Button from '../../../FormComp/Button';

import './orderSummary.css'


const OrderSummary = () => {

    let { cartProducts } = useCart();
    let cartItemSubTotal = 0;
    let [isVisible, setIsVisible] = useState(false);
    let { shippingDetails } = useShippingDetails();
    let [pincode, states, town_city] = [shippingDetails.pincode, shippingDetails.states, shippingDetails.town_city]
    let [shippingMsgText, setShippingMsgText] = useState('Calculate Shipping');
    let [shippingCharges, setShippingCharges] = useState(55);
    let [cartItemTotal, setCartItemTotal] = useState(cartItemSubTotal);
    let [gstText, setGstText] = useState('')

    cartProducts.map(elem => cartItemSubTotal += (elem.price * elem.quantity))

    // >>>>>>>>>>>>>>>>>>>>>>>>> Update Text of Shipping DropDown
    useEffect(() => {
        if (town_city === undefined || town_city === '' || states === '' || states === undefined || pincode === 0 || pincode === '' || pincode === undefined) setShippingMsgText('Calculate Shipping');
        else setShippingMsgText('Update Shipping Details');
    }, [shippingDetails])

    // >>>>>>>>>>>>>>>>>>>>>>>>> Set Shipping Charges
    useEffect(() => {
        if (cartItemSubTotal < 1100) setShippingCharges(55);
        else if (cartItemSubTotal >= 1100 && cartItemSubTotal <= 4000) setShippingCharges(349);
        else if (cartItemSubTotal >= 4001 && cartItemSubTotal <= 7000) setShippingCharges(599);
        else if (cartItemSubTotal >= 7001) setShippingCharges(999);
    }, [cartItemSubTotal, shippingDetails]);

    useEffect(() => {
        if (town_city === undefined
            || town_city === ''
            || states === ''
            || states === undefined
            || pincode === 0
            || pincode === ''
            || pincode === undefined) {
            setCartItemTotal(cartItemSubTotal)
        }

        else {
            setCartItemTotal(cartItemSubTotal + shippingCharges)
        }
    }, [shippingDetails, cartItemSubTotal, shippingCharges])

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>> GST Logic
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

    let navigate = useNavigate();
    const handlerToCheckoutPage = (e) => {
        e.preventDefault();
        navigate("/checkout");
    }


    return (
        <div className="order_sum gt-tab:w-[40%] tab:w-full h-full flex flex-col gap-[16px] tab:pt-[40px] tab:px-[30px] tab:pb-[45px] pt-[25px] px-[20px] pb-[30px] rounded-[12px] bg-white  ">
            <h3 className='font-primary tab:text-[36px]/[44px] text-[30px]/[38px] font-[400] ' >Order Summary</h3>
            <div className="calculations flex flex-col gap-[20px] "  >

                <div className="subtotal flex flex-col gap-[8px] "  >
                    <h3 className=' font-body tab:text-[22px]/[28px] text-[20px]/[26px] font-[500] w-[100%]  ' >Subtotal</h3>
                    <p className='  tab:text-[22px]/[28px] text-[20px]/[26px] w-[100%] text-[var(--primary-color)] ' >&#8377;{cartItemSubTotal}</p>
                </div>

                {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Shipping Comp */}
                <div className="shipping flex flex-col gap-[8px] "   >
                    <h3 className=' font-body tab:text-[22px]/[28px] text-[20px]/[26px] font-[500] w-[100%] ' > Shipping </h3>

                    {/* >>>>>>>>>>>>>>>> Shipping Info Message Comp */}
                    {
                        town_city && states && states &&
                        <div className="shippingDetailsInfo py-[8px] flex flex-col gap-[6px] ">
                            <p>Flat Rate: <span className='text-primary' >&#8377;{shippingCharges}</span></p>
                            <p>
                                Shipping to {town_city}, {pincode}, {states}
                                {/* DEMO: Shipping to Mum, 70, Maha, */}
                            </p>

                        </div>
                    }
                    <CartAccordian
                        isVisible={isVisible}
                        setIsVisible={setIsVisible}
                        tab_title={shippingMsgText}
                        tab_desc={<ShippingForm setIsVisible={setIsVisible} />}
                    />

                </div>
                {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ENDS Shipping Comp */}

                {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Total Amt Comp */}
                <div className="subtotal flex flex-col gap-[8px] "  >
                    <h3 className=' font-body tab:text-[22px]/[28px] text-[20px]/[26px] font-[500] w-[100%] ' >Total</h3>

                    {/* <div className="flex items-center "  > */}
                    <div className="flex tab:items-center items-start tab:flex-row flex-col "  >
                        <p className='  tab:text-[22px]/[28px] text-[20px]/[26px] w-fit text-[var(--primary-color)] pr-[10px] ' >
                            &#8377;{cartItemTotal}
                        </p>
                        {/* >>>>>>>>>>>>>>>>>>>>>>>> Includes GST Text */}
                        <p dangerouslySetInnerHTML={{ __html: gstText }} />
                    </div>

                </div>
                {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ENDS Total Amt Comp */}

                {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Place Order Button */}

                <Button
                    handlerClickBtnComp={handlerToCheckoutPage}
                    text='Proceed to Checkout'
                    btnIcon={<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path fill="currentColor" d="m12 9.289l-.688-.689l2.094-2.1H8.5v-1h4.906l-2.1-2.1l.694-.688L15.288 6zM7.308 21.116q-.633 0-1.067-.434t-.433-1.066t.433-1.067q.434-.433 1.067-.433t1.066.433t.434 1.067t-.434 1.066t-1.066.434m9.384 0q-.632 0-1.066-.434t-.434-1.066t.434-1.067q.434-.433 1.066-.433t1.067.433q.433.434.433 1.067q0 .632-.433 1.066q-.434.434-1.067.434M2 3.5v-1h2.448l4.096 8.616h6.635q.173 0 .308-.087q.134-.087.23-.24L19.213 4.5h1.14l-3.784 6.835q-.217.365-.564.573t-.763.208H8.1l-1.215 2.23q-.154.231-.01.5t.433.27h10.884v1H7.308q-.875 0-1.309-.735t-.018-1.485l1.504-2.68L3.808 3.5z"/></svg>}
                    additionalClass="min-w-full w-full "
                />

                {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ENDS Place Order Button */}

            </div>
        </div>
    )
}

export default OrderSummary;
