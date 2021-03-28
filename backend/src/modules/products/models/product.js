import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  quantity: Number,
  created_at: Date,
  updated_at: Date
})

export default mongoose.model('Product', ProductSchema)