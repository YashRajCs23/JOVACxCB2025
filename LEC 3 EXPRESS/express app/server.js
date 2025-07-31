const app = require("./src/app")
const connect = require("./src/db/db")

const PORT = 4000


app.listen(PORT, ()=>{
    connect()
    console.log(`server started on port no : ${PORT}`);
    
})