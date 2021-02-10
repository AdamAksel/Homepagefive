import Review from '../models/reviewModel.js'

//@desc     Fetch all review posts
//@route    GET api/reviews
//@access   Public
const getReviewPosts = async (req, res) => {
  const reviewPosts = await Review.find({})
  res.json(reviewPosts)
}

//@desc     Fetch single review post
//@route    GET api/reviews/:id
//@access   Public
const getReviewPostById = async (req, res) => {
  const reviewPost = await Review.findById(req.params.id)

  if (reviewPost) {
    res.json(reviewPost)
  } else {
    res.status(404)
    throw new Error('Review Not Found')
  }
}

export { getReviewPosts, getReviewPostById }
