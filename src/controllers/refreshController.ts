import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { refreshToken } from '../services/authService.js';
import { RefreshTokenInput } from '../schemas/auth.js';

export const refreshTokenController = asyncHandler(
  async (req: Request, res: Response) => {
    const { refreshToken: refreshTokenString }: RefreshTokenInput = req.body;

    const result = await refreshToken(refreshTokenString);

    res.json({
      success: true,
      data: result,
    });
  }
);
