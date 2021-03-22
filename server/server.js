'use strict';

const express = require('express');

// Constants
const PORT = process.env.PORT;

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Node JS Server is running!');
});

app.listen(PORT, ()  => {
    console.log(`Running on port ${PORT}`);
});