import express from 'express';
import bodyParser from 'body-parser';
import { config } from './config';

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res): void => {
  res.send('hello world');
});

app.listen(config.PORT, (): void => {
  // tslint:disable-next-line:no-console
  console.log(`Server started on http://localhost:${ config.PORT }`);
});


