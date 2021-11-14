import dotenv from 'dotenv';
import express from 'express';
import { images } from './api/images';
import quickSort from './stuff/algos/quickSort';
dotenv.config();

const port = process.env.EXPRESS_PORT || 3001;
const app = express();
app.use(express.json());
app.disable('x-powered-by');

// app.use('/storybook', express.static('dist/storybook'));
app.use(express.static('dist/app'));

app.get('/api/images', async (req, res) => {
  await images(req, res);
});

app.get('/api/', async (_req, res) => {
  res.status(200).json({ message: 'API is running' });
});

app.listen(port, async () => {
  // console.log(`Listening at http://localhost:${port}`);
  // console.log(`Storybook is at http://localhost:${port}/storybook`);
});

// ---------------------------------------------------------
// const a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// const a = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
const a = [12, 8, 3, 9, 7, 4, 87, 0, -17, 33, 5];

// console.log(binarySearch(a, 7));

// selectionSort(a);
// console.log(a);

// console.log(insertionSort(a));

// console.log(mergeSort(a));

quickSort(a);
console.log(a);
