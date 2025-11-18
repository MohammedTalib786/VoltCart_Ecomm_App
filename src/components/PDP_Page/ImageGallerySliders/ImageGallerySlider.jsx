import { useState, useEffect } from 'react';
import ImageGallery from "react-image-gallery";

import "react-image-gallery/styles/css/image-gallery.css";
import './image-gallery-slider.css';


const ImageGallerySlider = ({ apiImg }) => {
    const handlerOnMouseOver = (e) => {
        e.target.style.scale = '1.2'
        e.target.style.transition = 'all .25s ease-in-out'
    }
    
    const  handlerOnMouseLeave = (e) => {
        e.target.style.scale = '1'
        e.target.style.transition = 'all .25s ease-in-out'
    }

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
            onMouseOver={handlerOnMouseOver}
            onMouseLeave={handlerOnMouseLeave}
        />
    )
}

export default ImageGallerySlider;
