import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import React, { useState } from "react";
import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";
import img4 from "./images/4.jpg";
import img5 from "./images/5.jpg";
import "./stmonic.css"
const images = [
    { id: 1, src: img1, alt: 'Image 1' },
    { id: 2, src: img2, alt: 'Image 2' },
    // { id: 3, src: img3, alt: 'Image 3' },
    { id: 4, src: img4, alt: 'Image 4' },
    { id: 5, src: img5, alt: 'Image 5' }
];

const StMonica = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const renderSlides = images.map((image) => (
        <div key={image.id} className="slide">
            <img src={image.src} alt={image.alt} className="slide-image" />
        </div>
    ));

    function handleChange(index) {
        setCurrentIndex(index);
    }

    return (
        <>
            <div>"This is the St. Monica history page"</div>
            <Carousel
                showArrows={true}
                autoPlay={true}
                infiniteLoop={true}
                selectedItem={currentIndex}
                onChange={handleChange}
                showThumbs={false}
                className="carousel-container"
            >
                {renderSlides}
            </Carousel>
        </>
    );
}

export default StMonica;
