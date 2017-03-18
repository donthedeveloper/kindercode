import React from 'react';

import DropZoneItem from '../components/DropZoneItem';
import ProgramItem from '../components/ProgramItem';

const DropZoneContainer = (props) => {
  // const program = [
  //   (<ProgramItem commands={props.commands} procedure={props.precedure} />),
  //   (<DropZoneItem commands={props.commands} procedure={props.precedure} />)
  // ];

  // const program = [];
  //
  // props.procedure.forEach((node) => {
  //   program.push((<DropZoneItem commands={props.commands} procedure={props.precedure} />));
  //   program.push((<ProgramItem text={props.commands[node.commandId].text} />));
  //
  // });

  // console.log('p for program', program);

  return (
    <ul className="drop-zone-list">
      {/*<DropZoneItem commands={props.commands} procedure={props.precedure} />
      <ProgramItem commands={props.commands} procedure={props.precedure} />
      <DropZoneItem commands={props.commands} procedure={props.precedure} />
      <ProgramItem commands={props.commands} procedure={props.precedure} />*/}
      {/*program.map((node) =>
        node
      )*/}
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
