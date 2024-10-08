import express from 'express';
const PORT = 8000;
const app = express();

app.get('/',(req,res)=>{
    res.send ("Hello")
})

app.listen(PORT)