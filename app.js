const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const fs = require('fs').promises
const path = require('path')
const mainRouter = require('./routes/main')
const gameRouter = require('./routes/games')

const PORT = 3000;


app.use(
    bodyParser.json(),
    express.static(path.join(__dirname, 'public')),
    mainRouter,
    gameRouter
)

app.listen(3000,() =>{
    console.log(`Приложение запущено тут: http://localhost:${PORT}`)
})