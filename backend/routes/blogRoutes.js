import express from 'express'
import { getBlogPostById, getBlogPosts } from '../controllers/blogController.js'
const router = express.Router()

//@desc     Fetch all blog posts
//@route    GET api/blog
//@access   Public
router.route('/').get(getBlogPosts)

//@desc     Fetch single blog post
//@route    GET api/blog/:id
//@access   Public
router.route('/:id').get(getBlogPostById)

export default router