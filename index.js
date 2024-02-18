const http = require("http");               //getting details of http

const server = http.createServer((req,res) => {    //creating a server and requesting and responing 
    console.log("req.url");      // here console will not display because we didn't called the server
})

server.listen(5000, ()=>{                  // creating a listening function and displaying it at 5000 (localhost)
    console.log("Server is working");
})