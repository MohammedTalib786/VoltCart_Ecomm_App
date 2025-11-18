import SkeletonLoaderCardComp from '../SkeletonLoaderCard/SkeletonLoaderCardComp';

import './feat_prod_loader.css';


const FeatProdLoader = () => {
    return (
        <div className=" feat_prod_loader_home_pg w-full flex justify-center items-center gap-[20px]  " >
            <SkeletonLoaderCardComp />
            <SkeletonLoaderCardComp />
            <SkeletonLoaderCardComp />
            <SkeletonLoaderCardComp additionalClassName="tab:hidden " />
        </div>
    )
}

export default FeatProdLoader;
