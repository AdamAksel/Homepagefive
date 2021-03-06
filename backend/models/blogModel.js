import mongoose from 'mongoose'

const blogSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
})

const Blog = mongoose.model('Blog', blogSchema)

export default Blog
