import express from 'express'
import {
  getReviewPostById,
  getReviewPosts,
} from '../controllers/reviewController.js'
const router = express.Router()

//@desc     Fetch all blog posts
//@route    GET api/blog
//@access   Public
router.route('/').get(getReviewPosts)

//@desc     Fetch single blog post
//@route    GET api/blog/:id
//@access   Public
router.route('/:id').get(getReviewPostById)

export default router
