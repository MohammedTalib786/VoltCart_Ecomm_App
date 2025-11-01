const BlogSkeletonCard = ({
    additionalClassName = ""
}) => {
    return (
        <div className={`skeleton-card ${additionalClassName} `} >

            <div className=" w-full ">

                <div className=" flex w-full relative ">
                    <div className="skeleton skeleton-img"></div>
                    {/* <div className=" skeleton-badge"></div> */}
                </div>
            </div>

            <div className=" w-full tab:min-h-[300px] flex flex-col justify-center gap-[12px] tab:pt-[0px] tab:px-[0px] tab:pb-[0px] pt-[10px] px-[20px] pb-[30px]  " >

                <div className="skeleton skeleton-cat  "></div>
                <div className="skeleton skeleton-title"></div>
                <div className="skeleton skeleton-title skeleton-title-2"></div>
                <div className="skeleton skeleton-tags "></div>
               

            </div>

        </div>
    )
}

export default BlogSkeletonCard