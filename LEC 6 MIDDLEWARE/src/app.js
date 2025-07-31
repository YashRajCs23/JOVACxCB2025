const express = require("express")
const authRouter = require("../src/router/auth.router")
const app = express()


// /api/auth/
app.use((req, res, next)=>{
    console.log("request aayi aur middleware chala");
    next()
})


app.use("/api/auth", authRouter)
// app.use("/api/user", userRouter)


module.exports = app