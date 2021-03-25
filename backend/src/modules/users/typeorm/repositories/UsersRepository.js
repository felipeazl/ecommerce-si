
var _typeorm = require('typeorm')

var _User = _interopRequireDefault(require('../entities/User'))

var _dec, _class

function _interopRequireDefault (obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

const UsersRepository =
  ((_dec = (0, _typeorm.EntityRepository)(_User.default)),
  _dec(
    (_class = class UsersRepository extends _typeorm.Repository {
      async findByName (name) {
        const user = await this.findOne({
          where: {
            name
          }
        })
        return user
      }

      async findById (id) {
        const user = await this.findOne({
          where: {
            id
          }
        })
        return user
      }

      async findByEmail (email) {
        const user = await this.findOne({
          where: {
            email
          }
        })
        return user
      }
    })
  ) || _class)
var _default = UsersRepository
exports.default = _default
