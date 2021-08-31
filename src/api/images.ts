import dotenv from 'dotenv';
import { Request, Response } from 'express';
import fetch from 'node-fetch';
import { sha256 } from '../utils/crypto';
dotenv.config();

type api = {
  name: string;
  key: string;
  url: string;
  resultKeys: {
    count: string;
    results: string;
  };
};

const apis: api[] = [
  {
    name: 'Unsplash',
    key: process.env.KEY_UNSPLASH || '',
    url: `https://api.unsplash.com/search/photos?query=pizza`,
    resultKeys: {
      count: 'total',
      results: 'results',
    },
  },
  {
    name: 'Pexels',
    key: process.env.KEY_PEXELS || '',
    url: `https://api.pexels.com/v1/search?query=pizza`,
    resultKeys: {
      count: 'total_results',
      results: 'photos',
    },
  },
  {
    name: 'Pixabay',
    url: `https://pixabay.com/api/?key=${process.env.KEY_PIXABAY || ''}&q=pizza`,
    key: ``,
    resultKeys: {
      count: 'total',
      results: 'hits',
    },
  },
];

export async function images(_req: Request, res: Response): Promise<void> {
  try {
    const responses = await Promise.all(
      Array(apis.length)
        .fill(``)
        .map((_value, i) =>
          fetch(apis[i].url, {
            headers: apis[i].key ? { Authorization: apis[i].key } : {},
            timeout: 2000,
          })
        )
    );

    try {
      const results = await Promise.all(responses.map((response) => response.json()));
      const resultCounts = results.map((result, index) => {
        return {
          api: apis[index].name,
          resultCount: result[apis[index].resultKeys.count],
        };
      });
      res.status(200).json({ ...resultCounts, ...{ sha256: sha256('test') } });
    } catch (error) {
      res.status(503).json(error);
    }
  } catch {
    res.status(504).send('');
  }
}
