const {readData, writeData} = require("../utils/data/parse");
const getAllGames = async (req,res, next) =>{
    const games = await readData('./data/games.json')
    if (!games){
        res.status = 404;
        res.send({
            status: 'error',
            message:'Нет игр в базе данных, добавьте игру'
        })
        return
    }
    res.games = games
    next()
}

const checkIsTitleInArray = async (req,res, next) => {
    req.isNew = !Boolean(req.games.find(item => item.title === req.body.title))
    next()
}

const updateGamesArray = async (req, res, next) => {
    if (req.isNew){
        const inArray = req.games.map(item => Number(item.id))
        let maximalId
        if (inArray.length > 0) {
            maximalId = Math.max(...inArray)
        } else {
            maximalId = 0
        }
        req.updateObject = {
            id:maximalId + 1,
            title: req.body.title,
            image: req.body.image,
            link: req.body.link,
            description: req.body.description
        }
        req.games = [...req.games, req.updateObject]
        next()
    } else {
        res.status(400)
        res.end({status:"error", message: "Игра с таким именем уже есть."});
        return
    }
}

const updateGamesFile = async (req, res, next) => {
    await writeData("./data/games.json", req.games)
    next()
}

const findGameById = async (req, res, next) => {
    const id = Number(req.params.id)
    req.game = req.games.find((item) => item.id === id)
    next()
}

const deleteGame = async (req, res, next) => {
    const index = req.games.findIndex((item) => item.id === req.game.id)
    req.games.splice(index,1)
    next()
}

module.exports = {
    getAllGames,
    checkIsTitleInArray,
    updateGamesArray,
    updateGamesFile,
    findGameById,
    deleteGame
}