import React from 'react'
import logo from '../img/main-logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../Styles/my.css';
import '../Styles/all.min.css';

function Header() {
    // let searchInput = {
    //   backgroundColor: 'red',
    // };
    let count = 0;
    const searchBtn = () => {
        count++;
        // searchInput = {
        //   backgroundColor: 'blue'
        // };
        // alert('New Load');
    };
    return (
        <div>
            {/* Header Start */}
            <header className="px-3">
                <div className='header_top d-none d-md-flex justify-content-between align-items-center py-3 '>
                    <div className='icons d-flex column-gap-4'>
                        <i className="fa-brands fa-facebook-f" />
                        <i className="fa-brands fa-twitter" />
                        <i className="fa-brands fa-youtube" />
                        <i className="fa-brands fa-square-behance" />
                    </div>
                    <div className='d-flex justify-content-between column-gap-md-4 column-gap-lg-5'>
                        <a className='h-top text-decoration-none d-flex align-itmes-center'><i className="fa-solid fa-user me-1 d-flex align-items-center"></i><span className='d-flex align-items-center'>Account</span></a>
                        <a className='h-top text-decoration-none d-flex align-itmes-center'><i className="fa-solid fa-clipboard me-1 d-flex align-items-center"></i><span className='d-flex align-items-center'>Cart : (0 $)</span></a>
                        <div className='search_box'>
                            <form className='d-flex rounded-5 overflow-hidden'>
                                <input type='search' placeholder='Search' id='search_input' className={count ? 'search_input2' : 'search_input1'} />
                                <button id='search_btn' onClick={searchBtn} className='p-0'><i className="fa-solid fa-magnifying-glass rounded-circle"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
                <nav className="navbar navbar-expand-lg border-bottom border-top sticky-top">
                    <div className="container-fluid px-0">
                        <a className="navbar-brand" href="#">
                            <img src={logo} alt='Not Found' />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mb-2 mb-lg-0 col-md-12 col-lg-12 column-gap-lg-3 column-gap-1 justify-content-end">
                                <li className="nav-item">
                                    <a className="nav-link text-uppercase" aria-current="page" href="#" style={{ color: '#DAA556' }}>Home</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link text-uppercase" href="#">
                                        pages
                                        <i className="fa-solid fa-caret-down ms-2"></i>
                                    </a>
                                    <ul className="dropdown_menu ps-0">
                                        <li><a className="dropdown-item text-uppercase py-2 ps-4" href="#">home</a></li>
                                        <li><a className="dropdown-item text-uppercase py-2 ps-4" href="#">about</a></li>
                                        <li><a className="dropdown-item text-uppercase py-2 ps-4" href="#">styles</a></li>
                                        <li><a className="dropdown-item text-uppercase py-2 ps-4" href="#">blog</a></li>
                                        <li><a className="dropdown-item text-uppercase py-2 ps-4" href="#">post single</a></li>
                                        <li><a className="dropdown-item text-uppercase py-2 ps-4" href="#">our store</a></li>
                                        <li><a className="dropdown-item text-uppercase py-2 ps-4" href="#">product single</a></li>
                                        <li><a className="dropdown-item text-uppercase py-2 ps-4" href="#">contact</a></li>
                                        <li><a className="dropdown-item text-uppercase py-2 ps-4" href="#">thank you</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-uppercase" href="#">Featured</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-uppercase" href="#">popular</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-uppercase" href="#">offer</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-uppercase" href="#">articles</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-uppercase" href="#">download app</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            {/* Header End */}
        </div>
    )
}

export default Header
