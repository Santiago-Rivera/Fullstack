import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/register', (req, res) => {
    res.sendStatus(201);
});

app.post('/register', (req, res) => {
    //Do something with the data
    res.sendStatus(201);
});

app.put('/user/santiago', (req, res) => {
    res.sendStatus(200);
});

app.patch('/user/santiago', (req, res) => {
    res.sendStatus(200);
});

app.delete('/user/santiago', (req, res) => {
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});