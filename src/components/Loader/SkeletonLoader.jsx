
import SkeletonLoaderCardComp from './SkeletonLoaderCard/SkeletonLoaderCardComp'

import './skeleton_loader.css'


const Loader = () => {
    return (
        <>
            {/* >>>>>>>>>>>>>> In Cont */}
            <div className=" w-full flex justify-center items-center gap-[20px]  " >

                <SkeletonLoaderCardComp />
                <SkeletonLoaderCardComp />
                <SkeletonLoaderCardComp additionalClassName="tab:hidden " />

            </div>

            {/* >>>>>>>>>>>>>> In Cont */}
            <div className=" w-full flex justify-center items-center gap-[20px]  " >

                <SkeletonLoaderCardComp />
                <SkeletonLoaderCardComp />
                <SkeletonLoaderCardComp additionalClassName="tab:hidden " />

            </div>

        </>
    )
}

export default Loader