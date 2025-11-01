
import { Tabs } from "radix-ui";
import BlogCard from "./BlogCards/BlogCard"
import BlogCardListing from './BlogCards/BlogCardListing';

import './blog_tabs.css'

const BlogLists = () => {
    return (
        <div className="container_layout m-auto">
            <Tabs.Root
                className="TabsRoot blogs_info_tabs max-w-[1400px] flex flex-col justify-center m-auto desktop:py-[100px] gt-tab:py-[80px] py-[60px] "
                defaultValue="all-blogs" >

                <Tabs.List
                    className="TabsList w-full  "
                    aria-label="Manage your account">

                    <Tabs.Trigger className="TabsTrigger w-[25%] py-[15px] font-primary text-[22px]/[28px] font-[500] text-black cursor-pointer  " value="all-blogs" >
                        All Blogs
                    </Tabs.Trigger>

                    <Tabs.Trigger className="TabsTrigger w-[25%] py-[15px] font-primary text-[22px]/[28px] font-[500] text-black cursor-pointer " value="mobile" >
                        Mobile
                    </Tabs.Trigger>
                    <Tabs.Trigger className="TabsTrigger w-[25%] py-[15px] font-primary text-[22px]/[28px] font-[500] text-black cursor-pointer " value="tablet" >
                        Tablet
                    </Tabs.Trigger>

                    <Tabs.Trigger className="TabsTrigger w-[25%] py-[15px] font-primary text-[22px]/[28px] font-[500] text-black cursor-pointer " value="laptops" >
                        Laptops
                    </Tabs.Trigger>

                </Tabs.List>

                <Tabs.Content className="TabsContent pt-[60px] " value="all-blogs">

                    <BlogCardListing value="" />

                </Tabs.Content>

                <Tabs.Content className="TabsContent  pt-[60px] " value="mobile">

                    <BlogCardListing value="Mobile" />

                </Tabs.Content>

                <Tabs.Content className="TabsContent  pt-[60px] " value="tablet">

                    <BlogCardListing value="Tablet" />

                </Tabs.Content>

                <Tabs.Content className="TabsContent pt-[60px] " value="laptops" >

                    <BlogCardListing value="Laptops" />

                </Tabs.Content>

            </Tabs.Root>
        </div>
    )
}

export default BlogLists