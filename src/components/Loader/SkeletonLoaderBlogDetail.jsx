
const SkeletonLoaderBlogDetail = () => {
    return (
        <div className=" container_layout mx-auto min-h-full  w-full flex justify-center items-start gap-[20px]  pt-[50px] " >

            <div role="status" className=" desktop:py-[100px] gt-tab:py-[80px] py-[60px]  space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-start w-full  ">

                <div className=" w-full m-0 ">

                    <div className=" bread_and_title  ">
                        <div className=" bread w-[45%] h-[18px] bg-gray-200 rounded-[6px] dark:bg-gray-400 "></div>
                        <div className="  title w-[85%] h-[30px] bg-gray-200 rounded-[6px] dark:bg-gray-400  mt-[10px] "></div>
                    </div>

                    <div className=" feat_img flex items-center justify-center w-full gt-tab:min-h-[400px] tab:min-h-[350px] min-h-[300px] bg-gray-300 rounded-sm dark:bg-gray-400 my-[40px] ">
                        <svg className="w-10 h-10 text-gray-200 dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                        </svg>
                    </div>

                    <div className="  sub_titles pb-[22px] ">
                        <div className=" sub_title w-[95%] h-[22px] bg-gray-200 rounded-[6px] dark:bg-gray-400 "></div>
                        <div className=" sub_title_2 w-[60%] h-[22px] bg-gray-200 rounded-[6px] dark:bg-gray-400 mt-[10px] "></div>
                    </div>

                    <div className=" para  ">
                        <div className=" para w-full h-[16px] bg-gray-200 rounded-[6px] dark:bg-gray-400 "></div>
                        <div className="  para w-full h-[16px] bg-gray-200 rounded-[6px] dark:bg-gray-400 mt-[10px] "></div>
                        <div className="  para w-full h-[16px] bg-gray-200 rounded-[6px] dark:bg-gray-400 mt-[10px] "></div>
                        <div className="  para w-full h-[16px] bg-gray-200 rounded-[6px] dark:bg-gray-400 mt-[10px] "></div>
                        <div className="  para w-[60%] h-[16px] bg-gray-200 rounded-[6px] dark:bg-gray-400 mt-[10px] "></div>
                    </div>

                </div>

                <span className="sr-only">Loading...</span>
            </div>

        </div>
    )
}

export default SkeletonLoaderBlogDetail
