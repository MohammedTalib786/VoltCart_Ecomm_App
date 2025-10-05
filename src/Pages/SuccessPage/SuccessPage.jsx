import { useOrder } from '../../contexts/orderItemsProvider'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from '../../components/FormComp/Button';
import { IoCloseOutline } from "react-icons/io5";
import { useEffect, useRef, useState } from 'react';
import { PiCopyLight } from "react-icons/pi";
import { IoCheckmarkOutline } from "react-icons/io5";
import useDocumentTitle from '../../hooks/useDocumentTitle';
import './success-page.css'
import { useCart } from '../../contexts/ProdProvider';

const SuccessPage = () => {

    // >>>>>>>>>>>>>>>>> Change Document Title Dynamically
    useDocumentTitle('Order Successful');

    let order_info = useRef();
    let { orderItems, loadingOrder } = useOrder();
    let [mainOrder] = orderItems.slice(-1);
    const location = useLocation();
    let navigate = useNavigate();
    let [coppiedState, setCoppiedState] = useState(false)

    let { clearCartFunc } = useCart();

    let getAddress = `${mainOrder?.town_city ? mainOrder?.town_city : null}, ${mainOrder?.pincode ? mainOrder?.pincode : null}, ${mainOrder?.state ? mainOrder?.state : null} `;
    let getSubtotal = mainOrder?.total - mainOrder?.shipping_rate;

    const queryParams = new URLSearchParams(location.search);
    const orderIdParam = queryParams.get('order_id');

    // console.log('orderItems', orderItems, typeof orderItems)
    // console.log('mainOrder', mainOrder, typeof mainOrder)
    // console.log('getSubtotal', getSubtotal)
    // console.log('query', orderIdParam)

    useEffect(() => {
        if (!loadingOrder &&
            orderItems.length === 0 ||
            !orderIdParam ||
            orderIdParam === null
        ) {
            navigate('/cart')
            // console.log('Will be Naviagte!')
        }
        else {
            //  console.log('Will Not Naviagte!')

            clearCartFunc();

        }
    }, [orderItems])

    const handlerCopyToClipboard = () => {
        // console.log('copy text')
        setCoppiedState(true)
        // console.log(order_info.current.innerText)
        navigator.clipboard.writeText(order_info.current.innerText)
        setTimeout(() => setCoppiedState(false), 2000)
    }

    return (
        <div 
        className=' min-h-[90vh] flex items-center ' 
        >
            {/* >>>>>>>>>>>>>> In Cont */}
            <div className=" max-w-4xl mx-auto py-12 px-6">

                <div className="text-center mb-10">
                    <h1
                        className="font-primary tab:text-[48px]/[58px] text-[32px]/[40px] font-[400]"
                    >Thank You For Shopping With Us!</h1>
                    <p className="mt-4 text-para-black ">Your order will be processed within 24 hours during working days. We will notify you by email once your order has been shipped.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className=' p-6 relative order_info_cont ' >
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
                            coppiedState && <p className=' transition-all absolute top-[-35px] right-[92px] p-[10px] bg-primary text-white text-[16px]/[16px] font-[400]  rounded-[12px]  ' >Order Detail Coppied to Clipboard</p>
                        }

                        <div className="space-y-4 order_info "
                            ref={order_info} >
                            <div>
                                <span className="font-[600] text-[18px]/[24px] ">Order ID: </span>
                                <span className=' font-[400] text-[18px]/[24px]' >{orderIdParam ? orderIdParam : 'null'}</span>
                            </div>

                            <div>
                                <span className=" font-[600] text-[18px]/[24px] ">Name: </span>
                                <span className=' font-[400] text-[18px]/[24px]' >{mainOrder?.name ? mainOrder?.name : "No Data Found!"}</span>
                            </div>

                            <div>
                                <span className=" font-[600] text-[18px]/[24px] ">Email: </span>
                                <span className=' font-[400] text-[18px]/[24px]' >{mainOrder?.email_id ? mainOrder?.email_id : "No Data Found!"}</span>
                            </div>

                            <div>
                                <span className=" font-[600] text-[18px]/[24px] ">Phone: </span>
                                <span className=' font-[400] text-[18px]/[24px]' >{mainOrder?.phone ? mainOrder?.phone : "No Data Found!"}</span>
                            </div>

                            <div>
                                <span className=" font-[600] text-[18px]/[24px] ">Address: </span>
                                <span className=' font-[400] text-[18px]/[24px]' >{getAddress ? getAddress : "No Date Found!"}</span>
                            </div>

                            <div>
                                <span className="font-[600] text-[18px]/[24px]">Order Date: </span>
                                <span className=' font-[400] text-[18px]/[24px]' >{mainOrder?.date ? mainOrder.date : "No Data Found!"}</span>
                            </div>

                            <div>
                                <span className=" font-[600] text-[18px]/[24px] ">Payment Method: </span>
                                <span className=' font-[400] text-[18px]/[24px]' >Razorpay Online</span>
                            </div>
                        </div>

                        <div className="mt-[18px] space-x-4">
                            <Link to='/products' >
                                <Button
                                    text='Return to shopping'
                                    additionalClass='w-full'
                                />
                            </Link>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg">
                        <h2 className="text-[22px]/[28px] font-[500] mb-6">Order Summary</h2>

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
