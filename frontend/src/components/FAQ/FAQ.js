import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { FAQWrapper, FAQArea } from './FAQ.elements'

const FAQ = () => {
  var [FAQ, setFAQ] = useState([])

  useEffect(() => {
    axios
      .get('/api/FAQ')
      .then(res => {
        setFAQ(res.data)
        console.log(res)
        return res.json()
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <FAQWrapper>
      <FAQArea>
        {FAQ.map(qAndA => (
          <ul>
            <li key={qAndA._id}>
              Q: {qAndA.question} <br />
              <br /> A: {qAndA.answer}
            </li>
          </ul>
        ))}
      </FAQArea>
    </FAQWrapper>
  )
}

export default FAQ
