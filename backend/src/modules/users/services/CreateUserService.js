var _bcryptjs = require('bcryptjs')
var _typeorm = require('typeorm')

var _AppError = _interopRequireDefault(require('../../../shared/errors/AppError'))
var _UsersRepository = _interopRequireDefault(require('../typeorm/repositories/UsersRepository'))

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

class CreateUserService {
  async execute ({
    name,
    email,
    password
  }) {
    const usersRepository = (0, _typeorm.getCustomRepository)(_UsersRepository.default)
    const emailExists = await usersRepository.findByEmail(email)

    if (emailExists) {
      throw new _AppError('Email address already used')
    }

    const hashedPassword = await (0, _bcryptjs.hash)(password, 12)
    const user = usersRepository.create({
      name,
      email,
      password: hashedPassword
    })
    await usersRepository.save(user)
    return user
  }
}

var _default = CreateUserService
exports.default = _default
