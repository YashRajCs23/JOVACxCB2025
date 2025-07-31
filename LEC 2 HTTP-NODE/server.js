const http = require("http")

const server = http.createServer((req, res)=>{
    if(req.url === "/" && req.method === "GET"){
        res.end("home route")
    }
    if(req.url === "/about"){
        res.end("about page")
    }
   
})

    
server.listen(4000, ()=>{
    console.log("server is start");
})