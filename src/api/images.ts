import dotenv from 'dotenv';
import { Request, Response } from 'express';
import fetch from 'node-fetch';
dotenv.config();

const apis = {
  key: process.env.KEY_PEXELS,
  url: `https://api.pexels.com/v1/search?query=pizza`,
};

export async function images(_req: Request, res: Response): Promise<void> {
  const response = await fetch(apis.url, {
    headers: { Authorization: apis.key || `` },
  });
  const result = await response.json();

  res.status(200).json(result);
}
