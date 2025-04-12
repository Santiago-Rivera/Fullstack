import express from 'express';
const app = express();
const port = 3000;

function logger(req, res, next) {
    console.log('Request method: ', req.method);
    console.log('Request url: ', req.url);
    next();
}

app.use(logger);

app.use((req, res, next) => {
    console.log('Request received:', req.method);
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});