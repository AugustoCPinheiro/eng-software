import express, { json } from "express";
import cors from 'cors';

const app = express();

app.use(cors());
app.use(json());

app.listen(3000, () => {
  console.log(" Server started on http://localhost:3000");
});