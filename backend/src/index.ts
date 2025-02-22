import express from 'express';
import authRouter from './routes/auth.route.js';
import messagesRouter from './routes/messsages.route.js';

const app = express();

app.use('/api/auth', authRouter);
app.use('/api/messages', messagesRouter);


app.listen(5000, () => {
  console.log('Server is running on port 5000')
})
