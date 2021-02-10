import Project from '../models/projectModel.js'

//@desc     Fetch FAQ
//@route    GET api/FAQ
//@access   Public
const getProject = async (req, res) => {
  const project = await Project.find({})
  res.json(project)
}

export { getProject }
