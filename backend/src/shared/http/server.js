import express from 'express';
import AppError from '../errors/AppError.js';
import 'dotenv/config.js';
import 'express-async-errors'
import router from './routes/index.js';

const app = express()

app.use(express.json())

app.use(router)

app.use((err, req, res, _) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message
    });
  }
  return res.status(500).json({
    error: 'error',
    message: 'Internal Server Error'
  })
})


app.listen(process.env.PORT || 3000, () => console.log(`Server running on ${process.env.PORT}`))
