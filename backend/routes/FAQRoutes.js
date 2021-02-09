import express from 'express'
import { getFAQ } from '../controllers/FAQController.js'
const router = express.Router()

//@desc     Fetch FAQ
//@route    GET api/FAQ
//@access   Public
router.route('/').get(getFAQ)

export default router
