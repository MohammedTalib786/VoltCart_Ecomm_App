
import './skeleton_loader.css'
import SkeletonLoaderCardComp from './SkeletonLoaderCard/SkeletonLoaderCardComp'

const Loader = () => {
    return (
        <>
            {/* >>>>>>>>>>>>>> In Cont */}
            <div className=" w-full flex justify-center items-center gap-[20px]  " >

                <SkeletonLoaderCardComp />
                <SkeletonLoaderCardComp />
                <SkeletonLoaderCardComp />

            </div>

            {/* >>>>>>>>>>>>>> In Cont */}
            <div className=" w-full flex justify-center items-center gap-[20px]  " >

                <SkeletonLoaderCardComp />
                <SkeletonLoaderCardComp />
                <SkeletonLoaderCardComp />

            </div>

        </>
    )
}

export default Loader