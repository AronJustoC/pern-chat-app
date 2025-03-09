import e, { Request, Response } from "express";
import prisma from "../db/prisma.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";

export const signup = async (req: Request, res: Response) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
    if (!fullName || !username || !password || !confirmPassword || !gender) {
      return res.status(400).json({ error: 'All fields are required' });
    };
    if (password !== confirmPassword) {
      return res.status(400).json({ error: 'Passwords do not match' });
    };

    const user = await prisma.user.findUnique({ where: { username } });
    if (user) {
      return res.status(400).json({ error: 'Username already exists' });
    };

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const boyProfilePic = `https://avatar-placeholder.iran.liara.run/public/avatars/boy?username=${username}`;
    const girlProfilePic = `https://avatar-placeholder.iran.liara.run/public/avatars/girl?username=${username}`;

    const newUser = await prisma.user.create({
      data: {
        fullName,
        username,
        password: hashedPassword,
        gender,
        profilePic: gender === 'male' ? boyProfilePic : girlProfilePic,
      }
    });

    if (newUser) {
      // Generamos un token de sesión
      generateToken(newUser.id, res);

      return res.status(201).json({
        id: newUser.id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    } else {
      return res.status(400).json({ error: 'Invalid user data' });
    };
  } catch (error: any) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  };
};

export const login = (req: Request, res: Response) => {
  res.send('login is ok');
};

export const logout = (req: Request, res: Response) => {
  res.send('logout is ok');
};


