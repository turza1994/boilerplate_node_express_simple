import { Request, Response } from 'express';
import { signup, login } from '../services/authService.js';
import { SignupInput, LoginInput } from '../schemas/auth.js';

export async function signupController(req: Request, res: Response) {
  const { email, password }: SignupInput = req.body;
  
  const result = await signup(email, password);
  
  res.status(201).json({
    success: true,
    data: result,
  });
}

export async function loginController(req: Request, res: Response) {
  const { email, password }: LoginInput = req.body;
  
  const result = await login(email, password);
  
  res.json({
    success: true,
    data: result,
  });
}