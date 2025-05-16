import React from 'react';
import '../Styles/footer.css';
import logo from '../img/main-logo.png'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row top-footer justify-content-between pb-5 row-gap-5">
                    {/* Logo and Description */}
                    <div className="col-md-3">
                        <h5 className='mb-5'><img src={logo} alt='Not Found' className='logo' /></h5>
                        <p className='lh-lg fw-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis sed ptibus liberolectus nonet psryroin. Amet sed lorem posuere sit iaculis amet, ac urna. Adipiscing fames semper erat ac in suspendisse iaculis.</p>
                    </div>
                    <div className='col d-flex flex-wrap flex-lg-nowrap row-gap-5'>
                        {/* About Us */}
                        <div className="col-12 col-sm-6 col-lg-3 d-flex justify-content-start justify-content-md-center">
                            <div>
                                <h5 className='mb-5 fs-4'>About Us</h5>
                                <ul className="list-unstyled">
                                    <li><a href="/">vision</a></li>
                                    <li><a href="/">articles</a></li>
                                    <li><a href="/">careers</a></li>
                                    <li><a href="/">service terms</a></li>
                                    <li><a href="/">donate</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* Discover */}
                        <div className="col-12 col-sm-6 col-lg-3 d-flex justify-content-start justify-content-md-center">
                            <div>
                                <h5 className='mb-5 fs-4'>Discover</h5>
                                <ul className="list-unstyled">
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/">Books</a></li>
                                    <li><a href="/">Authors</a></li>
                                    <li><a href="/">Subjects</a></li>
                                    <li><a href="/">Advanced Search</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* My Account */}
                        <div className="col-12 col-sm-6 col-lg-3 d-flex justify-content-start justify-content-md-center">
                            <div>
                                <h5 className='mb-5 fs-4'>My Account</h5>
                                <ul className="list-unstyled">
                                    <li><a href="/">Sign In</a></li>
                                    <li><a href="/">View Cart</a></li>
                                    <li><a href="/">My Wishlist</a></li>
                                    <li><a href="/">Track My Order</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* Help */}
                        <div className="col-12 col-sm-6 col-lg-3 d-flex justify-content-start justify-content-md-center">
                            <div>
                                <h5 className='mb-5 fs-4'>Help</h5>
                                <ul className="list-unstyled">
                                    <li><a href="/">Help center</a></li>
                                    <li><a href="/">Report a problem</a></li>
                                    <li><a href="/">Suggesting edits</a></li>
                                    <li><a href="/">Contact us</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <hr />

                <div className="footer-bottom d-flex justify-content-between align-items-center py-3 flex-wrap flex-sm-nowrap row-gap-4">
                    <p className="mb-0">&copy; 2022 All rights reserved. Free HTML Template by <a href="https://templatesjungle.com">TemplatesJungle</a></p>
                    <div className="social-icons d-flex column-gap-3">
                        <a href="/"><i className="fa-brands fa-facebook-f" /></a>
                        <a href="/"><i className="fa-brands fa-twitter" /></a>
                        <a href="/"><i className="fa-brands fa-youtube" /></a>
                        <a href="/"><i className="fa-brands fa-square-behance" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
