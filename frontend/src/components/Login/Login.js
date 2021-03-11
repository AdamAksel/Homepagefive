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
  const access = useSelector((state) => state.admin)
  var [pass, setPass] = useState()
  var [passKey, setPassKey] = useState()
  var [FAQModal, setFAQModal] = useState(false)
  var [blogModal, setBlogModal] = useState(false)
  var [projectsModal, setProjectsModal] = useState(false)
  var [modal, setModal] = useState(false)
  var [FAQ, setFAQ] = useState([])
  var [FAQQuestion, setFAQQuestion] = useState()
  var [FAQAnswer, setFAQAnswer] = useState()
  var [postModal, setPostModal] = useState(false)
  var [delModal, setDelModal] = useState(false)
  var [putModal, setPutModal] = useState(false)
  var [FAQID, setFAQID] = useState()

  useEffect(() => {
    axios
      .get('/api/FAQ')
      .then((res) => {
        setFAQ(res.data)
      })
      .catch((err) => {
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
      .catch((err) => console.log(err))
  }

  function DelFAQ(e) {
    e.preventDefault()

    axios
      .delete(`/api/FAQ/${FAQID}`)
      .then()
      .catch((err) => console.log(err))
  }

  function PutFAQ(e) {
    e.preventDefault()
    const data = {
      question: FAQQuestion,
      answer: FAQAnswer,
    }
    axios
      .put(`/api/FAQ/${FAQID}`, data)
      .then()
      .catch((err) => console.log(err))
  }

  function findIdHandler(e) {
    setFAQID(e.target.value)
  }

  const submitHandler = (e) => {
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

  const postScreenHandler = () => {
    setPostModal(true)
    setPutModal(false)
    setDelModal(false)
  }
  const putScreenHandler = () => {
    setPostModal(false)
    setPutModal(true)
    setDelModal(false)
  }
  const delScreenHandler = () => {
    setPostModal(false)
    setPutModal(false)
    setDelModal(true)
  }

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
            {FAQ.map((qAndA) => (
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
            {postModal ? (
              <div>
                <h4>Post</h4>
                <TextArea placeholder="Question" onChange={postFAQQuestionHandler}></TextArea>
                <TextArea placeholder="Answer" onChange={postFAQAnswerHandler}></TextArea>
                <button type='submit' value='submit' onClick={PostFAQ}>
                  Post
                </button>
              </div>
            ) : delModal ? (
              <div>
                <h4>Del</h4>
                <TextArea placeholder="ID" onChange={findIdHandler}></TextArea>
                <button type='submit' value='submit' onClick={DelFAQ}>
                  Delete
                </button>
              </div>
            ) : putModal ? (
              <div>
                <h4>Put</h4>
                <TextArea placeholder="ID" onChange={findIdHandler}></TextArea>
                <TextArea placeholder="Question" onChange={postFAQQuestionHandler}></TextArea>
                <TextArea placeholder="Answer" onChange={postFAQAnswerHandler}></TextArea>
                <button type='submit' value='submit' onClick={PutFAQ}>
                  Put
                </button>
              </div>
            ) : null}
          </ModalRight>
        </ModalArea>
        <button onClick={postScreenHandler}>Post</button>
        <button onClick={putScreenHandler}>Put</button>
        <button onClick={delScreenHandler}>Del</button> 
      </ModalBackground>
    )
  }
}

export default Login
