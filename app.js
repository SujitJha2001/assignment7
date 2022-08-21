const fs = require("fs");
const http = require("http");

const path = "./Sujit/data.txt"

try {
  if (fs.existsSync(path)) {
    console.log("File exists.")
  
  } else {
    console.log("File does not exist.")
    fs.mkdir("Sujit",(err)=>{});
    fs.writeFile("./Sujit/data.txt","Hello my name is Sujit Jha.",(err)=>{});
    fs.appendFile("./Sujit/data.txt"," I have completed assignment 7  using Node JS.",(err)=>{});
  }
} catch(err) {
  console.error(err)
}

const data = fs.readFileSync("./Sujit/data.txt","utf-8");

const server = http.createServer((req,res)=>{
    res.end(data);
})

server.listen(5000,()=>{
    console.log("Server listening on 5000......");
})