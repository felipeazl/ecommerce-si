
var _celebrate = require('celebrate')
var _express = require('express')

var _UsersController = require('../controllers/UsersController')

const usersRouter = (0, _express.Router)()

const usersController = new _UsersController.default()
usersRouter.post('/', (0, _celebrate.celebrate)({
  [_celebrate.Segments.BODY]: {
    name: _celebrate.Joi.string().required(),
    email: _celebrate.Joi.string().email().required(),
    password: _celebrate.Joi.string().required()
  }
}), usersController.create)
var _default = usersRouter
exports.default = _default
