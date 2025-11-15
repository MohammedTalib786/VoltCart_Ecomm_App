import { Accordion } from 'radix-ui';
import { Link } from 'react-router-dom';
import { BsChevronDown } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import {  FaPhone } from 'react-icons/fa6';

import useDocumentTitle from '../../hooks/useDocumentTitle';

import './help_page.css'


const HelpPage = () => {

    useDocumentTitle('Help and Support | VoltCart');

    return (
        <>
            <div className="w-full gt-tab:pt-[100px] pt-[80px]   ">
                <div className="  container_layout mx-auto flex flex-col  "   >
                    <h1 className='font-primary gt-tab:text-[45px]/[55px] tab:text-[40px]/[45px] text-[32px]/[40px] font-[300] ' >Help and Support</h1>
                    <p className=" text-black font-primary tab:text-[22px]/[28px] text-[20px]/[26px] font-[400] text-left pt-[12px] " >Find quick answers, browse help topics, or contact our support team.</p>
                </div>
            </div>



            <div className=" w-full border-b-1 border-[#00000038]  ">
                <div className="container_layout m-auto flex gt-tab:gap-[50px] gt-tab:flex-row flex-col  " >
                    <div className=" w-full flex flex-col desktop:py-[50px] gt-tab:py-[50px] py-[60px] desktop:gap-[50px]  gap-[20px] " >

                        <div className="  w-full "  >
                            <h2
                                className="font-primary  tab:text-[35px]/[40px] text-[26px]/[34px] font-[300] " >DELIVERY AND STORE</h2>

                            <div className=" tab:py-[30px] py-[18px]  "  >
                                <Accordion.Root
                                    className="AccordionRoot help_pg_accord w-full flex flex-col gap-[20px] bg-white  "
                                    type="single"
                                    collapsible
                                >
                                    <Accordion.Item
                                        className="AccordionItem w-full rounded-[12px] bg-white  "
                                        value="item-1"  >
                                        <Accordion.Trigger
                                            className=' accord_trigger font-body text-left tab:text-[22px]/[28px] text-[18px]/[26px] font-[500] text-black w-full px-[20px] py-[20px] cursor-pointer flex items-center justify-between '
                                        ><p className="m-0 p-0 tab:w-full w-[90%]  " >Do you have a physical store or only sell online?</p> <BsChevronDown className=' w-[20px] ' /></Accordion.Trigger>

                                        <Accordion.Content
                                            className='AccordionContent px-[20px] pb-[15px] text-black font-body tab:text-[18px]/[28px] text-[16px]/[26px] font-[300] dang-cont '
                                        >
                                            <p
                                                className='Text text-black font-body tab:text-[18px]/[28px] text-[16px]/[26px] font-[300] '
                                            >
                                                We are currently an online-only D2C brand, and our products are exclusively available on our website.
                                            </p>
                                        </Accordion.Content>
                                    </Accordion.Item>

                                    <Accordion.Item
                                        className="AccordionItem w-full rounded-[12px] bg-white  "
                                        value="item-2"  >

                                        <Accordion.Trigger
                                            className=' accord_trigger font-body text-left tab:text-[22px]/[28px] text-[18px]/[26px] font-[500] text-black w-full px-[20px] py-[20px] cursor-pointer flex items-center justify-between '
                                        ><p className="m-0 p-0 tab:w-full w-[90%]  " >What is the delivery time & cost?</p> <BsChevronDown className=' w-[20px] ' /></Accordion.Trigger>

                                        <Accordion.Content
                                            className='AccordionContent px-[20px] pb-[15px] text-black font-body tab:text-[18px]/[28px] text-[16px]/[26px] font-[300] dang-cont '
                                        >
                                            <p
                                                className='Text text-black font-body tab:text-[18px]/[28px] text-[16px]/[26px] font-[300] '
                                            >
                                                Our delivery time ranges from a minimum of 7 working days to a maximum of 10 working days, depending on the serviceability of the delivery pin code for domestic orders. and for the international orders the time ranges from a minimum of 10 working days to a maximum of 20 working days considering customs clearance and delays.
                                            </p>
                                        </Accordion.Content>
                                    </Accordion.Item>

                                </Accordion.Root>

                            </div>
                        </div>

                        {/* >>>>>>>>>>>> Shipping */}
                        <div className="  w-full "  >
                            <h2
                                className="font-primary  tab:text-[35px]/[40px] text-[26px]/[34px] font-[300] " >SHIPPING</h2>
                            <div className=" tab:py-[30px] py-[18px]  "  >
                                <Accordion.Root
                                    className="AccordionRoot help_pg_accord w-full flex flex-col gap-[20px] bg-white  "
                                    type="single"
                                    collapsible
                                >
                                    <Accordion.Item
                                        className="AccordionItem w-full rounded-[12px] bg-white  "
                                        value="item-1"  >

                                        <Accordion.Trigger
                                            className=' accord_trigger font-body text-left tab:text-[22px]/[28px] text-[18px]/[26px] font-[500] text-black w-full px-[20px] py-[20px] cursor-pointer flex items-center justify-between '
                                        ><p className="m-0 p-0 tab:w-full w-[90%]  " >What are VoltCart's shipping options?</p> <BsChevronDown className=' w-[20px] ' /></Accordion.Trigger>

                                        <Accordion.Content
                                            className='AccordionContent px-[20px] pb-[15px] text-black font-body tab:text-[18px]/[28px] text-[16px]/[26px] font-[300] dang-cont '
                                        >
                                            <p
                                                className='Text text-black font-body tab:text-[18px]/[28px] text-[16px]/[26px] font-[300] '
                                            >
                                                We offer free shipping for all domestic and international orders. However, no exchange or return is available for international orders. For any product-related inquiries, please contact us via email info.voltcartt@gmail.com before placing your order.
                                                Please note: This shipping policy applies only to individual (B2C) orders placed through our website. For bulk or wholesale orders, including B2B inquiries, shipping terms and conditions may differ and will be shared separately upon request.
                                            </p>
                                        </Accordion.Content>
                                    </Accordion.Item>

                                    <Accordion.Item
                                        className="AccordionItem w-full rounded-[12px] bg-white  "
                                        value="item-2"  >

                                        <Accordion.Trigger
                                            className=' accord_trigger font-body text-left tab:text-[22px]/[28px] text-[18px]/[26px] font-[500] text-black w-full px-[20px] py-[20px] cursor-pointer flex items-center justify-between '
                                        ><p className="m-0 p-0 tab:w-full w-[90%]  " >Does my VoltCart order need to clear customs?</p> <BsChevronDown className=' w-[20px] ' /></Accordion.Trigger>

                                        <Accordion.Content
                                            className='AccordionContent px-[20px] pb-[15px] text-black font-body tab:text-[18px]/[28px] text-[16px]/[26px] font-[300] dang-cont '
                                        >
                                            <p
                                                className='Text text-black font-body tab:text-[18px]/[28px] text-[16px]/[26px] font-[300] '
                                            >
                                                Yes, and due to this possible customs clearance delays, Our delivery time ranges from a minimum of 10 working days to a maximum of 20 working days, depending on the serviceability of the delivery pin code.
                                            </p>
                                        </Accordion.Content>
                                    </Accordion.Item>
                                </Accordion.Root>
                            </div>

                            <p
                                className=" text-black font-body tab:text-[18px]/[28px] text-[16px]/[26px] font-[300] "
                            ><Link className=' text-primary hover:underline ' to="/shipping-policy" >Click here</Link> to read all about shipping information</p>
                        </div>
                    </div>

                    <div className=" w-full flex flex-col gt-tab:pt-[50px] gt-tab:pb-[50px] pt-[0px] pb-[50px] desktop:gap-[50px] gap-[40px]  " >
                        {/* >>>>>>>>>>>> Refund Return */}
                        <div className=" w-full "  >
                            <h2
                                className="font-primary  tab:text-[35px]/[40px] text-[26px]/[34px] font-[300] " >REFUND AND RETURN</h2>

                            <div className=" tab:py-[30px] py-[18px]  "  >
                                <Accordion.Root
                                    className="AccordionRoot help_pg_accord w-full flex flex-col gap-[20px] bg-white  "
                                    type="single"
                                    collapsible
                                >
                                    <Accordion.Item
                                        className="AccordionItem w-full rounded-[12px] bg-white  "
                                        value="item-1"  >

                                        <Accordion.Trigger
                                            className=' accord_trigger font-body text-left tab:text-[22px]/[28px] text-[18px]/[26px] font-[500] text-black w-full px-[20px] py-[20px] cursor-pointer flex items-center justify-between '
                                        ><p className="m-0 p-0 tab:w-full w-[90%]  " >Where is my refund?</p> <BsChevronDown className=' w-[20px] ' /></Accordion.Trigger>

                                        <Accordion.Content
                                            className='AccordionContent px-[20px] pb-[15px] text-black font-body tab:text-[18px]/[28px] text-[16px]/[26px] font-[300] dang-cont '
                                        >
                                            <p
                                                className='Text text-black font-body tab:text-[18px]/[28px] text-[16px]/[26px] font-[300] '
                                            >
                                                Orders cannot be cancelled once they have been shipped. However, customer can cancel their order within 8 hours of placement, before dispatch. In such cases, refunds will be issued using the original payment method. Please allow up to 15 business days for the refund to be processed.
                                            </p>
                                        </Accordion.Content>
                                    </Accordion.Item>

                                    <Accordion.Item
                                        className="AccordionItem w-full rounded-[12px] bg-white  "
                                        value="item-2"  >
                                        <Accordion.Trigger
                                            className=' accord_trigger font-body text-left tab:text-[22px]/[28px] text-[18px]/[26px] font-[500] text-black w-full px-[20px] py-[20px] cursor-pointer flex items-center justify-between '
                                        ><p className="m-0 p-0 tab:w-full w-[90%]  " >How do I return my VoltCart order?</p> <BsChevronDown className=' w-[20px] ' /></Accordion.Trigger>

                                        <Accordion.Content
                                            className='AccordionContent px-[20px] pb-[15px] text-black font-body tab:text-[18px]/[28px] text-[16px]/[26px] font-[300] dang-cont '
                                        >
                                            <p
                                                className='Text text-black font-body tab:text-[18px]/[28px] text-[16px]/[26px] font-[300] '
                                            >
                                                As a policy, we do not accept returns. However, the exchange is applicable only if the product is not delivered in perfect condition as per the order placed.
                                            </p>
                                        </Accordion.Content>
                                    </Accordion.Item>

                                    <Accordion.Item
                                        className="AccordionItem w-full rounded-[12px] bg-white  "
                                        value="item-3"  >

                                        <Accordion.Trigger
                                            className=' accord_trigger font-body text-left tab:text-[22px]/[28px] text-[18px]/[26px] font-[500] text-black w-full px-[20px] py-[20px] cursor-pointer flex items-center justify-between '
                                        ><p className="m-0 p-0 tab:w-full w-[90%]  " >What is VoltCart's return policy?</p> <BsChevronDown className=' w-[20px] ' /></Accordion.Trigger>

                                        <Accordion.Content
                                            className='AccordionContent px-[20px] pb-[15px] text-black font-body tab:text-[18px]/[28px] text-[16px]/[26px] font-[300] dang-cont '
                                        >
                                            <p
                                                className='Text text-black font-body tab:text-[18px]/[28px] text-[16px]/[26px] font-[300] '
                                            >
                                                <ul>
                                                    <li>Products purchased during promotions or sales are not eligible for return.</li>
                                                    <li>Exchange requests are accepted for manufacturing defects or if an incorrect item is delivered. For more details please refer to our Incorrect/Damaged/Defective Item Policy</li>
                                                    <li>Customized products and special bulk orders are not eligible for returns or exchanges.</li>
                                                    <li>International orders are not eligible for returns or exchanges.</li>
                                                    <li>Gift card purchased online/store credit are not eligible for refund, or return.</li>
                                                </ul>

                                            </p>
                                        </Accordion.Content>
                                    </Accordion.Item>
                                </Accordion.Root>
                            </div>

                            <p
                                className=" text-black font-body tab:text-[18px]/[28px] text-[16px]/[26px] font-[300] "
                            ><Link className=' text-primary hover:underline ' to="/cancellation-policy" >Click here</Link> to read all about refund and return information</p>
                        </div>

                        <div className="  w-full "  >
                            <h2
                                className="font-primary  tab:text-[35px]/[40px] text-[26px]/[34px] font-[300] " >PAYMENT</h2>
                            <div className=" tab:py-[30px] py-[18px]  "  >
                                <Accordion.Root
                                    className="AccordionRoot help_pg_accord w-full flex flex-col gap-[20px] bg-white  "
                                    type="single"
                                    collapsible
                                >
                                    <Accordion.Item
                                        className="AccordionItem w-full rounded-[12px] bg-white  "
                                        value="item-1"  >

                                        <Accordion.Trigger
                                            className=' accord_trigger font-body text-left tab:text-[22px]/[28px] text-[18px]/[26px] font-[500] text-black w-full px-[20px] py-[20px] cursor-pointer flex items-center justify-between '
                                        ><p className="m-0 p-0 tab:w-full w-[90%]  " >What are VoltCart's payment options?</p> <BsChevronDown className=' w-[20px] ' /></Accordion.Trigger>

                                        <Accordion.Content
                                            className='AccordionContent px-[20px] pb-[15px] text-black font-body tab:text-[18px]/[28px] text-[16px]/[26px] font-[300] dang-cont '
                                        >
                                            <p
                                                className='Text text-black font-body tab:text-[18px]/[28px] text-[16px]/[26px] font-[300] '
                                            >
                                                Payment is an integral part of an online shopping experience. All payments shall be collected through secured payment options. We accept all prepaid payment options such as all the major Credit Cards, Debit Cards, Net-Banking etc.
                                            </p>
                                        </Accordion.Content>
                                    </Accordion.Item>
                                </Accordion.Root>
                            </div>

                            <p
                                className=" text-black font-body tab:text-[18px]/[28px] text-[16px]/[26px] font-[300] "
                            ><Link className=' text-primary hover:underline ' to="/terms-of-use" >Click here</Link> to read all about payment and other terms of use</p>
                        </div>
                    </div>
                </div>
            </div>



            <div className="container_layout m-auto flex gap-[50px]  " >
                <div className="  w-full desktop:pt-[50px] desktop:pb-[100px] gt-tab:pt-[50px] gt-tab:pb-[100px] pt-[50px] pb-[80px]   flex gt-tab:gap-y-[30px] gt-tab:gap-x-0 tab:gap-y-[40px] gap-y-[25px] tab:gap-x-[20px] flex-wrap ">

                    <div className=" w-full ">
                        <h2
                            className="font-primary  tab:text-[35px]/[40px] text-[26px]/[34px] font-[300] " >Still Need Assistance!</h2>
                        <p className=" text-black font-primary tab:text-[22px]/[28px] text-[20px]/[26px] font-[400] text-left pt-[12px] pb-[25px] " >Contact our support team.</p>
                    </div>

                    <div className="w-full flex tab:flex-row flex-col gt-tab:gap-[50px] tab:gap-[30px] gap-[25px]   ">

                        <div className="icon_box flex flex-col text-center justify-center items-center gap-[10px] bg-white  min-h-[130px] gt-tab:w-[50%] tab:w-[48%] w-full px-[10px] py-[20px] rounded-[10px] cursor-default " >
                            <FaPhone className=" w-[30px] h-[30px]   " />
                            <h5 className='text-[22px]/[30px] font-poppins text-black ' >Connect over a call</h5>
                            <div className=" w-full flex flex-col  items-center ">
                                <a className=' w-fit font-body font-[400] text-[16px] hover:text-primary hover:underline ' href="tel:+91 9987034815">+91 9987034815</a>
                                <a className=' w-fit font-body font-[400] text-[16px] hover:text-primary hover:underline ' href="tel:+91 8454896170">+91 8454896170</a>
                            </div>
                        </div>

                        <div className="icon_box flex flex-col text-center justify-center items-center gap-[10px] bg-white  min-h-[130px] gt-tab:w-[50%] tab:w-[48%] w-full px-[10px] py-[20px] rounded-[10px] cursor-default " >
                            <MdEmail className=" w-[30px] h-[30px] " />
                            <h5 className='text-[22px]/[30px] font-poppins text-black  ' >Contact via email</h5>
                            <div className="">
                                <a className='font-body font-[400] text-[16px] hover:text-primary hover:underline ' href="mailto:info.voltcartt@gmail.com">info.voltcartt@gmail.com</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default HelpPage;
