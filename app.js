const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("AWS 測試程式！")
})


const port = process.env.port || 3000;

app.listen(port,()=>{
    console.log("連線中");
})