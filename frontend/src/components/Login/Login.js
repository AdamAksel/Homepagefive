import React, { useState, useEffect } from 'react'
import {
  LoginWrapper,
  LoginArea,
  ModalBackground,
  ModalArea,
  ModalLeft,
  ModalRight,
  TextArea,
} from './Login.elements'
import { useDispatch, useSelector } from 'react-redux'
import { admin } from '../../redux/actions'
import axios from 'axios'

const Login = () => {
  const access = useSelector(state => state.admin)
  var [pass, setPass] = useState()
  var [passKey, setPassKey] = useState()
  var [FAQModal, setFAQModal] = useState(false)
  var [blogModal, setBlogModal] = useState(false)
  var [projectsModal, setProjectsModal] = useState(false)
  var [modal, setModal] = useState(false)
  var [FAQ, setFAQ] = useState([])
  var [FAQQuestion, setFAQQuestion] = useState()
  var [FAQAnswer, setFAQAnswer] = useState()

  useEffect(() => {
    axios
      .get('/api/FAQ')
      .then(res => {
        setFAQ(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const dispatch = useDispatch()

  function handleChangeAgain(e) {
    setPassKey(e.target.value)
  }

  function handleChange(event) {
    setPass((pass = event.target.value))
  }

  function postFAQQuestionHandler(e) {
    setFAQQuestion(e.target.value)
  }
  function postFAQAnswerHandler(e) {
    setFAQAnswer(e.target.value)
  }
  function PostFAQ(e) {
    e.preventDefault()
    const data = {
      question: FAQQuestion,
      answer: FAQAnswer,
    }
    axios
      .post('/api/FAQ', data)
      .then()
      .catch(err => console.log(err))
  }

  const submitHandler = e => {
    e.preventDefault()
    if (pass === process.env.REACT_APP_KEY) {
      let passNumeral = parseInt(passKey, 10)
      dispatch(admin(passNumeral))
    }
    if (access === 9000) {
      setFAQModal(true)
      setBlogModal(false)
      setProjectsModal(false)
    } else if (access === 9001) {
      setFAQModal(false)
      setBlogModal(true)
      setProjectsModal(false)
    } else if (access === 9002) {
      setFAQModal(false)
      setBlogModal(false)
      setProjectsModal(true)
    }
  }

  const modalHandler = () => {
    if (modal) {
      setModal(false)
    } else {
      setModal(true)
    }
  }

  console.log(access)

  if (!modal) {
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
                type='number'
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

          <div>
            {FAQModal ? (
              <button onClick={modalHandler}>FAQ</button>
            ) : blogModal ? (
              <button>Blog</button>
            ) : projectsModal ? (
              <button>Projects</button>
            ) : null}
          </div>
        </LoginArea>
      </LoginWrapper>
    )
  } else if (modal && FAQModal) {
    return (
      <ModalBackground>
        <ModalArea>
          <ModalLeft>
            {FAQ.map(qAndA => (
              <ul key={qAndA._id}>
                <li>
                  ID: {qAndA._id} <br />
                  Q: {qAndA.question} <br />
                  A: {qAndA.answer} <br />
                  <br />
                </li>
              </ul>
            ))}
          </ModalLeft>
          <ModalRight>
            <div>
              <h4>Post</h4>
              <TextArea onChange={postFAQQuestionHandler}></TextArea>
              <TextArea onChange={postFAQAnswerHandler}></TextArea>
              <button type='submit' value='submit' onClick={PostFAQ}>
                Post
              </button>
            </div>
          </ModalRight>
        </ModalArea>
      </ModalBackground>
    )
  }
}

export default Login
