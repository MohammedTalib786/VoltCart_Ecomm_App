import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IoCloseOutline } from "react-icons/io5";
import { PiCopyLight } from "react-icons/pi";
import { IoCheckmarkOutline } from "react-icons/io5";
import { BsCart2 } from 'react-icons/bs';

import useDocumentTitle from '../../hooks/useDocumentTitle';
import { useOrder } from '../../contexts/orderItemsProvider'
import { useCart } from '../../contexts/ProdProvider';
import Button from '../../components/FormComp/Button';

import './success-page.css'


const SuccessPage = () => {

    // >>>>>>>>>>>>>>>>> Change Document Title Dynamically
    useDocumentTitle('Thank You! Your Order Has Been Successfully Placed');

    let location = useLocation();
    let order_info = useRef();
    let { orderItems, loadingOrder } = useOrder();
    let [mainOrder] = orderItems.slice(-1);
    let navigate = useNavigate();
    let [coppiedState, setCoppiedState] = useState(false)
    let { clearCartFunc } = useCart();
    let getAddress = `${mainOrder?.town_city ? mainOrder?.town_city : null}, ${mainOrder?.pincode ? mainOrder?.pincode : null}, ${mainOrder?.state ? mainOrder?.state : null} `;
    let getSubtotal = mainOrder?.total - mainOrder?.shipping_rate;

    const queryParams = new URLSearchParams(location.search);
    const orderIdParam = queryParams.get('order_id');

    useEffect(() => {
        if (!loadingOrder &&
            orderItems.length === 0 ||
            !orderIdParam ||
            orderIdParam === null
        ) navigate('/cart')

        else clearCartFunc();
    }, [orderItems])

    const handlerCopyToClipboard = () => {
        setCoppiedState(true)
        navigator.clipboard.writeText(order_info.current.innerText)
        setTimeout(() => setCoppiedState(false), 2000)
    }


    return (
        <div
            className=' min-h-[90vh] flex items-center '
        >
            {/* >>>>>>>>>>>>>> In Cont */}
            <div
                className=" gt-tab:max-w-[900px] tab:max-w-[90%] max-w-full mx-auto tab:px-0 px-[20px]  py-[60px] " >

                <div className="text-center tab:mb-[40px] mb-[30px] ">
                    <h1 className="font-primary gt-tab:text-[45px]/[55px] tab:text-[40px]/[45px] text-[32px]/[40px] font-[300] mb-[15px] ">Thank You For Shopping With Us!</h1>
                    <p className="mt-4 text-black ">Your order will be processed within 24 hours during working days. We will notify you by email once your order has been shipped.</p>
                </div>

                <div className=" gt-tab:grid gt-tab:grid-cols-2 tab:flex tab:flex-col gap-8  " >

                    <div className=' gt-tab:p-6 tab:p-0 relative order_info_cont tab:mb-0 mb-[35px] ' >
                        {
                            !coppiedState
                                ? <PiCopyLight
                                    className='copy_order_details_btn absolute top-0 right-0 text-[28px]/[28px] cursor-pointer '
                                    onClick={handlerCopyToClipboard}
                                    title='Copy to Clipboard'
                                />

                                : <IoCheckmarkOutline
                                    className=' absolute top-0 right-0 text-[28px]/[28px] cursor-pointer '
                                />
                        }
                        {
                            coppiedState && <p className=' OrderTxtCoppiedMsg transition-all p-[10px] bg-primary text-white text-[16px]/[24px] font-[400] rounded-[12px] absolute gt-tab:top-[-35px] gt-tab:right-[92px] tab:-top-[10px] tab:right-[60px] -top-[33px] right-[30px] w-auto  ' >Order details coppied to clipboard</p>
                        }

                        <div className=" order_info flex flex-wrap gap-y-[15px] "
                            ref={order_info} >

                            <div className=' gt-tab:w-auto tab:w-[50%] w-auto ' >
                                <span className="font-[600] tab:text-[18px]/[24px] text-[16px]/[24px] ">Order ID: </span>
                                <span className=' font-[400] tab:text-[18px]/[24px] text-[16px]/[24px]  ' >{orderIdParam ? orderIdParam : 'null'}</span>
                            </div>

                            <div className=' gt-tab:w-full tab:w-[50%] w-full ' >
                                <span className=" font-[600] tab:text-[18px]/[24px] text-[16px]/[24px] ">Name: </span>
                                <span className=' font-[400] tab:text-[18px]/[24px] text-[16px]/[24px] ' >{mainOrder?.name ? mainOrder?.name : "No Data Found!"}</span>
                            </div>

                            <div className=' gt-tab:w-full tab:w-[50%] w-full ' >
                                <span className=" font-[600] tab:text-[18px]/[24px] text-[16px]/[24px] ">Email: </span>
                                <span className=' font-[400] tab:text-[18px]/[24px] text-[16px]/[24px] ' >{mainOrder?.email_id ? mainOrder?.email_id : "No Data Found!"}</span>
                            </div>

                            <div className=' gt-tab:w-full tab:w-[50%] w-full ' >
                                <span className=" font-[600] tab:text-[18px]/[24px] text-[16px]/[24px] ">Phone: </span>
                                <span className=' font-[400] tab:text-[18px]/[24px] text-[16px]/[24px] ' >{mainOrder?.phone ? mainOrder?.phone : "No Data Found!"}</span>
                            </div>

                            <div className=' gt-tab:w-full tab:w-[50%] w-full ' >
                                <span className=" font-[600] tab:text-[18px]/[24px] text-[16px]/[24px] ">Address: </span>
                                <span className=' font-[400] tab:text-[18px]/[24px] text-[16px]/[24px] ' >{getAddress ? getAddress : "No Date Found!"}</span>
                            </div>

                            <div className=' gt-tab:w-full tab:w-[50%] w-full ' >
                                <span className="font-[600] tab:text-[18px]/[24px] text-[16px]/[24px] ">Order Date: </span>
                                <span className=' font-[400] tab:text-[18px]/[24px] text-[16px]/[24px] ' >{mainOrder?.date ? mainOrder.date : "No Data Found!"}</span>
                            </div>

                            <div className=' gt-tab:w-full tab:w-[50%] w-full ' >
                                <span className=" font-[600] tab:text-[18px]/[24px] text-[16px]/[24px] ">Payment Method: </span>
                                <span className=' font-[400] tab:text-[18px]/[24px] text-[16px]/[24px] ' >Razorpay Online</span>
                            </div>

                        </div>

                        <div className="mt-[18px] space-x-4">
                            <Link to='/products' >
                                <Button
                                    text='Return to shopping'
                                    btnIcon={<BsCart2 className='text-[18px]/[18px] mb-[4px] ' />}
                                    additionalClass='w-full'
                                />
                            </Link>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg">
                        <h3 className=" font-body tab:text-[22px]/[28px] text-[20px]/[26px] font-[500] mb-6 " >Order Summary</h3>

                        <div className="space-y-4">
                            <div className="space-y-2" >
                                {
                                    mainOrder?.prod_arr?.map((elem, ind) => {
                                        return (
                                            <div key={ind} className="flex justify-between">
                                                <span className='w-[72%]' >{elem ? elem : "No Data Found!"}</span>
                                                <span className='flex items-center h-fit font-[500] ' ><IoCloseOutline />{mainOrder?.quantity[ind] ? mainOrder?.quantity[ind] : "No Data Found!"}</span>
                                                <span>&#8377;{mainOrder?.price[ind] ? mainOrder?.price[ind] : "No Data Found!"}</span>
                                            </div>
                                        )
                                    })
                                }

                            </div>

                            <hr className="border-black" />

                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span>&#8377;{getSubtotal ? getSubtotal : 0}</span>
                            </div>

                            <div className="flex justify-between ">
                                <span>Shipping Charges</span>
                                <span>+&#8377;{mainOrder?.shipping_rate ? mainOrder?.shipping_rate : 0}</span>
                            </div>

                            <hr className="border-black" />

                            <div className="flex justify-between font-[600] text-[18px]/[24px] ">
                                <span  >Total</span>
                                <span>&#8377;{mainOrder?.total ? mainOrder?.total : 0}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SuccessPage