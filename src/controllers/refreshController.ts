import { Request, Response } from 'express';
import { refreshToken } from '../services/authService.js';
import { RefreshTokenInput } from '../schemas/auth.js';

export async function refreshTokenController(req: Request, res: Response) {
  const { refreshToken: refreshTokenString }: RefreshTokenInput = req.body;
  
  const result = await refreshToken(refreshTokenString);
  
  res.json({
    success: true,
    data: result,
  });
}