import { Link } from 'react-router-dom';
import { BsCart2 } from "react-icons/bs";
import { BsCartXFill } from "react-icons/bs";

import useDocumentTitle from '../../hooks/useDocumentTitle';
import Button from '../../components/FormComp/Button';


const CancelPage = () => {
    // >>>>>>>>>>>>>>>>> Change Document Title Dynamically
    useDocumentTitle('Order Canceled! We are Sorry to See You Go');

    return (
        <>
            <div className="flex items-center justify-center min-h-[90vh]  " >
                <div className=" bg-white w-full flex flex-col items-center  gt-tab:max-w-[850px]  tab:max-w-[650px] max-w-[85%] rounded-2xl px-[20px] py-[50px] text-center">

                    {/* Cancel Icon */}
                    <div className="flex justify-center mb-6">
                        <div className="w-[85px] h-[85px] flex items-center justify-center rounded-full bg-red-500/20 border border-red-500/30">
                            <BsCartXFill className="text-red-500 text-[45px]/[45px] " />
                        </div>
                    </div>

                    {/* Heading */}
                    <h2 className="font-primary gt-tab:text-[45px]/[55px] tab:text-[40px]/[45px] text-[32px]/[40px] font-[300] mb-[15px] ">Order Cancelled</h2>

                    <p className="text-black tab:text-[18px]/[26px] text-[16px]/[24px] mb-[25px]  " >
                        Your payment was not completed. Don’t worry, your cart is still saved.
                    </p>

                    {/* CTA buttons */}
                    <div className="  tab:w-[90%] w-full flex flex-col items-center gap-[20px]   " >
                        <div className=" w-full flex tab:gap-[20px] gap-[12px]  tab:flex-row flex-col " >
                            <Link
                                to="/cart"
                                className="block w-full "
                            >
                                <Button
                                    text="View Cart"
                                    btnIcon={<BsCart2 className='text-[18px]/[18px] mb-[4px] ' />}
                                    btnWidth="w-full "
                                    additionalClass="min-w-full"
                                />
                            </Link>
                            <Link to="/"
                                className="block w-full "
                            >
                                <Button
                                    text="Back to Home"
                                    btnIcon={<svg xmlns="http://www.w3.org/2000/svg" className=" w-[18px] fill-white " viewBox="0 0 640 640"><path d="M304 70.1C313.1 61.9 326.9 61.9 336 70.1L568 278.1C577.9 286.9 578.7 302.1 569.8 312C560.9 321.9 545.8 322.7 535.9 313.8L527.9 306.6L527.9 511.9C527.9 547.2 499.2 575.9 463.9 575.9L175.9 575.9C140.6 575.9 111.9 547.2 111.9 511.9L111.9 306.6L103.9 313.8C94 322.6 78.9 321.8 70 312C61.1 302.2 62 287 71.8 278.1L304 70.1zM320 120.2L160 263.7L160 512C160 520.8 167.2 528 176 528L224 528L224 424C224 384.2 256.2 352 296 352L344 352C383.8 352 416 384.2 416 424L416 528L464 528C472.8 528 480 520.8 480 512L480 263.7L320 120.3zM272 528L368 528L368 424C368 410.7 357.3 400 344 400L296 400C282.7 400 272 410.7 272 424L272 528z" /></svg>}
                                    btnWidth="w-full"
                                    additionalClass="min-w-full"
                                />
                            </Link>
                        </div>
                    </div>

                    {/* Support link */}
                    <p className="mt-6 text-[14px]/[14px] ">
                        Need help? <Link to="/contact-us" className="underline ">Contact Support</Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default CancelPage;
