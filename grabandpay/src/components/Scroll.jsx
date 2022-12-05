import React from 'react';

const Scroll = (props) => {
  return( 
    <div style={{overflowY: 'hidden', position: 'absolute', left: '37vw', 
      top: '33vh', overflowX: 'hidden', zIndex: '-99', scrollBehavior: 'smooth', width: '30vw'}}>
      {props.children}
    </div>	
  );
}

export default Scroll;