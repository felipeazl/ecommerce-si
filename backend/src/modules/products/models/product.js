import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  quantity: Number,
  image: String,
  created_at: Date,
  updated_at: Date
})

export default mongoose.model('Product', ProductSchema)
