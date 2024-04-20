const {readData, writeData} = require("../utils/data/parse");
const sendAllGames = async (req,res) =>{
    res.send(req.games)
}
const deleteGame = async (req,res) => {

    const id = Number(req.params.id)

    req.game = req.games.find((item) => item.id === id)

    const index = req.games.findIndex((item) => item.id === req.game.id)

    req.games.splice(index,1)

    res.send({
        games:req.games,
        updated:req.game
    })


}
const addGame = async (req,res) => {
    res.send({
        games: req.games,
        updated: req.updateObject
    })
}


module.exports = {
    sendAllGames,
    deleteGame,
    addGame
}