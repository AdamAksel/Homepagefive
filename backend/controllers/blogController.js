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

export { getBlogPosts, getBlogPostById }
