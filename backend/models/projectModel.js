import mongoose from 'mongoose'

const projectSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
})

const Project = mongoose.model('Project', projectSchema)

export default Project
