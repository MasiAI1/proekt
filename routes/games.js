const {deleteGame, addGame, sendAllGames} = require("../controllers/games")
const {getAllGames, checkIsTitleInArray, updateGamesArray, updateGamesFile} = require('../middlewares/games')

const gameRouter = require('express').Router();

gameRouter.get('/games',getAllGames, sendAllGames)

gameRouter.delete('/games/:id',getAllGames,updateGamesFile,deleteGame)

gameRouter.post('/games',getAllGames,checkIsTitleInArray,updateGamesArray,updateGamesFile, addGame)

module.exports = gameRouter