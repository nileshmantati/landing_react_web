import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../Styles/subscribe.css';
import '../Styles/all.min.css';
import Button from 'react-bootstrap/Button';

function Subscribe() {
    return (
        <section className='subscribe d-flex flex-wrap flex-md-nowrap column-gap-5 justify-content-center mx-lg-5 px-lg-5 px-0 mx-0'>
            <div className="d-flex flex-column col-md-4 align-items-end px-4">
                <div>
                    <h1 className='text-capitalize'>Subscribe to our <br className='d-md-block d-none' /> newsletter</h1>
                    <div className='subscribe_hr mb-5'></div>
                </div>
            </div>
            <div className='col-md-4 d-flex flex-column align-items-start px-5'>
                <p className='mb-5 text-center lh-lg'>Sed eu feugiat amet, libero ipsum enim pharetra hac dolor sit amet, consectetur. Elit
                    adipiscing enim pharetra hac.</p>
                <form action="#" className='border-black border-bottom border-2 d-flex col-12 pb-4 column-gap-sm-3 column-gap-0'>
                    <input type="text" name="email" placeholder='Enter Your email address here' className='col-8 border-0' />
                    <Button className='send_btn d-flex align-items-center column-gap-0 column-gap-sm-2 border-0 bg-transparent'>
                        <span className='text-uppercase'>send</span>
                        <i class="fa-solid fa-paper-plane"></i></Button>
                </form>
            </div>
        </section>
    )
}

export default Subscribe
