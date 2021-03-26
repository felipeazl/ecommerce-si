import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true
  },
  password: String,
  created_at: Date,
  updated_at: Date
})

export default mongoose.model('User', UserSchema)
