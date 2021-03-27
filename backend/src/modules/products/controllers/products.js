import {
  notFound
} from '../../../shared/errors'
import Product from '../models/product'

export const createProduct = async (req, res) => {
  const {
    name,
    description,
    price,
    quantity
  } = req.body

  if (!name || !description || !price || !quantity ) {
    return res.status(401).json({
      error: 'error',
      message: "Can't be blank"
    })
  }

  const productExists = await Product.findOne({
    name
  })
  if (productExists) {
    return res.status(400).json({
      message: 'Product exists'
    })
  }

  const product = await Product.create({
    name,
    description,
    price,
    quantity,
  })

  return res.status(201).json({
    id: product._id,
    description: product.description,
    name: product.name,
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
    name
  } = req.params

  if (!name) {
    return notFound(res, 'Product')
  }

  const product = await Product.find({
    "name": {
      '$regex': '.*' + name + '.*'
    }
  })

  if (product.length == 0) {
    return notFound(res, 'Product')
  }

  return res.status(200).json(product)
}
