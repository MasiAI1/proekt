const express = require('express')
const bodyParser = require('body-parser')

const path = require('path')

const mainRouter = require('./routes/main')
const gameRouter = require('./routes/games')
const cors = require('./middlewares/cors')

const PORT = 3000;
const app = express();


app.use(
    cors,
    bodyParser.json(),
    express.static(path.join(__dirname, 'public')),
    mainRouter,
    gameRouter
)

app.listen(3000,() =>{
    console.log(`Приложение запущено тут: http://localhost:${PORT}`)
})