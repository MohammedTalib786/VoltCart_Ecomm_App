import BlogTabs from "../../components/BlogPage/BlogTabs";
import BlogSpotlight from "../../components/BlogPage/BlogSpotlight";
import useDocumentTitle from "../../hooks/useDocumentTitle";

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

export default Blogs