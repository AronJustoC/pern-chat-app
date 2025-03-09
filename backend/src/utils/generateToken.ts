import jwt from 'jsonwebtoken';
import { Response } from 'express';

const generateToken = (userId: string, res: Response) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET!, {
    expiresIn: '15d',
  });
  res.cookie('jwt', token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, //15 dias en milisegundos
    httpOnly: true, //previene XSS (Cross-Site Scripting)
    sameSite: 'strict', //previene ataques CSRF (Cross-Site Request Forgery)
    secure: process.env.NODE_ENV !== 'development', //solo en entornos de producción
  });
};

export default generateToken;

