import React from 'React';

import DragAndDrop from './DragAndDrop.jsx';
import KonvaContainer from './KonvaContainer';
import NotifierContainer from './NotifierContainer';

const AppContainer = () => {
  return (
    <div className="app-container">
      <DragAndDrop />
      <KonvaContainer />
      <NotifierContainer />
    </div>
  );
}

export default AppContainer;
