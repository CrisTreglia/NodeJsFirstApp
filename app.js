const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello, world!')
});

//route controller with a path parameters
app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User with ID ${userId}`);
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});