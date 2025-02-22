import express from 'express';

const router = express.Router();

router.get('/login', (req, res) => {
  res.send('login is ok');
});


router.get('/signup', (req, res) => {
  res.send('signup is ok');
});

export default router;
