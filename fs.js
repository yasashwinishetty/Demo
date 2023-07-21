//import fs module
const fs = require('fs');

//create
// fs.writeFile('sample.txt',"Hello im fs data",(error)=>{
//     if (error){
//         console.log(error);
//     }
//     console.log("file successfully created");
// });

//update

/*
fs.appendFile("sample1.txt", "append data",(error)=>{
    if (error){
        console.log(error);
    }
    console.log("file successfully updated");
});
*/

//read 
fs.readFile("index.html",(error,data) =>{
    if(error){
        console.log(erroe);
    }else{
        console.log(data.toString());
    }

});

/*
// delete
fs.unlink("sample1.txt",(error)=>{
    if (error){
        console.log(error);
    }
    console.log("file deleted ");
})
*/
