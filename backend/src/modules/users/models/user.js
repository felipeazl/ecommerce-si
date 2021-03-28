import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true
  },
  isActived: Boolean,
  password: String,
  lastLogin: Date,
  created_at: Date,
  updated_at: Date
})

export default mongoose.model('User', UserSchema)
