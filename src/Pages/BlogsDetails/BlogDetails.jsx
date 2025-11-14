import { useParams } from 'react-router-dom'

import useFetch from '../../hooks/useFetch';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import BlogDetailsSlider from '../../components/BlogPage/BlogDetailsSlider';
import BlogShareComp from '../../components/BlogPage/BlogShareComp';
import Loader from '../../components/Loader/SkeletonLoaderBlogDetail';

import './blogDeatils.css'


const BlogDetails = () => {
  let paramet = useParams();
  let blogAPI = import.meta.env.VITE_BLOGS_API_KEY;

  let blogDetail = useFetch(`${blogAPI}${paramet.slug}`);
  let { loader, error, data: blogData } = blogDetail;
  let { blog_id, blog_title, blog_slug, blog_excerpt, blog_feat_img,
    blog_inside_img, blog_category, blog_tags, blog_content } = blogData;

  let currentLocalShareURL = `${window.location.hostname}:${window.location.port}${window.location.pathname}`

  if (!blogData) return ("no Blog found")

  // >>>>>>>>>>>>>>>>> Change Document Title Dynamically
  useDocumentTitle(`${blog_title ? blog_title : "Article"} | Expert Insights from VoltCart`);


  return (
    <>
      {
        loader ? <Loader /> : error ? (<p>Details are not fetched</p>) :
          <div className="container_layout m-auto">
            <div className='flex flex-col justify-left items-start m-auto  desktop:pt-[100px] gt-tab:pt-[80px] pt-[60px] w-full'>
              <BreadCrumbs />

              <h1 className=" mt-[10px] font-primary desktop:text-[45px]/[55px] gt-tab:text-[34px]/[42px] tab:text-[30px]/[40px] text-[26px]/[34px] font-[300] ">{blog_title}</h1>

              <div className=" gt-tab:py-[50px] py-[30px] ">
                <img className={` object-cover w-full  object-center tab:rounded-[22px] rounded-[12px]  `} src={blog_feat_img} />
              </div>

              <p className="blogDesc" dangerouslySetInnerHTML={{ __html: blog_content }} />
            </div>

            <BlogShareComp currentLocalShareURL={currentLocalShareURL} />

            <div className="sliders blog_slider desktop:pb-[100px] gt-tab:pb-[80px] pb-[60px] ">
              <h3 className="font-primary gt-tab:text-[50px]/[60px] tab:text-[45px]/[50px] text-[38px]/[42px] font-[200] pb-[30px]">Related Posts</h3>
              <BlogDetailsSlider
                blog_id={blog_id}
              />
            </div>

          </div>
      }
    </>
  )
}

export default BlogDetails