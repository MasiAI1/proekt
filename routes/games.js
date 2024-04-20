const {getAllGames, deleteGame, addGame} = require("../controllers/games")

const gameRouter = require('express').Router();

gameRouter.get('/games', getAllGames)

gameRouter.delete('/games/:id',deleteGame)

gameRouter.post('/games', addGame)

module.exports = gameRouter