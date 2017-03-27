import React from 'react';

import DropZoneItem from './DropZoneItem';
import ProgramItem from '../components/ProgramItem';
import DragAndDropList from '../components/DragAndDropList';

const DragAndDrop = (props) => {
  return (
    <ul className="drop-zone-list">
      <DropZoneItem
        commands={props.commands}
        procedure={props.procedure}
        index={0}
        parentId={props.parentId}
        insertIntoParentProcedure={props.insertIntoParentProcedure}
      />
      {props.procedure.map((node, index) =>
        (
          <div key={index}>
            <ProgramItem
              commandId={props.commands[node.commandId].id}
              text={props.commands[node.commandId].text}
              index={index}
              parentId={props.parentId}
              childNodes={node.children}
              nodeId={node.id}
              insertIntoParentProcedure={props.insertIntoParentProcedure}
              commandType={props.commands[node.commandId].commandType}
            >

              {!!node.children.length &&
                <DragAndDropList
                  commands={props.commands}
                  procedure={node.children}
                  parentId={node.id}
                  insertIntoProcedure={props.insertIntoProcedure}
                  insertIntoParentProcedure={props.insertIntoParentProcedure}
                />}
            </ProgramItem>
          <DropZoneItem
            commands={props.commands}
            procedure={props.procedure}
            index={index+1}
            parentId={props.parentId}
            insertIntoParentProcedure={props.insertIntoParentProcedure}
          />
          </div>
        )
      )}
    </ul>
  )
};

export default DragAndDrop;
