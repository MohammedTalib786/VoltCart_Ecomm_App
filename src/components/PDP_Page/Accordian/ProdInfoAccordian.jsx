import { Accordion } from 'radix-ui'
import { BsChevronDown } from "react-icons/bs";

import './prod-info-accord.css'


const ProdInfoAccordian = ({ prod_description, prod_specifications, prod_compatibility }) => {
    return (
        <>
            <div className="pt-[50px] w-full block tab:hidden  ">
                <Accordion.Root
                    className="AccordionRoot w-full flex flex-col gap-[16px] "
                    type="single"
                    defaultValue="item-1"
                    collapsible >
                    <Accordion.Item className="AccordionItem w-full rounded-[12px] bg-white " value="item-1" >
                        <Accordion.Trigger
                            className=' accord_trigger font-primary text-left text-[22px]/[28px] font-[500] text-black w-full px-[20px] py-[15px] cursor-pointer flex items-center justify-between '
                        >About the Product <BsChevronDown className=' w-[20px] ' /></Accordion.Trigger>

                        <Accordion.Content
                            className='AccordionContent px-[20px] pb-[15px] text-black font-body tab:text-[18px]/[28px] text-[16px]/[26px] font-[300] dang-cont '
                        >
                            <p
                                className='Text text-black font-body tab:text-[18px]/[28px] text-[16px]/[26px] font-[300] dang-cont'
                                dangerouslySetInnerHTML={{ __html: prod_description }} />
                        </Accordion.Content>
                    </Accordion.Item>

                    <Accordion.Item className="AccordionItem w-full rounded-[12px] bg-white " value="item-2">
                        <Accordion.Trigger
                            className=' accord_trigger font-primary text-left text-[22px]/[28px] font-[500] text-black w-full px-[20px] py-[15px] cursor-pointer flex items-center justify-between '
                        >Specifications <BsChevronDown className=' w-[20px] ' /></Accordion.Trigger>
                        <Accordion.Content
                            className='AccordionContent px-[20px] pb-[15px] text-black font-body tab:text-[18px]/[28px] text-[16px]/[26px] font-[300] dang-cont '
                        >
                            <p
                                className='Text text-black font-body tab:text-[18px]/[28px] text-[16px]/[26px] font-[300] dang-cont'
                                dangerouslySetInnerHTML={{ __html: prod_specifications }} />
                        </Accordion.Content>
                    </Accordion.Item>

                    <Accordion.Item className="AccordionItem w-full rounded-[12px] bg-white  " value="item-3">
                        <Accordion.Trigger
                            className=' accord_trigger font-primary text-left text-[22px]/[28px] font-[500] text-black w-full px-[20px] py-[15px] cursor-pointer flex items-center justify-between '
                        >Compatibility <BsChevronDown className=' w-[20px] ' /></Accordion.Trigger>
                        <Accordion.Content
                            className='AccordionContent px-[20px] pb-[15px] text-black font-body tab:text-[18px]/[28px] text-[16px]/[26px] font-[300] dang-cont '
                        >
                            <p
                                className='Text text-black font-body tab:text-[18px]/[28px] text-[16px]/[26px] font-[300] dang-cont'
                                dangerouslySetInnerHTML={{ __html: prod_compatibility }} />
                        </Accordion.Content>
                    </Accordion.Item>
                </Accordion.Root>
            </div>
        </>
    )
}

export default ProdInfoAccordian;
