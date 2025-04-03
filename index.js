const express = require ('express')
const app = express()
const port = 1910;

app.get('/macario', (req,res)=>{
    res.send("Vai Corinthians")
})

app.listen(port,()=>{
    console.log("Pior que foi em")
})