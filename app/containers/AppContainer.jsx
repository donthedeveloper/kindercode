import React from 'React';
import { connect } from 'react-redux';
import store from '../store.jsx';
import {toggleInstructions} from '../action-creators/challenges.jsx';

import DragAndDrop from './DragAndDrop.jsx';
import KonvaContainer from './KonvaContainer';
import NotifierContainer from './NotifierContainer';
import NavbarContainer from './NavbarContainer';

const AppComponent = ({renderInstructions, turnOffInstructions, spriteURL}) => {

  const sprite = `/img/${spriteURL}`;
  const redStar = '/img/red-star.png';
  const blueStar = '/img/blue-star.png';
  const yellowStar = '/img/yellow-star.png';
  const cactus = '/img/cactus.png';

  return (
    <div className="app-container">
      <NavbarContainer />
      <div className="play-container">
        <DragAndDrop />
        <KonvaContainer />
        { renderInstructions &&
          <div className='instruction-text'>
            <h2>Welcome to KinderCode!</h2>
            <div id='spriteInstructions'>
              <img src={sprite}/>
              <p>The goal is to collect all 5 stars on the grid. Move your sprite across the canvas with the action and programming blocks. Make sure to nest move actions in loops whenever you can. </p>
            </div>
            <div id='yellowStarInstructions'>
              <img src={yellowStar}/>
              <p>Collect all 4 of these, and make sure that you account for the star that randomly switches between yellow and red!</p>
            </div>
            <div id='blueStarInstructions'>
              <img src={blueStar}/>
              <p>In order to collect the blue star, you must collect at least 3 of the yellow stars first.</p>
            </div>
            <div id='redStarInstructions'>
              <img src={redStar}/>
              <p>On every challenge, there will be one star that randomly switches between red and yellow. Use the If and If Not code blocks with the collect star and collect red tile star code blocks when you get there!</p>
            </div>
            <div id='cactusInstructions'>
              <img src={cactus}/>
              <p>Avoid the cactii at all costs! Running into one will reset the grid to its position at the beginning of the challenge.</p>
            </div>
            <button onClick={() => turnOffInstructions()} >
              Let's play!
            </button>
          </div>}
        <NotifierContainer />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    renderInstructions: state.challenges.renderInstructions,
    spriteURL: state.challenges.sprite.url
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    turnOffInstructions () {
      store.dispatch(toggleInstructions(false));
    }
  }
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(AppComponent);

export default AppContainer;
