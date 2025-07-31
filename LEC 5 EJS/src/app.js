const express = require("express")
const path = require("path")

const userRouter = require("./routes/user.routes")

const app = express()


// FOR BODY DATA
app.use(express.json())
app.use(express.urlencoded({extended : true}))

// FOR PUBLIC FOLDER TO ACCESS 
app.use(express.static(path.join(__dirname,"../public")))

// FOR EJS SETUP 
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

app.use("/",userRouter)


module.exports = app