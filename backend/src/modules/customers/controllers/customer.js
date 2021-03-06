import { compare, hash } from 'bcryptjs'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { produtos } from '../../../database/produtos.js'

const json = './produtos.json'

import { notFound } from '../../../shared/errors/index'
import Customer from '../models/customer'

dotenv.config()

export const createCustomer = async (req, res) => {
  const { name, email, password } = req.body

  const customerExists = await Customer.findOne({ email })

  if (customerExists) {
    return res.status(400).json({
      msg: 'Usuário já cadastrado'
    })
  }
  if (name && email && password !== undefined) {
    const hashedPassword = await hash(password, 12)

    const customer = await Customer.create({
      name,
      email,
      password: hashedPassword,
      lastLogin: new Date(),
      created_at: new Date(),
      updated_at: new Date(),
    })
    req.user = {
      _id: customer._id
    }

    const token = jwt.sign({}, process.env.CUSTOMER_KEY, { subject: customer.id, expiresIn: '1d' })

    return res.json([{
      id: customer._id,
      name: customer.name,
      email: customer.email,
      token
    }])
  }
  return res.status(400).json({
      msg: `${name}(String), ${email}(String), ${notifications}(Boolean) and ${password}(String) are required`
    })
}

export const customerLogin = async (req, res) => {

  const { email, password } = req.body

  const customer = await Customer.findOne({ email })

  if (!customer) {
    return notFound(res, 'Customer')
  }

  const passwdVerify = await compare(password, customer.password)
  if (!passwdVerify) {
    return res.status(401).json({
      error: 'Wrong password'
    })
  }
  const token = jwt.sign({}, process.env.CUSTOMER_KEY, { subject: customer.id, expiresIn: '1d' })

  return res.status(200).json({
    id: customer._id,
    name: customer.name,
    email: customer.email,
    lastLogin: customer.lastLogin,
    token
  })
}



export const getData = async (req, res) => {

    return res.status(200).json(produtos)
  }
