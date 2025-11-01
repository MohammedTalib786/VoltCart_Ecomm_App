// import { useLocation } from 'react-router-dom'
// import useFetch from '../../hooks/useFetch';
// import SkeletonLoader from '../../components/Loader/SearchBoxSkeleton';
// import SearchBox from '../../components/SearchListing/SearchBox';
// import useDocumentTitle from '../../hooks/useDocumentTitle';


// const SearchListingBackup = () => {
//     // >>>>>>>>>>>>>>>>> Change Document Title Dynamically
//     useDocumentTitle('Search - VoltCart');

//     const location = useLocation();
//     const queryParams = new URLSearchParams(location.search);
//     const query = queryParams.get('query');

//     let productsAPI = import.meta.env.VITE_PRODUCT_API_KEY;
//     let blogsAPI = import.meta.env.VITE_BLOGS_API_KEY;

//     const { data: prodData, loader: prodLoading } = useFetch(productsAPI);
//     const { data: blogData, loader: blogLoading } = useFetch(blogsAPI);

//     const isLoader = prodLoading || blogLoading;

//     const blog_filtered = (blogData || []).filter(elem => elem.blog_title.toLowerCase().includes(query.toLowerCase()))
//     const prod_filtered = (prodData || []).filter(elem => elem.name.toLowerCase().includes(query.toLowerCase()))

//     const results = [...prod_filtered, ...blog_filtered];

//     return (
//         <>
//             {/* >>>>>>>>>>>>>> In Cont */}
//             <div className=" pt-[60px] pb-[80px] ">


//                 <div className="container_layout min-h-[90vh] mx-auto flex justify-start items-start flex-col gap-[15px] w-full " >

//                     <h2 className=' pb-[5px] text-[22px]/[28px] ' >{results.length <= 0 ? "" : `Search Results for: "${query}"`}</h2>

//                     <div className="search_box_cont w-full flex flex-col gap-[20px]  " >
//                         {
//                             isLoader ?
//                                 <SkeletonLoader /> :
//                                 results.length <= 0 ?
//                                     <SearchBox isDisabled={true} categoryURL="" slug="" name="No Results Found!" /> :
//                                     results.map((elem, ind) => <SearchBox
//                                         key={ind} isDisabled={false}
//                                         name={elem.name ? elem.name : elem.blog_title}
//                                         slug={elem.slug ? elem.slug : elem.blog_slug}
//                                         feat_img={elem.feat_img ? elem.feat_img : elem.blog_feat_img}
//                                         category={elem.name ? 'Product' : 'Blog'}
//                                         categoryURL={elem.name ? 'products' : 'blogs'}
//                                     />)
//                         }
//                     </div>

//                 </div>
//             </div>
//         </>

//     )
// }

// export default SearchListingBackup
