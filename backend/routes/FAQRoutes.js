import express from 'express'
import {
  getFAQ,
  createFAQPost,
  updateFAQItem,
  deleteFAQItem,
} from '../controllers/FAQController.js'
const router = express.Router()

//@desc     Fetch FAQ
//@route    GET api/FAQ
//@access   Public
router.route('/').get(getFAQ)

router.route('/').post(createFAQPost)

router.route('/:id').put(updateFAQItem)

router.route('/:id').delete(deleteFAQItem)

export default router
