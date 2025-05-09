import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../Styles/my.css';
import '../Styles/all.min.css';
import './jquery';

function Home_slider() {
    return (
        <div>
            <div className="owl-carousel owl-theme">
                <div className="item">
                    <img src="img/2.jpg" alt />
                </div>
                <div className="item">
                    <img src="img/1.jpg" alt />
                </div>
                <div className="item">
                    <img src="img/3.jpg" alt />
                </div>
                <div className="item">
                    <img src="img/4.jpg" alt />
                </div>
                <div className="item">
                    <img src="img/5.jpg" alt />
                </div>
                <div className="item">
                    <img src="img/6.jpg" alt />
                </div>
                <div className="item">
                    <img src="img/7.jpg" alt />
                </div>
                <div className="item">
                    <img src="img/8.webp" alt />
                </div>
            </div>

        </div>
    )
}

export default Home_slider
