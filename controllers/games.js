
const sendAllGames = async (req,res) =>{
    res.send(req.games)
}
const sendUpdatedGame = async (req,res) => {
    res.send({
        games:req.games,
        updated:req.game
    })
}

module.exports = {
    sendAllGames,
    sendUpdatedGame,
}