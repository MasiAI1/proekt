const express = require('express')
const app = express();
const fs = require('fs').promises
const path = require('path')

const PORT = 3000;

app.get('/', (req,res) =>{
        fs.readFile('./public/index.html', 'utf-8').then((data) => {
            res.header('Content-Type', 'text/html');
            res.send(data)
        })
})

app.use(express.static(path.join(__dirname, 'public')))

app.listen(3000,() =>{
    console.log(`Приложение запущено тут: http://localhost:${PORT}`)
})