import React from 'React';

import DragAndDrop from './DragAndDrop.jsx';
import KonvaContainer from './KonvaContainer';
import NotifierContainer from './NotifierContainer';
import NavbarContainer from './NavbarContainer';

const AppContainer = () => {
  return (
    <div>
      <NavbarContainer />
      <div className="app-container">
        <DragAndDrop />
        <KonvaContainer />
        <NotifierContainer />
      </div>
    </div>
  )
}

export default AppContainer;
