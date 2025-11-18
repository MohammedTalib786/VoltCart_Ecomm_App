import Loader from '../../Loader/BlogListingLoader';
import BlogCard from './BlogCard'


const BlogCardListing = ({ value, loader, error, blogData }) => {
  let mainData = blogData.filter((dataFil) => value === "" ? blogData : dataFil.blog_category === value)

  return (
    <div className={`flex flex-row  flex-wrap gt-tab:gap-[23px] gap-[25px] m-auto  w-full`}>
      {
        loader ? <Loader /> : error ? (<p>Error in fecthing Data something went wrong</p>)
          : mainData.length < 1
            ? <p className=' font-[400] font-primary text-[18px]/[26px] ' >No Posts Found!</p>
            : mainData.map(elem =>
              <BlogCard
                key={elem.blog_id}
                id={elem.blog_id}
                name={elem.blog_title}
                featImg={elem.blog_feat_img}
                urlToblog={elem.blog_slug}
                boxWidth='tab:w-[100%] tab:justify-center desktop:w-[49%] '
                blogTags={elem.blog_tags}
                blogCat={elem.blog_category}
              />
            )
      }
    </div>
  )
}

export default BlogCardListing;
