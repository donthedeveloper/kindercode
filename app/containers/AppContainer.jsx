import React from 'React';

import DragAndDrop from './DragAndDrop.jsx';
import KonvaContainer from './KonvaContainer';

const AppContainer = () => {
  return (
    <div className="app-container">
      <DragAndDrop />
      <KonvaContainer />
    </div>
  );
}

export default AppContainer;
