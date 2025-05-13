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


function App() {
  return (
    <div className="container-fulid main px-3">

      <Header />
      <div className='mx-lg-5 px-lg-5 pt-lg-0 pt-5 px-0 mx-0'>
        <Homeslider />
      </div>
      <Clientholder />
      <div className='mx-lg-5 px-lg-5 px-0 mx-0'>
        <Featuredbooksslider />
      </div>
    </div >
  );
}

export default App;
