import React from 'react';
import './IntroSlideshow.css';
import image3 from '../media/intro_slideshow/3.png';
import image1 from '../media/intro_slideshow/1.png';
import image2 from '../media/intro_slideshow/2.png';


export default function IntroSlideshow() {
    const images = [image1, image2, image3];

    return (
        <div className='intro_slideshow'>
            {images.map((image, index) => (
                <img key={index} src={image} alt={`Carousel ${index}`} />
            ))}
        </div>
    );
}