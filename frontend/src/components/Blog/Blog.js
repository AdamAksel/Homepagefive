import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BlogWrapper, BlogArea, BlogBody, BlogCard, BlogDate, BlogTitle } from './Blog.elements'

const Blog = () => {
  const [blog, setBlog] = useState([])

  useEffect(() => {
    axios
      .get('/api/blog')
      .then(res => {
        setBlog(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <BlogWrapper>
      <BlogArea>
      {blog.map(content => (
          <BlogCard key={content._id}>
            <BlogTitle>
              {content.title}
            </BlogTitle>
            <BlogBody>
              {content.body}
            </BlogBody>
            <BlogDate>
              {(content.date).slice(0, 10)}
            </BlogDate>
          </BlogCard>
        ))}
      </BlogArea>
    </BlogWrapper>
  )
}

export default Blog
