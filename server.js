                        //  Establishing the server.

const http = require('http'); // including node module

const hostname = '127.0.0.1' ; //defining a host name (in this this is Local Host)
const port = 3000; // defining a port to the server.

const server = http.createServer((request,response) => {
    response.statusCode = 200;
    response.setHeader('content-type','text/html');
    response.end('Hello world')
})

server.listen(port,hostname,() =>{
    console.log(`Server started on port ${port}`);
}
)


                                    //Handle files in server

// const http = require('http'); 
// const fileSystem = require('fs'); //incude file system option from node module

// const hostname = '127.0.0.1' ; 
// const port = 3000; 
// fileSystem.readFile('index.html', (error,html) => { // enter file name with it's type here
//     if(error){
//         throw error; 
//     }else{
//         const server = http.createServer((request,response) => {
//             response.statusCode = 200; 
//             response.setHeader('content-type','text/html'); //enter the correct file type
//             response.write(html) // display the file content
//             response.end()
//         })
        
//         server.listen(port,hostname,() =>{
//             console.log(`Server started on port ${port}`);
//         }
//         )
//     }
// })

                            //Handling Images

// const http = require('http'); 
// const fileSystem = require('fs'); 

// const hostname = '127.0.0.1' ;
// const port = 3000; 

// fileSystem.readFile('index.png', (error,image) => { // include image name with it's type(jpeg,png) here
//     if(error){
//         throw error;
//     }else{
//         const server = http.createServer((request,response) => {
//             response.statusCode = 200;
//             response.setHeader('content-type','image/png'); // include image type correctly here
//             response.write(image)
//             response.end()
//         })
        
//         server.listen(port,hostname,() =>{
//             console.log(`Server started on port ${port}`);
//         }
//         )
//     }
// })


