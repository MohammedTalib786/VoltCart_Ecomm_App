import { useState } from "react"
import { Link, useNavigate } from 'react-router-dom';
import { IoCloseOutline } from "react-icons/io5";
import Button from '../../components/FormComp/Button';

const CancelPage = () => {
    const navigate = useNavigate();

    return (
        <>
            {/* >>>>>>>>>>>>>> In Cont */}
            {/* <div className="container_layout mx-auto flex justify-center items-center flex-col  "  >
                <h2>The Order has been Cancelled!</h2>
            </div> */}




            <div className="flex items-center justify-center min-h-[90vh]  " >
                <div className=" bg-white w-full flex flex-col items-center max-w-[960px] rounded-2xl px-[20px] py-[50px] text-center">

                    {/* Cancel Icon */}
                    <div className="flex justify-center mb-6">
                        <div className="w-20 h-20 flex items-center justify-center rounded-full bg-red-500/20 border border-red-500/30">
                            <IoCloseOutline className="text-red-500 text-5xl" />
                        </div>
                    </div>

                    {/* Heading */}
                    {/* <h1 className="text-2xl font-bold text-black mb-2">Order Cancelled</h1> */}
                    <h2 className="font-primary tab:text-[48px]/[58px] text-[32px]/[40px] font-[400] mb-[15px] " >Order Cancelled</h2>

                    <p className="text-black text-[18px]/[24px] mb-[25px]  " >
                        Your payment was not completed. Don’t worry, your cart is still saved.
                    </p>

                    {/* Order/cart info placeholder (optional) */}
                    {/* <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6 text-gray-200">
                        <p className="text-sm">Order ID: <span className="text-gray-100">N/A</span></p>
                        <p className="text-sm">Items: <span className="text-gray-100">3</span></p>
                        <p className="text-sm">Total: <span className="text-gray-100">₹15,999</span></p>
                    </div> */}

                    {/* CTA buttons */}
                    <div className="  w-[90%] flex flex-col items-center gap-[20px]  " >


                        <div className=" w-full flex gap-[20px] ">
                            <Link
                                to="/cart"
                                className="block w-full "
                            >
                                <Button
                                    text="View Cart"
                                    btnWidth="w-full "
                                    additionalClass="min-w-full"
                                />
                            </Link>
                            <Link to="/"
                                className="block w-full "
                            >
                                <Button
                                    text="Back to Home"
                                    btnWidth="w-full"
                                    additionalClass="min-w-full"
                                />
                            </Link>
                        </div>
                    </div>

                    {/* Support link */}
                    <p className="mt-6 text-[14px]/[14px] ">
                        Need help? <Link to="/contact" className="underline ">Contact Support</Link>
                    </p>
                </div>
            </div>


        </>
    )
}

export default CancelPage