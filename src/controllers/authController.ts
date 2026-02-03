import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { signup, login } from '../services/authService.js';
import { SignupInput, LoginInput } from '../schemas/auth.js';

export const signupController = asyncHandler(
  async (req: Request, res: Response) => {
    const { email, password }: SignupInput = req.body;

    const result = await signup(email, password);

    res.status(201).json({
      success: true,
      data: result,
    });
  }
);

export const loginController = asyncHandler(
  async (req: Request, res: Response) => {
    const { email, password }: LoginInput = req.body;

    const result = await login(email, password);

    res.json({
      success: true,
      data: result,
    });
  }
);
