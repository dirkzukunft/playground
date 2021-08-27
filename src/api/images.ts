import dotenv from 'dotenv';
import { Request, Response } from 'express';
import fetch from 'node-fetch';
dotenv.config();

const apis = [
  {
    key: process.env.KEY_UNSPLASH,
    url: `https://api.unsplash.com/search/photos?query=pizza`,
    resultKeys: {
      count: 'total',
      results: 'results',
    },
  },
  {
    key: process.env.KEY_PEXELS,
    url: `https://api.pexels.com/v1/search?query=pizza`,
    resultKeys: {
      count: 'total_results',
      results: 'photos',
    },
  },
  {
    url: `https://pixabay.com/api/?key=${process.env.KEY_PIXABAY}&q=pizza`,
    resultKeys: {
      count: 'total',
      results: 'hits',
    },
  },
];

export async function images(_req: Request, res: Response): Promise<void> {
  const api = apis[2];
  try {
    const response = await fetch(api.url, {
      headers: { Authorization: api.key || `` },
      timeout: 2000,
    });
    try {
      const result = await response.json();
      const resultsCount = result[api.resultKeys.count];
      res.status(200).json(resultsCount);
    } catch {
      res.status(503).send('');
    }
  } catch {
    res.status(504).send('');
  }
}
