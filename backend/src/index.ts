import express from 'express';
import cookieParser from 'cookie-parser'; // parsea las cookies para que puedan ser enviadas en las peticiones HTTP


import authRouter from './routes/auth.route.js'; // import the auth router
import messagesRouter from './routes/messages.route.js';

const app = express();

app.use(express.json()); // para parsear la petición de tipo application/json
app.use(cookieParser()); //  para parsear las cookies


app.use('/api/auth', authRouter);
app.use('/api/messages', messagesRouter);


app.listen(5000, () => {
  console.log('Server is running on port 5000')
})
