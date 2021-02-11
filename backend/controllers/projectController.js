import Project from '../models/projectModel.js'

//@desc     Fetch FAQ
//@route    GET api/FAQ
//@access   Public
const getProject = async (req, res) => {
  const project = await Project.find({})
  res.json(project)
}

const createProjectItem = async (req, res) => {
  const { title, body, link } = req.body

  const projectItem = await Project.create({
    title,
    body,
    link,
  })

  if (projectItem) {
    res.status(201).json({
      _id: projectItem._id,
      title: projectItem.title,
      body: projectItem.body,
      link: projectItem.link,
    })
  } else {
    res.status(400)
    throw new Error('Invalid Project Data!')
  }
}

const updateProjectItem = async (req, res) => {
  const projectItem = await Project.findById(req.params.id)
  if (projectItem) {
    projectItem.title = req.body.title || projectItem.title
    projectItem.body = req.body.answer || projectItem.body
    projectItem.link = req.body.answer || projectItem.link

    const updatedProjectItem = await projectItem.save()

    res.json({
      title: updatedProjectItem.title,
      body: updatedProjectItem.body,
      link: updatedProjectItem.link,
    })
  } else {
    res.status(404)
    throw new Error('user not found!')
  }
}

const deleteProjectItem = async (req, res) => {
  const projectItem = await Project.findById(req.params.id)
  if (projectItem) {
    projectItem.remove().then(() => res.json({ success: true }))
  } else {
    res.status(404)
    throw new Error('user not found!')
  }
}

export { getProject, createProjectItem, deleteProjectItem, updateProjectItem }
