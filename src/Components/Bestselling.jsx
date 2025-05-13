import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../Styles/bestselling.css';
import '../Styles/all.min.css';

function Bestselling() {
    return (
        <section className='dark_bgcolor p-5'>
            <div className="p-5">
                <div className="bestselling d-flex justify-content-between flex-wrap flex-lg-nowrap">
                    <div className="img_box col-12 col-lg-5 d-flex justify-content-lg-end justify-content-center">
                        <div className="col-8">
                            <img src={require('../img/single-image.jpg')} alt="" />
                        </div>
                    </div>
                    <div className="text_box col-12 col-lg-6 d-flex flex-column pt-5 align-items-lg-center align-items-start">
                        <h1 className='text-capitalize'>Best Selling Book</h1>
                        <div className='selling_hr'></div>
                        <p className='mt-5 text-capitalize'>By Timbur Hood</p>
                        <h4 className='mt-2 text-capitalize'>Birds gonna be happy</h4>
                        <p className='mt-4 w-75 text-center text-lg-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.</p>
                        <h5 className='mt-5'>$45.00</h5>
                        <div className="all_product w-100 d-flex justify-content-start mt-4">
                            <a href="#" className='product_btn text-decoration-none py-2'>Shop it now <i className="fa-solid fa-arrow-right" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Bestselling
