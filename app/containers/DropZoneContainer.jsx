import React from 'react';

import DropZoneItem from '../components/DropZoneItem';

const DropZoneContainer = (props) => {
  return (
    <ul className="drop-zone-list">
      <DropZoneItem />
    </ul>
  );
}

export default DropZoneContainer;
