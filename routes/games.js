const gameRouter = require('express').Router();

//const getAllGames = async (req,res) =>{
    const games = await readData('./data/games.json')
    if (!games){
        res.status = 404;
        res.send({
            status: 'error',
            message:'Нет игр в базе данныхб добавьте игру'
        })
        return
    }
    res.games = games
    res.send(req.games)
}
const deleteGame = async (req,res) => {
const games = await readData('./data/games.json')
    if (!games){
        res.status = 404;
        res.send({
            status: 'error',
            message:'Нет игр в базе данныхб добавьте игру'
        })
        return
    }
    req.games = games

    const id = Number(req.params.id)

    req.game = req.games.find((item) => item.id === id)

    const index = req.games.findIndex((item) => item.id === req.game.id)

    req.games.splice(index,1)
    await writeData('./data/games.json', req.games)

    res.send({
        games:req.games,
        updated:
    })


}
const addGame = async (req,res) => {}

gameRouter.get('/games', getAllGames)

gameRouter.delete('/games/:id',deleteGame)

gameRouter.post('/games', addGame)

module.exports = gameRouter