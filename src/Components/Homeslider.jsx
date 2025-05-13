import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../Styles/homeslider.css';
import '../Styles/all.min.css';
import Button from 'react-bootstrap/Button';
import img1 from '../img/main-banner1.jpg';
import img2 from '../img/main-banner2.jpg';

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
                        arrows: false,
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
        <section className='mx-0 mx-lg-5'>
            <div className="homeslider" ref={sliderRef}>
                <div className='d-flex justify-content-between flex-row-reverse flex-wrap flex-lg-nowrap'>
                    <div className="img_box col-12 col-lg-6 col-xl-5 px-5 px-lg-0 d-flex justify-content-lg-start justify-content-center">
                        <img src={img1} alt="Slide 1" className='px-5 px-lg-0' />
                    </div>
                    <div className="text_box col-12 col-lg-6 d-flex justify-content-center flex-column px-3 px-xl-5">
                        <div className='text-lg-start text-center'>
                            <h1 className='text-capitalize lh-base mb-4'>Life of the <br className='d-lg-flex d-none' /> wild</h1>
                            <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero
                                ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis
                                urna, a eu.</p>
                            <Button className='banner_btn text-uppercase text-decoration-none mt-4 py-2'>read more
                                <i className="fa-solid fa-arrow-right" /></Button>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-between flex-row-reverse flex-wrap flex-lg-nowrap'>
                    <div className="img_box col-12 col-lg-6 col-xl-5 px-5 px-lg-0 d-flex justify-content-lg-start justify-content-center">
                        <img src={img2} alt="Slide 1" className='px-5 px-lg-0' />
                    </div>
                    <div className="text_box col-12 col-lg-6 d-flex justify-content-center flex-column px-3 px-xl-5">
                        <div className='text-lg-start text-center'>
                            <h1 className='text-capitalize lh-base mb-4'>Birds gonna  <br className='d-lg-flex d-none' />  be happy</h1>
                            <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero
                                ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis
                                urna, a eu.</p>
                            <Button className='banner_btn text-uppercase text-decoration-none mt-4 py-2'>read more
                                <i className="fa-solid fa-arrow-right" /></Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Homeslider;
