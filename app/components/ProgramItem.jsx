import React from 'react';

const DropItem = (props) => {
  // console.log('Program Item index:', props.index);
  return(
    <li className="drop-zone-program">{props.text}</li>
  );
};

export default DropItem;
