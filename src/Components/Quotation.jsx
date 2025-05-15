import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../Styles/quotation.css';
import '../Styles/all.min.css';

function Quotation() {
    return (
        <section className='py-5'>
            <div className="quotation_text d-flex flex-column align-items-center">
                <h1 className='text-capitalize'>Quote of the day</h1>
                <div className='quotation_hr mb-5'></div>
                <p className='mb-5 text-center lh-lg w-75'>"“The more that you read, the more things you will know. The more that you learn, the more places
                    you’ll go.”"</p>
                <span className='text-capitalize'>Dr. Seuss</span>
            </div>
        </section>
    )
}

export default Quotation
