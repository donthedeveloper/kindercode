import React from 'react';

const DropItem = (props) => {
  console.log('triggered');
  return(
    <li>{props.text}</li>
  );
};

export default DropItem;
