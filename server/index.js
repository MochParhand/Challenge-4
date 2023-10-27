const http = require("http");
const fs = require("fs");
const path = require("path");
const { log } = require('console');

const PORT = 3000;
const PUBLIC_DIRECTORY = path.join(__dirname, "../public");

function getHTML(filename){
    const htmlFile = path.join(PUBLIC_DIRECTORY, filename);
    return fs.readFileSync(htmlFile, "utf8");
}

function onRequest(req, res){
    switch (req.url){
        case "/":
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(getHTML("index.html"));
            break;

        case "/car":
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(getHTML("car.html"));
            break;

        default:
            
        const filePath = path.join(PUBLIC_DIRECTORY, req.url);
        fs.readFile(filePath, (err, data) => {
            if(err){
                res.setHeader("Content-Type", "text/html");
                res.writeHead(404);
                res.end(getHTML("404.html"));
            } else {
                res.writeHead(200);
                res.end(data);
            }
        });

        break;
    }
}

const server = http.createServer(onRequest);

server.listen(PORT, () => {
    console.log('Server is Listening on http://localhost:3000');
});