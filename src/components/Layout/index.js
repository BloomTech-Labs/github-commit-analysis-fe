import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';

export default (props) => (
  <React.Fragment>
    <Navbar />
    {props.children}
    <Footer />
  </React.Fragment>
);
