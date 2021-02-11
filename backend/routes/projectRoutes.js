import express from 'express'
import {
  getProject,
  deleteProjectItem,
  updateProjectItem,
  createProjectItem,
} from '../controllers/projectController.js'
const router = express.Router()

//@desc     Fetch projects
//@route    GET api/projects
//@access   Public
router.route('/').get(getProject)

router.route('/').post(createProjectItem)

router.route('/:id').put(updateProjectItem)

router.route('/:id').delete(deleteProjectItem)

export default router
