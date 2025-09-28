import { useState, useEffect } from 'react'
import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";
import './image-gallery-slider.css'


const ImageGallerySlider = ({ apiImg }) => {

    const handlerOnMouse = (e) => {
        console.log('mouse is hovering');
        console.log('eve target', e.target)
        e.target.style.scale = '1.5'
    }

    // const testimages = [
    //     {
    //         original: "https://picsum.photos/id/1018/1000/600/",
    //         thumbnail: "https://picsum.photos/id/1018/250/150/",
    //     },
    //     {
    //         original: "https://picsum.photos/id/1015/1000/600/",
    //         thumbnail: "https://picsum.photos/id/1015/250/150/",
    //     },
    //     {
    //         original: "https://picsum.photos/id/1019/1000/600/",
    //         thumbnail: "https://picsum.photos/id/1019/250/150/",
    //     },
    // ];

    let [images, setImages] = useState([]);

    function fetchImages() {
        let getImg = apiImg.map((url) => ({
            original: url,
            thumbnail: url
        }))
        setImages(getImg)
    }

    useEffect(() => {
        fetchImages()
    }, [])

    return (
        <ImageGallery
            items={images}
            showPlayButton={false}
            autoPlay={false}
            showFullscreenButton={true}
            onMouseOver={(e) => e.target.style.scale = '1.5'}
            onMouseLeave={(e) => e.target.style.scale = '1'}
        />


    )
}

export default ImageGallerySlider;

