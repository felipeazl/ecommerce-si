import { hash } from 'bcryptjs'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

import User from '../models/user'
import { notFound } from '../../../shared/errors/index'

dotenv.config()

export const updateLastLogin = async (email) => {
  const user = await User.findOne({ email })
  if (user) {
    user.lastLogin = new Date()
    await user.save()
  }
}


export const createUser = async (req, res) => {
  const { name, email, password } = req.body

  const userExists = await User.findOne({ email })

  if (userExists) {
    // await saveRequest(req)
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
      lastLogin: new Date(),
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

export const userLogin = async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (!user) {
    return notFound(res, 'User')
  }

  const passwdVerify = hash(password, user.password)
  if (!passwdVerify) {
    return notFound(res, 'User')
  }
  updateLastLogin(user.email)
  const token = jwt.sign({}, process.env.SECRET_KEY, { subject: user.id, expiresIn: '1d' })

  return res.status(200).json({
    user,
    token
  })


}
