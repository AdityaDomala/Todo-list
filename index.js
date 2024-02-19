// const http = require("http");               //getting details of http  --- These are old ways of doing things 
// const gfName = require("./features.js");     //file based modules     ----

// first we have created a external files and added info in it and then we have called it here using imports and displayed it using console
// console.log(gfName3);

import http from "http";            //  ---- New ways of doing things

// import gfName from "./features.js";         // --- New ways   
// import { gfName2, gfName3 } from "./features.js";

// import gfName, {gfName2, gfName3} from "./features.js"; //----- better way

import * as myObj from "./features.js";

console.log(myObj);

const server = http.createServer((req, res) => {    //creating a server and requesting and responing 
    //console.log(req.url);  // here console will not display because we didn't called the server
    // res.end("<h1>It is running</h1>"); // please respond at the end with heading 1 and display the stat
    if (req.url == "/"){
        res.end("<h1>Welcome to home page</h1>");
    }
    else if (req.url == "/about"){         // these codes are about server routing (manual)
        res.end("<h1>This is your about page</h1>");

    }
    else if (req.url == "/contact"){
        res.end("<h1>This is your contact page</h1>");

    }
    else{
        res.end("<h1>Page Not Found </h1>");
    }

});

server.listen(5000, () => {                  // creating a listening function and displaying it at 5000 (localhost)
    console.log("Server is working at 5000");
});

// modules are of three types 1 > built in module , 2 > third party module, 3 > file based module