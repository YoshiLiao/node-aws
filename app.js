const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("AWS 測試程式！")
})

app.listen(3000,()=>{
    console.log("連線中");
})