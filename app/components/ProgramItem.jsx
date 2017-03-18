import React from 'react';

const DropItem = (props) => {
  console.log('triggered');
  return(
    <li className="drop-zone-program">{props.text}</li>
  );
};

export default DropItem;
