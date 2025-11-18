const SkeletonLoaderCardComp = ({ additionalClassName = "" }) => {
    return (
        <div className={`skeleton-card ${additionalClassName} `} >
            <div className=" flex w-full relative ">
                <div className="skeleton skeleton-img"></div>
                <div className=" skeleton-badge"></div>
            </div>
            <div className="skeleton skeleton-title"></div>
            <div className="skeleton skeleton-title skeleton-title-2"></div>
            <div className="skeleton skeleton-cat"></div>
            <div className="flex w-full items-center gap-[20px] " >
                <div className="skeleton skeleton-price"></div>
                <div className="skeleton skeleton-btn short"></div>
            </div>
        </div>
    )
}

export default SkeletonLoaderCardComp;
