// lib/app.ts
import express	= require('express');
const path		= require('path');

// Create a new express application instance
const app: express.Application = express();

app.use('/', express.static(path.join(__dirname, './public')));

app.listen(process.env.PORT || 5000, function () {
  console.log('Example app listening on port:', process.env.PORT || 5000);
});