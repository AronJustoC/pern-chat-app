import { Request, Response } from "express";

export const login = (req: Request, res: Response) => {
  res.send('login is ok');
};

export const logout = (req: Request, res: Response) => {
  res.send('logout is ok');
};


export const signup = (req: Request, res: Response) => {
  res.send('signup is ok');
};
