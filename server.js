//import modules

//ES5 -- node
// const http = require('http');

// //es6  -- React
// import http from 'http';

//import 
const http = require('http');
const fs = require('fs');

// create a instance
let server = http.createServer((request, response) =>{
    fs.readFile("index.html",(error,data)=>{
        if(error){
            response.write("file not available")
        }
        else{
            response.write (data);
        }
        response.end();
    })
    // response.write ("<h1> hello im server instance </h1>");

})

/*
// add a port.
server.listen(3001,()=>{
    console.log("server running at ",3001);
})
*/
 // 3000 -- 5000

 //export
 //es5
    module.exports = server;
 //es6
//  export default server;