// import React from 'react';
// import useFetch from '../../../hooks/useFetch';
// // import Loader from '../../Loader/SkeletonLoader';
// import Loader from '../../Loader/BlogListingLoader';
// import BlogCard from './BlogCard'

// const BlogCardListingBackup = ({ value }) => {

//   let blogapi = import.meta.env.VITE_BLOGS_API_KEY;
//   let blogList = useFetch(blogapi)
//   let { loader, error, data: blogData } = blogList;


//   // console.log("Blog Run blogapi", blogapi)




//   return (
//     <div className={`flex flex-row  flex-wrap gap-[25px] m-auto  w-full`}>
//       {
//         loader ? <Loader /> : error ? (<p>Error in fecthing Data something went wrong</p>) :
//           blogData.filter((dataFil) => value === "" ? blogData : dataFil.blog_category === value)
//             .map((elem) => {


//               // console.log('blog card listing elem', elem)
//               // console.log('blog card listing elem Len', elem.length)
//               return <BlogCard
//                 key={elem.blog_id}
//                 id={elem.blog_id}
//                 // slug={elem.blog_slug}
//                 name={elem.blog_title}
//                 featImg={elem.blog_feat_img}
//                 urlToblog={elem.blog_slug}
//                 boxWidth='tab:w-[100%] tab:justify-center desktop:w-[49%] '
//                 blogTags={elem.blog_tags}
//                 blogCat={elem.blog_category}
//               />

//             }
//             )
//       }
//     </div>
//   )
// }

// export default BlogCardListingBackup