import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './HomeCarousel.scss'
import work1 from '../../Img/work1.png'
import work2 from '../../Img/work2.png'
import work3 from '../../Img/work3.png'
import work5 from '../../Img/work5.png'
import work4 from '../../Img/work4.png'
import work6 from '../../Img/work6.png'


function HomeCarousel() {
    const carouselStyle = {
        borderRadius: "12px",
    }
    return (
        <Carousel infiniteLoop autoPlay emulateTouch showThumbs={false} showIndicators={false} showStatus={false} style={carouselStyle}>
            <div className='carousel-item'>
                <img src={work1} alt='interior design'/>
            </div>
            <div className='carousel-item'>
                <img src={work2} alt='interior design'/>
            </div>
            <div className='carousel-item'>
                <img src={work3} alt='interior design'/>
            </div>
            <div className='carousel-item'>
                <img src={work4} alt='interior design'/>
            </div>
            <div className='carousel-item'>
                <img src={work5} alt='interior design'/>
            </div>
            <div className='carousel-item'>
                <img src={work6} alt='interior design'/>
            </div>
        </Carousel>


    )
}

export default HomeCarousel