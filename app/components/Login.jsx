
import React from 'react'

export const Login = ({ login }) => (
  <form onSubmit={evt => {
    evt.preventDefault()
    login(evt.target.username.value, evt.target.password.value)
  } }>
    <label>Email</label>
    <input name="username" />
    <label>Password</label>
    <input name="password" type="password" />
    <button type="submit" value="Login">Login</button>
  </form>
)
//import {login} from 'APP/app/reducers/auth'
import {login} from '../reducers/auth'
import {connect} from 'react-redux'

export default connect (
  state => ({}),
  {login},
) (Login)
