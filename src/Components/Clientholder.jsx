import React from 'react'

function Clientholder() {
    return (
        <section className='clientholder_section py-4'>
            <div className="clien_holder d-flex justify-content-center py-5 flex-wrap flex-md-nowrap">
                <a href='#'>
                    <img src={require('../img/client-image1.png')} alt="" />
                </a>
                <a href='#'>
                    <img src={require('../img/client-image2.png')} alt="" />
                </a>
                <a href='#'>
                    <img src={require('../img/client-image3.png')} alt="" />
                </a>
                <a href='#'>
                    <img src={require('../img/client-image4.png')} alt="" />
                </a>
                <a href='#'>
                    <img src={require('../img/client-image5.png')} alt="" />
                </a>
            </div>
        </section>
    )
}

export default Clientholder
