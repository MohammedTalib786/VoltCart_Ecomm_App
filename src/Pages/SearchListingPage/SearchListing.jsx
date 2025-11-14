import { useLocation } from 'react-router-dom'

import useDocumentTitle from '../../hooks/useDocumentTitle';
import useFetch from '../../hooks/useFetch';
import SkeletonLoader from '../../components/Loader/SearchBoxSkeleton';
import SearchBox from '../../components/SearchListing/SearchBox';
import NoResultSearchBox from '../../components/SearchListing/NoResultSearchBox';


const SearchListing = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('query');

    // >>>>>>>>>>>>>>>>> Change Document Title Dynamically
    useDocumentTitle(`Search Results for ${query ? query : "Data"} | VoltCart`);

    let productsAPI = import.meta.env.VITE_PRODUCT_API_KEY;
    let blogsAPI = import.meta.env.VITE_BLOGS_API_KEY;

    const { data: prodData, loader: prodLoading } = useFetch(productsAPI);
    const { data: blogData, loader: blogLoading } = useFetch(blogsAPI);

    const isLoader = prodLoading || blogLoading;

    const blog_filtered = (blogData || []).filter(elem => elem.blog_title.toLowerCase().includes(query.toLowerCase()))
    const prod_filtered = (prodData || []).filter(elem => elem.name.toLowerCase().includes(query.toLowerCase()))

    const results = [...prod_filtered, ...blog_filtered];

    return (
        <>
            {/* >>>>>>>>>>>>>> In Cont */}

            <div className=" pt-[60px] pb-[80px] ">
                <div className="container_layout gt-tab:min-h-[80vh]  mx-auto flex justify-start items-start flex-col gap-[15px] w-full " >

                    <h2 className=' pb-[5px] text-[22px]/[28px] ' >{results.length <= 0 ? "" : `Search Results for: "${query}"`}</h2>

                    <div className="search_box_cont w-full flex justify-start gap-[22px] flex-wrap desktop:gap-y-[30px] gt-tab:gap-y-[40px] tab:gap-y-[25px] gap-y-[30px]   " >
                        {
                            isLoader ?
                                <SkeletonLoader /> :
                                results.length <= 0 ?
                                    <NoResultSearchBox /> :
                                    results.map((elem, ind) => <SearchBox
                                        key={ind} isDisabled={false}
                                        name={elem.name ? elem.name : elem.blog_title}
                                        slug={elem.slug ? elem.slug : elem.blog_slug}
                                        feat_img={elem.feat_img ? elem.feat_img : elem.blog_feat_img}
                                        post_category={elem.name ? 'Product' : 'Blog'}
                                        post_categoryURL={elem.name ? 'products' : 'blogs'}
                                        category={elem.category ? elem.category : elem.blog_category}
                                    />)
                        }
                    </div>

                </div>
            </div>
        </>
    )
}

export default SearchListing
