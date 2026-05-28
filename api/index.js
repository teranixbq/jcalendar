const express = require('express');
const cors = require('cors');
const { routeAPI } = require('./route/route');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.use('/', routeAPI);

app.listen(port, () => {
    console.log(`Server berjalan pada http://localhost:${port}`);
});