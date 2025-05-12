import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../Styles/my.css';
import '../Styles/all.min.css';
import img1 from '../img/main-banner1.jpg';

const Homeslider = () => {
    const sliderRef = useRef(null);

    useEffect(() => {
        const $slider = $(sliderRef.current);

        if ($slider.length > 0) {
            // Ensure DOM is fully ready
            setTimeout(() => {
                if (!$slider.hasClass('slick-initialized')) {
                    $slider.slick({
                        dots: false,
                        arrows: true,
                        // autoplay: true,
                        // autoplaySpeed: 2000,
                    });
                }
            }, 0);
        }

        // Cleanup on unmount
        return () => {
            if ($slider.hasClass('slick-initialized')) {
                $slider.slick('unslick');
            }
        };
    }, []);

    return (
        <div className='mx-5'>
            <div className="slider" ref={sliderRef}>
                <div className='d-flex justify-content-between'>
                    <div className="text_box col-6 d-flex justify-content-center flex-column px-5">
                        <h1 className='text-capitalize lh-base mb-4'>Life of the <br /> wild</h1>
                        <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero
                            ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis
                            urna, a eu.</p>
                    </div>
                    <div className="img_box col-5">
                        <img src={img1} alt="Slide 1" />
                    </div>
                </div>
                <div className='d-flex justify-content-between'>
                    <div className="text_box col-6 d-flex justify-content-center flex-column px-5">
                        <h1 className='text-capitalize lh-base mb-4'>Birds gonna <br /> be happy</h1>
                        <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero
                            ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis
                            urna, a eu.</p>
                    </div>
                    <div className="img_box col-5">
                        <img src={img1} alt="Slide 1" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homeslider;
