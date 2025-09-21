import './search-box-skeleton.css'

const SearchBoxSkeleton = () => {
    return (
        <div className="search_loader_container">
            <div className="post  ">
                <div className="avatar"></div>
                <div className="flex flex-col w-full gap-[25px] ">
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>
            <div className="post  ">
                <div className="avatar"></div>
                <div className="flex flex-col w-full gap-[25px] ">
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>
            <div className="post  ">
                <div className="avatar"></div>
                <div className="flex flex-col w-full gap-[25px] ">
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>

        </div>
    )
}

export default SearchBoxSkeleton