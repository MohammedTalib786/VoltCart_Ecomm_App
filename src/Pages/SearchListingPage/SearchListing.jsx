import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
// import blogData from '../../../blogdata.json'
import useFetch from '../../hooks/useFetch';
import SkeletonLoader from '../../components/Loader/SearchBoxSkeleton';
import SearchBox from '../../components/SearchListing/SearchBox';
import useDocumentTitle from '../../hooks/useDocumentTitle';


const SearchListing = () => {

    // >>>>>>>>>>>>>>>>> Change Document Title Dynamically
    useDocumentTitle('Search - VoltCart');

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('query');
    let [loader, setLoader] = useState(true)
    let [results, setResults] = useState([]);

    let productsAPI = import.meta.env.VITE_PRODUCT_API_KEY;
    let blogsAPI = import.meta.env.VITE_BLOGS_API_KEY;

    let useProdList = useFetch(productsAPI);
    let useBlogList = useFetch(blogsAPI);
    let prodData = useProdList.data;
    let blogData = useBlogList.data;

    let blog_filtered = blogData.filter(elem => {
        // console.log('Blogs Elem', elem)
        let blogTitle = elem.blog_title.toLowerCase()
        let searchQuery = query.toLowerCase();
        return blogTitle.includes(searchQuery);
    })
    // console.log('blog_filtered', blog_filtered)

    let prod_filtered = prodData.filter(elem => {
        let prodTitle = elem.name.toLowerCase()
        let searchQuery = query.toLowerCase();
        return prodTitle.includes(searchQuery);
    })
    // console.log('prod_filtered', prod_filtered)

    useEffect(() => {
        setLoader(true)
        setResults([...prod_filtered, ...blog_filtered])
        setLoader(false)
    }, [query, prodData, blogData])

    // console.log('Results', results);

    return (
        <>

            {/* >>>>>>>>>>>>>> In Cont */}
            <div className="container_layout mx-auto flex justify-center items-start flex-col gap-[15px] w-full " >
                <h2 className='pt-[50px] pb-[5px] text-[22px]/[28px] ' >{results.length <= 0 ? "" : `Search Results for: "${query}"`}</h2>

                <div className="search_box_cont w-full flex flex-col gap-[20px] pb-[50px] " >

                    {/* {
                        loader ? <SkeletonLoader /> : results.map(elem => <SearchBox name={elem.name} />)
                    } */}

                    {
                        loader ?
                            <SkeletonLoader /> :
                            results.length <= 0 ?
                                <SearchBox name="No Results Found!" /> :
                                results.map((elem, ind) => <SearchBox key={ind}
                                    name={elem.name ? elem.name : elem.blog_title}
                                    slug={elem.slug ? elem.slug : elem.blog_slug}
                                    feat_img={elem.feat_img ? elem.feat_img : elem.blog_feat_img}
                                    category={ elem.name ? 'Product': 'Blog' }
                                    categoryURL={elem.name ? 'products': 'blogs'}
                                />)
                    }

                </div>

            </div>
        </>

    )
}

export default SearchListing