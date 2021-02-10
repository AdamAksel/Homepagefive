import express from 'express'
import { getProject } from '../controllers/projectController.js'
const router = express.Router()

//@desc     Fetch projects
//@route    GET api/projects
//@access   Public
router.route('/').get(getProject)

export default router
