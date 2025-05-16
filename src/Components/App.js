/* WebSite Link
 https://themewagon.github.io/booksaw/
 */

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Header from './Header';
import Homeslider from './Homeslider';
import Clientholder from './Clientholder';
import Featuredbooksslider from './Featuredbooksslider';
import Bestselling from './Bestselling';
import Popularbooksslider from './Popularbooksslider';
import Quotation from './Quotation';
import Offer from './Offer';
import Subscribe from './Subscribe';
import Footer from './Footer';

function App() {
  return (
    <div className="container-fulid main">
      <Header />
      <div className='mx-lg-5 px-lg-5 pt-lg-0 pt-5 px-0 mx-0'>
        <Homeslider />
      </div>
      <Clientholder />
      <div className='mx-lg-5 px-lg-5 px-0 mx-0'>
        <Featuredbooksslider />
      </div>
      <Bestselling />
      <div className='mx-lg-5 px-lg-5 px-0 mx-0'>
        <Popularbooksslider />
      </div>
      <div className='mx-lg-5 px-lg-5 px-0 mx-0'>
        <Quotation />
      </div>
      <div className='dark_bgcolor'>
        <Offer />
      </div>
      <div className='dark_bgcolor'>
        <Subscribe />
      </div>
      <Footer />
    </div >
  );
}

export default App;
