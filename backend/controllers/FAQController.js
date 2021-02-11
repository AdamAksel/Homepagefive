import FAQ from '../models/FAQModel.js'

//@desc     Fetch FAQ
//@route    GET api/FAQ
//@access   Public
const getFAQ = async (req, res) => {
  const FAQAll = await FAQ.find({})
  res.json(FAQAll)
}

const createFAQPost = async (req, res) => {
  const { question, answer } = req.body

  const FAQPost = await FAQ.create({
    question,
    answer,
  })

  if (FAQPost) {
    res.status(201).json({
      _id: FAQPost._id,
      question: FAQPost.question,
      answer: FAQPost.answer,
    })
  } else {
    res.status(400)
    throw new Error('Invalid FAQ Data!')
  }
}

const updateFAQItem = async (req, res) => {
  const FAQPost = await FAQ.findById(req.params.id)
  if (FAQPost) {
    FAQPost.question = req.body.question || FAQPost.question
    FAQPost.answer = req.body.answer || FAQPost.answer

    const updatedFAQItem = await FAQPost.save()

    res.json({
      question: updatedFAQItem.question,
      answer: updatedFAQItem.answer,
    })
  } else {
    res.status(404)
    throw new Error('user not found!')
  }
}

const deleteFAQItem = async (req, res) => {
  const FAQPost = await FAQ.findById(req.params.id)
  if (FAQPost) {
    FAQPost.remove().then(() => res.json({ success: true }))
  } else {
    res.status(404)
    throw new Error('user not found!')
  }
}

export { getFAQ, createFAQPost, updateFAQItem, deleteFAQItem }
