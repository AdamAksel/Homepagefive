import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },

  date: Date.now,
})

const Review = mongoose.model('Review', reviewSchema)

export default Review
