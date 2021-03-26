import { hash } from 'bcryptjs'
import User from '../models/user'

export const createUser = async (req, res) => {
  const { name, email, password } = req.body

  const userExists = await User.findOne({ email })

  if (userExists) {
    await saveRequest(req)
    return res.status(400).json({
      msg: 'Usuário já cadastrado'
    })
  }
  if (name && email && password !== undefined) {
    const hashedPassword = await hash(password, 12)

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      created_at: new Date(),
      updated_at: new Date(),
    })
    req.user = {
      _id: user._id
    }

    return res.json([{
      id: user._id,
      name: user.name,
      email: user.email,
    }])
  }
  return res.status(400).json({
      msg: '{name}(String), {email}(String), {notifications}(Boolean) and {password}(String) are required'
    })
}
