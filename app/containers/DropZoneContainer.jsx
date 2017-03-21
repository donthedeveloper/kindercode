import React from 'react';

import DropZoneItem from '../components/DropZoneItem';
import ProgramItem from '../components/ProgramItem';

const DropZoneContainer = (props) => {

  return (
    <ul className="drop-zone-list">
      <DropZoneItem commands={props.commands} procedure={props.precedure} />
      {props.procedure.map((node, index) =>
        (
          <div key={index}>
            <ProgramItem
              text={props.commands[node.commandId].text} />
          </div>
        )
      )}
    </ul>
  );
}

export default DropZoneContainer;
