import mongoose from 'mongoose'

const CustomerSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true
  },
  password: String,
  lastLogin: Date,
  created_at: Date,
  updated_at: Date
})

export default mongoose.model('Customer', CustomerSchema)
