import BlogSkeletonCard from "./SkeletonLoaderCard/BlogSkeletonCard";

import './blog_listing_loader.css';


const BlogListingLoader = () => {
    return (
        <div className=" blog_loader w-full flex justify-center items-center gap-[20px]  " >
            <BlogSkeletonCard />
            <BlogSkeletonCard />
        </div>
    )
}

export default BlogListingLoader;
