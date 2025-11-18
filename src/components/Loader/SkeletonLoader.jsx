import SkeletonLoaderCardComp from './SkeletonLoaderCard/SkeletonLoaderCardComp';

import './skeleton_loader.css';


const Loader = () => {
    return (
        <>
            <div className=" w-full flex justify-center items-center gap-[20px]  " >
                <SkeletonLoaderCardComp />
                <SkeletonLoaderCardComp />
                <SkeletonLoaderCardComp additionalClassName="tab:hidden " />
            </div>

            <div className=" w-full flex justify-center items-center gap-[20px]  " >
                <SkeletonLoaderCardComp />
                <SkeletonLoaderCardComp />
                <SkeletonLoaderCardComp additionalClassName="tab:hidden " />
            </div>
        </>
    )
}

export default Loader;
