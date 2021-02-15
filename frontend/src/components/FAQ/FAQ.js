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
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <FAQWrapper>
      <FAQArea>
        {FAQ.map(qAndA => (
          <ul key={qAndA._id}>
            <li>
              Q: {qAndA.question} <br />
              A: {qAndA.answer} <br />
              <br />
            </li>
          </ul>
        ))}
      </FAQArea>
    </FAQWrapper>
  )
}

export default FAQ
