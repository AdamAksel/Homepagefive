import FAQ from '../models/FAQModel.js'

//@desc     Fetch FAQ
//@route    GET api/FAQ
//@access   Public
const getFAQ = async (req, res) => {
  const FAQAll = await FAQ.find({})
  res.json(FAQAll)
}

export { getFAQ }
