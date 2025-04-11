import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/about', (req, res) => {
    res.send('About this site!');
});

app.get('/contact', (req, res) => {
    res.send('Contact us here!');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});