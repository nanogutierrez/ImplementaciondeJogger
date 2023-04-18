import express from 'express';
import { addLogger } from './utils/logger.js';

const app = express();

app.use(addLogger);

app.get('/', (req, res) => {
  // req.logger.warn('Hola mundo, esto es un warning');
  res.send('Bienvenido');
});

app.get('/warning', (req, res) => {
  req.logger.warn('Bienvenido, esto es un warning');
  req.logger.info('Bienvenido, esto es un info');
  res.send('Bienvenido warning');
});

app.listen(3000, () => console.log('Server running on port 3000'));

