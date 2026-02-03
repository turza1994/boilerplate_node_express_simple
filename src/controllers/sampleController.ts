import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import {
  getSampleItem,
  incrementSampleItemCounterAtomic,
  incrementSampleItemCounterWithLock,
} from '../services/sampleService.js';
import { UpdateSampleItemInput } from '../schemas/sample.js';

export const getSampleItemController = asyncHandler(
  async (req: Request, res: Response): Promise<any> => {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid ID',
      });
    }

    const item = await getSampleItem(id);

    return res.json({
      success: true,
      data: item,
    });
  }
);

export const updateSampleItemController = asyncHandler(
  async (req: Request, res: Response): Promise<any> => {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid ID',
      });
    }

    const { counter }: UpdateSampleItemInput = req.body;
    const increment = counter > 0 ? counter : 1;

    const item = await incrementSampleItemCounterAtomic(id, increment);

    res.json({
      success: true,
      data: item,
    });
  }
);

export const updateSampleItemWithLockController = asyncHandler(
  async (req: Request, res: Response): Promise<any> => {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid ID',
      });
    }

    const { counter }: UpdateSampleItemInput = req.body;
    const increment = counter > 0 ? counter : 1;

    const item = await incrementSampleItemCounterWithLock(id, increment);

    res.json({
      success: true,
      data: item,
    });
  }
);
