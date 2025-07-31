const express = require("express")

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.post("/", (req ,res)=>{
    // const {name} = req.query
    console.log("query wala data", req.query);
    console.log(" ");
    
    console.log("body wala data :",req.body);
    
    res.send("body me data aa rha hai")
})

app.get("/about", (req, res)=>{
    console.log(req.query);
    
    res.send("query wala data")
})
// 
app.get("/about/:name", (req, res)=>{
    const name = req.params.name
    res.send(`params me ${name} name aa rha hai`)
    
})

module.exports = app