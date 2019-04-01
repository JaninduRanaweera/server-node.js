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


                                    //Handle files in server

// const http = require('http'); // including node module
// const fileSystem = require('fs'); //incude file system option from node module

// const hostname = '127.0.0.1' ; //defining a host name (in this this is Local Host)
// const port = 3000; // defining a port to the server.

// fileSystem.readFile('index.html', (error,html) => {
//     if(error){
//         throw error;
//     }else{
//         const server = http.createServer((request,response) => {
//             response.statusCode = 200;
//             response.setHeader('content-type','text/html');
//             response.write(html)
//             response.end()
//         })
        
//         server.listen(port,hostname,() =>{
//             console.log(`Server started on port ${port}`);
//         }
//         )
//     }
// })

