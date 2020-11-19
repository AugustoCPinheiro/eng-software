import express, { json } from 'express';
import cors from 'cors';
import Routes from './routes/Routes';

const app = express();

app.use(cors());
app.use(json());
app.use(Routes.router);
app.listen(3000, () => {
  console.log(' Server started on http://localhost:3000');
});