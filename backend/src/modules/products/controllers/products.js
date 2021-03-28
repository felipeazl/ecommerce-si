import {
  notFound
} from '../../../shared/errors'
import Product from '../models/product'

export const createProduct = async (req, res) => {
  const {
    title,
    description,
    price,
    quantity
  } = req.body

  if (!title || !description || !price || !quantity ) {
    return res.status(401).json({
      error: 'error',
      message: "Can't be blank"
    })
  }

  const productExists = await Product.findOne({
    title
  })
  if (productExists) {
    return res.status(400).json({
      message: 'Product exists'
    })
  }

  const product = await Product.create({
    title,
    description,
    price,
    quantity,
  })

  return res.status(201).json({
    id: product._id,
    description: product.description,
    title: product.title,
    price: product.price,
    quantity: product.price
  })

}
export const getProductsList = async (req, res) => {

  const product = await Product.find()

  return res.status(200).json(product)
}

export const searchProduct = async (req, res) => {
  const {
    title
  } = req.params

  if (!title) {
    return notFound(res, 'Product')
  }

  const product = await Product.find({
    "title": {
      '$regex': '.*' + title + '.*'
    }
  })

  if (product.length == 0) {
    return notFound(res, 'Product')
  }

  return res.status(200).json(product)
}
