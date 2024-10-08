const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


const port = process.env.PORT || 3002;

app.listen(port, () => console.log(`Server is running on port ${port}`));
