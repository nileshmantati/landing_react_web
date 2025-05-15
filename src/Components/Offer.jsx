import React from 'react'
import Slider from "react-slick";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../Styles/offer.css';
import '../Styles/all.min.css';

function Offer() {
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
        <section className='mx-lg-5 px-lg-5 px-0 mx-0 py-5'>
            <div className="offer_text d-flex flex-column align-items-center">
                <span className='text-uppercase mb-2'>Grab your opportunity</span>
                <h1 className='text-capitalize'>Books with offer</h1>
            </div>
            <Slider className="bookslider col-12 mt-5" {...settings}>
                <div className='item d-flex flex-column'>
                    <a href="#" className='px-3 position-relative overflow-hidden'>
                        <div className="img_box p-5">
                            <img src={require('../img/product-item5.jpg')} alt="Slide 1" />
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
                            <img src={require('../img/product-item6.jpg')} alt="Slide 1" />
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
                            <img src={require('../img/product-item7.jpg')} alt="Slide 1" />
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
                            <img src={require('../img/product-item8.jpg')} alt="Slide 1" />
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
                        <h6 className='text-capitalize mb-0 text-center'>Simple way of piece life</h6>
                        <p className='text-capitalize mb-0'>armor ramsey</p>
                        <h5 className='mb-0'>$ 40.00</h5>
                    </div>
                </div>
            </Slider>
        </section>
    )
}

export default Offer
