import swaggerConfig from '../docs'
import { serve, setup } from 'swagger-ui-express'

export default (app) => {
  app.use('/api-docs', serve, setup(swaggerConfig))
}
