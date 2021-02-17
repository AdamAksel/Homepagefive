import React, { useState } from 'react'
import { LoginWrapper, LoginArea } from './Login.elements'
import { useDispatch } from 'react-redux'
import { admin } from '../../redux/actions'

const Login = () => {
  //console.log(process.env.REACT_APP_KEY)

  var [pass, setPass] = useState()
  var [passKey, setPassKey] = useState()

  const dispatch = useDispatch()

  function handleChangeAgain(e) {
    setPassKey(e.target.value)
  }

  function handleChange(event) {
    setPass((pass = event.target.value))
  }

  const submitHandler = e => {
    e.preventDefault()
    if (pass === process.env.REACT_APP_KEY) {
      dispatch(admin(passKey))
    }
  }

  return (
    <LoginWrapper>
      <LoginArea>
        <form>
          <label>
            Are you the KeyMaster? <br />
            <input
              type='text'
              id='key'
              name='key'
              onChange={handleChange}
            ></input>
          </label>{' '}
          <br />
          <label>
            How many Keys? <br />
            <input
              type='text'
              id='key1'
              name='key1'
              onChange={handleChangeAgain}
            ></input>
          </label>{' '}
          <br />
          <button type='submit' value='submit' onClick={submitHandler}>
            Yes!
          </button>
        </form>
      </LoginArea>
    </LoginWrapper>
  )
}

export default Login
