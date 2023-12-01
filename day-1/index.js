
// 200 - success
// 300 - redirection
// 400 - clint side error or user side error
// 500 - server side error 



// demo server (http - library to create http server for APIs in node.js)

// server creating
// const http = require("http");  //importing http library (default library) 
// const { url } = require("inspector");  or const url = require("url"),


// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.end("hello world")
//     console.log('URL:', req.url);
// });


// server.listen(4000,() => {
// console.log("app is running in the port no 4000")
// });






// example server 


const http = require("http");
const url = require("url")

const server = http.createServer((req,res) => {
    const pathname = url.parse(req.url).pathname

    if(req.method === "GET") {
        if(pathname === "/user") {
        res.statusCode = 200;
        res.end(
            JSON.stringify({
                name:"vijay",
                email:"vijay@gmail.com",
                city:"covai",
            })
        );
    } else {
        res.statusCode = 200;
        res.end("hello world")
    }
}
});

server.listen(4000, () => {
    console.log("app is running at 4000")
});