import React from 'react'

import './feat_prod_loader.css'
import SkeletonLoaderCardComp from '../SkeletonLoaderCard/SkeletonLoaderCardComp'


const FeatProdLoader = () => {
    return (
        <>
            {/* >>>>>>>>>>>>>> In Cont */}
            <div className=" feat_prod_loader_home_pg w-full flex justify-center items-center gap-[20px]  " >

                <SkeletonLoaderCardComp />
                <SkeletonLoaderCardComp />
                <SkeletonLoaderCardComp />
                <SkeletonLoaderCardComp additionalClassName="tab:hidden " />

            </div>

        </>
    )
}

export default FeatProdLoader