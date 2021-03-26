import chalk from 'chalk'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import router from './routes'


dotenv.config()

const app = express()

// Connect to MongoDB.
mongoose.set('useCreateIndex', true)
mongoose.set('useUnifiedTopology', true)
mongoose.set('useNewUrlParser', true)
mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.on('error', err => {
  console.error(`%s ${err}`, chalk.red('x'))
})

app.use(cors())
app.use(express.json())
app.use(router)

app.listen(process.env.PORT || 3000, () => {
  console.log(
    '%s App is running at http://localhost:%d in %s mode',
    chalk.green('✓'),
    process.env.PORT || 3000,
    process.env.NODE_ENV
  )
  console.log('  Press CTRL-C to stop\n')
})
