import React, { useEffect, useState } from 'react'
import { useCart } from '../../../../contexts/ProdProvider';
import ShippingForm from '../../ShippingComp/ShippingForm';
import './orderSummary.css'

import CartAccordian from '../OrderSummary/CartAccordian/CartAccordian'
import { useShippingDetails } from '../../../../contexts/ShippingDetProvider';
import Button from '../../../FormComp/Button';
import { useNavigate } from 'react-router-dom';

const OrderSummary = () => {

    let { cartProducts } = useCart();
    let cartItemSubTotal = 0;
    let [isVisible, setIsVisible] = useState(false);
    let { shippingDetails } = useShippingDetails();
    let [pincode, states, town_city] = [shippingDetails.pincode, shippingDetails.states, shippingDetails.town_city]
    let [shippingMsgText, setShippingMsgText] = useState('Calculate Shipping');

    // const [calculateShippingBtn, setCalculateShippingBtn] = useState(false);

    let [shippingCharges, setShippingCharges] = useState(55);
    let [cartItemTotal, setCartItemTotal] = useState(cartItemSubTotal);

    let [gstText, setGstText] = useState('')

    // console.log('shippingDetails in ordr Summ', shippingDetails)
    // console.log('shippingDetails State in ordr Summ', shippingDetails.states)

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
        // if (town_city !== '' || pincode !== 0 || pincode !== '' ) {
        if (town_city === undefined || town_city === '' || states === '' || states === undefined || pincode === 0 || pincode === '' || pincode === undefined) {
            setCartItemTotal(cartItemSubTotal)
        }
        else {
            setCartItemTotal(cartItemSubTotal + shippingCharges)
        }
        // cartItemTotal
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


    // console.log('cartProducts in Order Summary', cartProducts)

    return (
        <div className="order_sum flex flex-col gap-[16px] w-[40%] p-[20px] rounded-[12px] border-[1px] border-[#737373]  ">
            <h3 className='font-poppins uppercase text-[32px]/[40px]  ' >Order Summary</h3>
            <div className="calculations flex flex-col gap-[20px] "  >

                <div className="subtotal flex flex-col gap-[8px] "  >
                    <h3 className='  text-[22px]/[28px] w-[100%]  ' > Subtotal </h3>
                    <p className='  text-[22px]/[28px] w-[100%] text-[var(--primary-color)] ' >&#8377;{cartItemSubTotal}</p>
                </div>

                {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Shipping Comp */}
                <div className="shipping flex flex-col gap-[8px] "   >
                    <h3 className='  text-[22px]/[28px] w-[100%]  ' > Shipping </h3>

                    {/* >>>>>>>>>>>>>>>> Shipping Info Message Comp */}
                    {
                        town_city &&
                        <div className="shippingDetailsInfo py-[8px] flex flex-col gap-[6px] ">
                            <p>Flat Rate: &#8377;{shippingCharges}</p>
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
                    <h3 className=' text-[22px]/[28px] w-[100%] ' > Total </h3>
                    <div className="flex items-center "  >
                        <p className='  text-[22px]/[28px] w-fit text-[var(--primary-color)] pr-[10px] ' >
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
                    additionalClass="min-w-full"
                />

                {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ENDS Place Order Button */}

            </div>
        </div>
    )
}

export default OrderSummary;
