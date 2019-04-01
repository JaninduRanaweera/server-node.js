const http = require('http'); // including node module

const hostname = '127.0.0.1' ; //defining a host name (in this this is Local Host)
const port = 3000; // defining a port to the server.

const server = http.createServer((request,response) => {
    response.statusCode = 200;
    response.setHeader('content-type','text/plain');
    response.end('Hello world')
})

server.listen(port,hostname,() =>{
    console.log(`Server started on port ${port}`);
}
)