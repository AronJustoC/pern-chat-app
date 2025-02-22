import express from 'express';

const router = express.Router();

router.get('/messages', (req, res) => {
  res.send('messages is ok');
});


export default router;
