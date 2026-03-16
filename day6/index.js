import http from 'http';

const port = 8000;

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.end("Home Page");
    }

    else if (req.url === '/login') {
        let body = '';

        req.on('data', (chunk) => {
            body += chunk.toString();
        });

        req.on('end', () => {
            console.log(body);
            res.end('Login successful');
        });
    }

    else {
        res.end("Page not found");
    }

});

server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});