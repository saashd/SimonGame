const {verifyTokenAndAuthorization} = require("./verifyToken");
const Game = require("../models/Game");
const router = require("express").Router();

//GET HIGHEST SCORE OF SPECIFIC USER
router.get("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const game = await Game.findOne({"uid": req.params.id}).sort({score: -1})
        res.status(200).json(game?game.score:0);
    } catch (err) {
        res.status(500).json(err);
    }
})


//GET 10 BEST HIGH SCORED GAMES
router.get("/", async (req, res) => {
    try {
        const games = await Game.find().sort({score: -1}).limit(10).populate('uid', 'username');
        const highScores = games.map(game => ({
            score: game.score,
            username: game.uid.username
        }));
        res.status(200).json(highScores);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;