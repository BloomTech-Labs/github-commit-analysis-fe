import React from 'react';
import Iframe from 'react-iframe'

const GraphHolder = (props) => {
    return (
      <Iframe width="100%" height="100%" frameborder="1" scrolling="no" src={props.src}></Iframe>
    );
}
export default GraphHolder;