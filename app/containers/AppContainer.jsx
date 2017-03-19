import React from 'React';

import DragAndDrop from './DragAndDrop.jsx';
import KonvaContainer from './KonvaContainer';
import NavbarContainer from './NavbarContainer';

const AppContainer = () => {
  return (
    <div>
      <NavbarContainer />
      <div className="app-container">
        <DragAndDrop />
        <KonvaContainer />
      </div>
    </div>
  );
}

export default AppContainer;
