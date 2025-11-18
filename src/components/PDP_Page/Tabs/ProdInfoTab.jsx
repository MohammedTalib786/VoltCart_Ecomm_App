import { Tabs } from "radix-ui";

import './prod_tab_style.css';


const ProdInfoTab = ({ prod_description, prod_specifications, prod_compatibility }) => {
    return (
        <>
            <div className="pt-[50px] w-full hidden tab:block  ">
                <Tabs.Root
                    className="TabsRoot prods_info_tabs  "
                    defaultValue="product-desc" >
                    <Tabs.List
                        className="TabsList w-full  "
                        aria-label="Manage your account">

                        <Tabs.Trigger className="TabsTrigger w-[33%] py-[15px] font-primary text-[22px]/[28px] font-[500] text-black cursor-pointer  " value="product-desc" >
                            About the Product
                        </Tabs.Trigger>

                        <Tabs.Trigger className="TabsTrigger w-[33%] py-[15px] font-primary text-[22px]/[28px] font-[500] text-black cursor-pointer " value="specifications" >
                            Specifications
                        </Tabs.Trigger>

                        <Tabs.Trigger className="TabsTrigger w-[33%] py-[15px] font-primary text-[22px]/[28px] font-[500] text-black cursor-pointer " value="compatibility" >
                            Compatibility
                        </Tabs.Trigger>
                    </Tabs.List>

                    <Tabs.Content className="TabsContent px-[15px] pt-[30px] " value="product-desc">
                        <p
                            className='Text text-black font-body tab:text-[18px]/[28px] text-[16px]/[26px] font-[300] dang-cont'
                            dangerouslySetInnerHTML={{ __html: prod_description }} />
                    </Tabs.Content>
                    <Tabs.Content className="TabsContent px-[15px] pt-[30px] " value="specifications">
                        <p
                            className='Text text-black font-body tab:text-[18px]/[28px] text-[16px]/[26px] font-[300] dang-cont'
                            dangerouslySetInnerHTML={{ __html: prod_specifications }} />
                    </Tabs.Content>
                    <Tabs.Content className="TabsContent px-[15px] pt-[30px] " value="compatibility" >
                        <p
                            className='Text text-black font-body tab:text-[18px]/[28px] text-[16px]/[26px] font-[300] dang-cont'
                            dangerouslySetInnerHTML={{ __html: prod_compatibility }} />
                    </Tabs.Content>
                </Tabs.Root>
            </div>
        </>
    )
}

export default ProdInfoTab;
