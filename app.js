const express = require('express');
const userRoute = require('./routes/users.js');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', './views');


app.use(express.static('public'));
app.use(userRoute);


app.listen(PORT, () => {
    console.log(`Connected on http://localhost:${PORT}`);
});