import { Accordion } from "radix-ui"
import { BsChevronDown } from "react-icons/bs"
import { Link } from "react-router-dom";

import './faq_section.css'


const FaqSection = () => {
    let all_faqs = [
        {
            id: 1,
            title: "Do you have a physical store or only sell online?",
            content: (<>We are currently an online-only D2C brand, and our products are exclusively available on our website.</>),
            value: "item-1"
        },
        {
            id: 2,
            title: "What is the delivery time & cost?",
            content: (<>Our delivery time ranges from a minimum of 7 working days to a maximum of 10 working days, depending on the serviceability of the delivery pin code for domestic orders. and for the international orders the time ranges from a minimum of 10 working days to a maximum of 20 working days considering customs clearance and delays.</>),
            value: "item-2"
        },
        {
            id: 3,
            title: "How do I return my VoltCart order?",
            content: (<>As a policy, we do not accept returns. However, the exchange is applicable only if the product is not delivered in perfect condition as per the order placed. You can read more about it in our <Link to='/cancellation-policy'>cancellation, refund and exchange policy</Link> page.</>),
            value: "item-3"
        },

        {
            id: 4,
            title: "Does my VoltCart order need to clear customs?",
            content: (<>Yes, and due to this possible customs clearance delays, Our delivery time ranges from a minimum of 10 working days to a maximum of 20 working days, depending on the serviceability of the delivery pin code.</>),
            value: "item-4"
        },
        {
            id: 5,
            title: "What are VoltCart's payment options?",
            content: (<>Payment is an integral part of an online shopping experience. All payments shall be collected through secured payment options. We accept all prepaid payment options such as all the major Credit Cards, Debit Cards, Net-Banking etc. Read more about it in our <Link to='/terms-of-use'>Terms of Use</Link> Page.</>),
            value: "item-5"
        }
    ];

    return (
        <div className=" bg-white whyChooseSec w-full flex flex-col desktop:pt-[90px] gt-tab:pt-[70px] pt-[50px]  desktop:pb-[100px] gt-tab:pb-[80px] pb-[60px]   ">
            <h3
                className="font-primary gt-tab:text-[45px]/[55px] tab:text-[40px]/[45px] text-[32px]/[40px] font-[300] text-center ">Frequently Asked Questions</h3>

            <p className=" text-black font-primary tab:text-[22px]/[28px] text-[20px]/[26px] font-[400] text-center pt-[20px] pb-[25px]" >
                Answers to our most frequently asked questions are just one click away.
            </p>
            <div className=" mx-auto w-full gt-tab:max-w-[900px] max-w-full flex  w-full  justify-center tab:flex-row flex-col tab:gap-[35px] tab:gap-[25px] gap-[30px]  " >
                <Accordion.Root
                    className="AccordionRoot faq_accord_cont w-full flex flex-col tab:gap-[25px] gap-[20px]   "
                    type="single"
                    defaultValue="item-1"
                    collapsible
                >
                    {
                        all_faqs.map(elem => {
                            return (
                                <Accordion.Item
                                    key={elem.id}
                                    className="AccordionItem w-full rounded-[12px] bg-[#f4f4f4] "
                                    value={elem.value}  >

                                    <Accordion.Trigger
                                        className=' accord_trigger font-body text-left tab:text-[22px]/[28px] text-[18px]/[26px] font-[500] text-black w-full px-[20px] py-[20px] cursor-pointer flex items-center justify-between '
                                    ><p className="m-0 p-0 tab:w-full w-[90%]  " >{elem.title}</p> <BsChevronDown className=' w-[20px] ' /></Accordion.Trigger>

                                    <Accordion.Content
                                        className='AccordionContent px-[20px] pb-[15px] text-black font-body tab:text-[18px]/[28px] text-[16px]/[26px] font-[300] dang-cont '
                                    >
                                        <p className='Text text-black font-body tab:text-[18px]/[28px] text-[16px]/[26px] font-[300] faq-content '  >{elem.content}</p>
                                    </Accordion.Content>
                                </Accordion.Item>
                            )
                        })
                    }
                </Accordion.Root>
            </div>
        </div>
    )
}

export default FaqSection;
