export const signUpParamsSchema = {
  type: 'object',
  properties: {
    nome: {
      type: 'string'
    },
    email: {
      type: 'string'
    },
    password: {
      type: 'string'
    }
  },
  required: ['nome', 'email', 'password']
}