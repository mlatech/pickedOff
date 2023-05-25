const express = require("express")
const app = express()
var middleware = require("./routes/middleware.js")


app.use("/search", middleware)

//get request 
app.get("/search", (req, res) => {
    req.body = {Date: "'Thursday May 25, 2023"}
    res.send(req.body)
    
    })

    app.listen(9000, ()=>{
        console.log("Server is running on port 9000")
    })
