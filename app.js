const express = require("express")
const path = require("path")
const app = express()
const port = 3000
app.use(express.static(path.join(__dirname,"/public")))
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"./views/index.html"));
})

app.get("/register",(req,res)=>{
    res.sendFile(path.join(__dirname,"./views/register.html"));
})

app.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname,"./views/login.html"));
})

app.listen(port,()=>{
    console.log(`escuchando el puerto ${port}`)
})