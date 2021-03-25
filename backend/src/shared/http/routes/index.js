import { Router } from 'express';

const router = Router();

router.get('/check', (req, res) => {
  return res.status(200).json({
    message: "Hey guys it's working"
  })
})

export default router;
