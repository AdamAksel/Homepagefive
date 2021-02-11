import Blog from '../models/blogModel.js'

//@desc     Fetch all blog posts
//@route    GET api/blog
//@access   Public
const getBlogPosts = async (req, res) => {
  const blogPosts = await Blog.find({})
  res.json(blogPosts)
}

//@desc     Fetch single blog post
//@route    GET api/blog/:id
//@access   Public
const getBlogPostById = async (req, res) => {
  const blogPost = await Blog.findById(req.params.id)

  if (blogPost) {
    res.json(blogPost)
  } else {
    res.status(404)
    throw new Error('Product Not Found')
  }
}

//@desc     Register new user
//@route    POST /api/users
//@access   Public
const createBlogPost = async (req, res) => {
  const { title, body, date } = req.body

  const blog = await Blog.create({
    title,
    body,
    date,
  })

  if (blog) {
    res.status(201).json({
      _id: blog._id,
      title: blog.title,
      body: blog.body,
      date: blog.date,
    })
  } else {
    res.status(400)
    throw new Error('Invalid Blog Data!')
  }
}

const updateBlogPost = async (req, res) => {
  const blogPost = await Blog.findById(req.params.id)
  if (blogPost) {
    blogPost.title = req.body.title || blogPost.title
    blogPost.body = req.body.body || blogPost.body

    const updatedBlogPost = await blogPost.save()

    res.json({
      title: updatedBlogPost.title,
      body: updatedBlogPost.body,
    })
  } else {
    res.status(404)
    throw new Error('user not found!')
  }
}

const deleteBlogPost = async (req, res) => {
  const blogPost = await Blog.findById(req.params.id)
  if (blogPost) {
    blogPost.remove().then(() => res.json({ success: true }))
  } else {
    res.status(404)
    throw new Error('user not found!')
  }
}

export {
  getBlogPosts,
  getBlogPostById,
  createBlogPost,
  updateBlogPost,
  deleteBlogPost,
}
