const express = require('express')
const app = express();

const PORT = 3000;

app.get('/',(req,res) =>{
    res.send('Hello world')
})

app.listen(3000,() =>{
    console.log(`Приложение запущено тут: http://localhost:${PORT}`)
})