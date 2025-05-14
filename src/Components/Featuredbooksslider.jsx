import React from 'react';
import Slider from "react-slick";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../Styles/featuredbooksslider.css';
import '../Styles/all.min.css';

function Featuredbooksslider() {
    var settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    // dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section className='py-5'>
            <div className="d-flex flex-column align-items-center py-5">
                <span className='text-uppercase mb-4'>Some quality items</span>
                <h1>Featured Books</h1>
                <Slider className="bookslider col-12 mt-5" {...settings}>
                    <div className='item d-flex flex-column'>
                        <a href="#" className='px-3 position-relative overflow-hidden'>
                            <div className="img_box p-5">
                                <img src={require('../img/product-item1.jpg')} alt="Slide 1" />
                            </div>
                            <div className="add_cart position-absolute">
                                <button className='text-uppercase text-nowrap px-5 py-2'>add to cart</button>
                            </div>
                        </a>
                        <div className="text_box d-flex flex-column align-items-center row-gap-1 px-4 py-5">
                            <h6 className='text-capitalize mb-0 text-center'>Simple way of piece life</h6>
                            <p className='text-capitalize mb-0'>armor ramsey</p>
                            <h5 className='mb-0'>$ 40.00</h5>
                        </div>
                    </div>
                    <div className='item d-flex flex-column'>
                        <a href="#" className='px-3 position-relative overflow-hidden'>
                            <div className="img_box p-5">
                                <img src={require('../img/product-item2.jpg')} alt="Slide 1" />
                            </div>
                            <div className="add_cart position-absolute">
                                <button className='text-uppercase text-nowrap px-5 py-2'>add to cart</button>
                            </div>
                        </a>
                        <div className="text_box d-flex flex-column align-items-center row-gap-1 px-4 py-5">
                            <h6 className='text-capitalize mb-0 text-center'>Great travel at desert</h6>
                            <p className='text-capitalize mb-0'>Sanchit Howdy</p>
                            <h5 className='mb-0'>$ 38.00</h5>
                        </div>
                    </div>
                    <div className='item d-flex flex-column'>
                        <a href="#" className='px-3 position-relative overflow-hidden'>
                            <div className="img_box p-5">
                                <img src={require('../img/product-item3.jpg')} alt="Slide 1" />
                            </div>
                            <div className="add_cart position-absolute">
                                <button className='text-uppercase text-nowrap px-5 py-2'>add to cart</button>
                            </div>
                        </a>
                        <div className="text_box d-flex flex-column align-items-center row-gap-1 px-4 py-5">
                            <h6 className='text-capitalize mb-0 text-center'>The lady beauty Scarlett</h6>
                            <p className='text-capitalize mb-0'>Arthur Doyle</p>
                            <h5 className='mb-0'>$ 45.00</h5>
                        </div>
                    </div>
                    <div className='item d-flex flex-column'>
                        <a href="#" className='px-3 position-relative overflow-hidden'>
                            <div className="img_box p-5">
                                <img src={require('../img/product-item4.jpg')} alt="Slide 1" />
                            </div>
                            <div className="add_cart position-absolute">
                                <button className='text-uppercase text-nowrap px-5 py-2'>add to cart</button>
                            </div>
                        </a>
                        <div className="text_box d-flex flex-column align-items-center row-gap-1 px-4 py-5">
                            <h6 className='text-capitalize mb-0 text-center'>Once upon a time</h6>
                            <p className='text-capitalize mb-0'>Klien Marry</p>
                            <h5 className='mb-0'>$ 35.00</h5>
                        </div>
                    </div>
                </Slider>
                <hr className='bookslider_hr' />
                <div className="all_product w-100 d-flex justify-content-end">
                    <a href="#" className='product_btn text-decoration-none py-2'>View all products <i className="fa-solid fa-arrow-right" /></a>
                </div>
            </div>
        </section>
    )
}

export default Featuredbooksslider
