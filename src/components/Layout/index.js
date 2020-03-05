import React from 'react';

export default (props) => (
  <div>
    <h1>Hello World</h1>
    <p>The content below is inside of the Layout component!</p>
    {props.children}
  </div>
);
