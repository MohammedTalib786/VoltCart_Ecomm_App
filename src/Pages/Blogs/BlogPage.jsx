import useDocumentTitle from "../../hooks/useDocumentTitle";
import BlogTabs from "../../components/BlogPage/BlogTabs";
import BlogSpotlight from "../../components/BlogPage/BlogSpotlight";


const Blogs = () => {
    // >>>>>>>>>>>>>>>>> Change Document Title Dynamically
    useDocumentTitle('Explore Our Blog | Smart Accessory Insights & Trends');

    return (
        <>
            <BlogSpotlight />
            <BlogTabs />
        </>
    )
}

export default Blogs;
