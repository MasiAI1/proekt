const {sendAllGames, sendUpdatedGame} = require("../controllers/games")
const {getAllGames, checkIsTitleInArray, updateGamesArray, updateGamesFile, findGameById, deleteGame} = require('../middlewares/games')

const gameRouter = require('express').Router();

gameRouter.get('/games',getAllGames, sendAllGames)
gameRouter.delete('/games/:id',getAllGames,findGameById,deleteGame,updateGamesFile,sendUpdatedGame)
gameRouter.post('/games',getAllGames,checkIsTitleInArray,updateGamesArray,updateGamesFile,sendUpdatedGame)

module.exports = gameRouter