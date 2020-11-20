const cors = require('cors');
const express = require('express');
const { json } = require('express');
const Routes = require('./routes/Routes');

const app = express();

app.use(cors());
app.use(json());
app.use(Routes.router);

app.listen(3000, () => {
  console.log(' Server started on http://localhost:3000');
});
