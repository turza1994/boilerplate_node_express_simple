import { Request, Response } from 'express';
import { getSampleItem, incrementSampleItemCounterAtomic, incrementSampleItemCounterWithLock } from '../services/sampleService.js';
import { UpdateSampleItemInput } from '../schemas/sample.js';

export async function getSampleItemController(req: Request, res: Response) {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid ID',
    });
  }

  const item = await getSampleItem(id);
  
  res.json({
    success: true,
    data: item,
  });
}

export async function updateSampleItemController(req: Request, res: Response) {
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

export async function updateSampleItemWithLockController(req: Request, res: Response) {
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