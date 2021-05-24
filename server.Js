const express = require("express")
const router = require("./routes/books")
const db = require("./models");
const app = express()

app.use(express.json())
app.use("/books",router)

db.sequelize.sync().then(()=>{
    app.get("/",(req,res)=>{
        res.send("Hi")
    })
    app.listen(3000)

})

