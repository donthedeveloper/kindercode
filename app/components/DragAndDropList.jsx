import React from 'react';

import DropZoneItem from './DropZoneItem';
import ProgramItem from '../components/ProgramItem';
import DragAndDropList from '../components/DragAndDropList';

const DragAndDrop = (props) => {
  console.log('Drag and drop list props:', props);
  return (
    <ul className="drop-zone-list">
      <DropZoneItem commands={props.commands} procedure={props.procedure} index={0} />
      {props.procedure.map((node, index) =>
        (
          <div key={index}>
            <ProgramItem
              text={props.commands[node.commandId].text}
              index={index+1}
              parentId={node.id}
              childNodes={node.children}
            >

              {!!node.children.length && <DragAndDropList commands={props.commands} procedure={node.children} />}
            </ProgramItem>
          <DropZoneItem commands={props.commands} procedure={props.procedure} index={index+1} />
          </div>
        )
      )}
    </ul>
  )
};

export default DragAndDrop;
