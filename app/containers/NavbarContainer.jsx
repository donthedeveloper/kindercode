import React from 'react';
import {connect} from 'react-redux';

import Navbar from '../components/Navbar';

let mapStateToProps = state => {
  // console.log('mapStateToProps', state.auth)
  return {
    user: state.auth,
  }
}

export default connect(mapStateToProps, null)(Navbar)
