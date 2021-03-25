import express from 'express';
import AppError from '../errors/AppError.js';
import 'dotenv/config.js';

const app = express()

app.use(express.json())

app.use((err, req, res, _) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message
    });
  }
})


app.listen(process.env.PORT || 3000, () => console.log('Server running 3000'))
