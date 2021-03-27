import Product from '../models/product'

export const createProduct = async (req, res) => {
  const { name, price, quantity } = req.body

  if (!name || !price || !quantity) {
    return res.status(401).json({
      error: 'error',
      message: "Can't be blank"
    })
  }

  const productExists = await Product.findOne({ name })
  if (productExists) {
    return res.status(400).json({
      message: 'Product exists'
    })
  }

  const product = await Product.create({
    name,
    price,
    quantity
  })

  return res.status(201).json({
      id: product._id,
      name: product.name,
      price: product.price,
      quantity: product.price,
  })

}
