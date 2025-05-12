/* WebSite Link
 https://themewagon.github.io/booksaw/
 */

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Header from './Header';
import Homeslider from './Homeslider';


function App() {
  return (
    <div className="container-fulid main px-3">

      <Header />
      <div className='mx-5 px-5'>
        <Homeslider />
      </div>
    </div >
  );
}

export default App;
