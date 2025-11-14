import React from 'react'

import './blogs_loader.css'
import BlogLoaderCard from './BlogLoaderCard'


const BlogsLoader = () => {
    return (
        <div className=" blogs_loader_container_home_pg">

            <BlogLoaderCard />
            <BlogLoaderCard />
            <BlogLoaderCard />
            <BlogLoaderCard />

        </div>
    )
}

export default BlogsLoader