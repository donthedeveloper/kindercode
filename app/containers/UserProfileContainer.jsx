import React from 'react';
import {connect} from 'react-redux';

let UserProfile = () => {
  return (
    <h1>Hi.</h1>
  )
}

let mapStateToProps = state => {
  return {}
}

export default connect(mapStateToProps, null)(UserProfile)
