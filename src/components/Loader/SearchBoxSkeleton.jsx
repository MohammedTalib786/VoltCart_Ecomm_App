import './search-box-skeleton.css'


const SearchBoxSkeleton = () => {
    return (
        <div className="search_loader_container">
            <div className="post  ">
                <div className=" relative w-full h-[220px]  ">
                    <div className="avatar"></div>
                    <div className="avatar_label"></div>
                </div>
                <div className="flex flex-col w-full gap-[16px] ">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>

            <div className="post  ">
                <div className=" relative w-full h-[220px]  ">
                    <div className="avatar"></div>
                    <div className="avatar_label"></div>
                </div>
                <div className="flex flex-col w-full gap-[16px] ">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>

            <div className="post  ">
                <div className=" relative w-full h-[220px]  ">
                    <div className="avatar"></div>
                    <div className="avatar_label"></div>
                </div>
                <div className="flex flex-col w-full gap-[16px] ">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>
        </div>
    )
}

export default SearchBoxSkeleton;
