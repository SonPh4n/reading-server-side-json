const express = require("express");
const app = express();

app.get('/',(req, res)=>{
    res.send("hello world");
});

app.get("/api/crafts", (req, res)=> {
});

app.listen(3000, () => {
    console.log("im listening");
});

