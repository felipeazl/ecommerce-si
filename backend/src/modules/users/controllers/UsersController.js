var _CreateUserService = _interopRequireDefault(
  require('../services/CreateUserService')
)

function _interopRequireDefault (obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

class UsersController {
  async create (req, res) {
    const { name, email, password } = req.body
    // eslint-disable-next-line new-cap
    const createUser = new _CreateUserService.default()
    const user = await createUser.execute({
      name,
      email,
      password
    })
    return res.status(201).json(user)
  }
}

exports.default = UsersController
