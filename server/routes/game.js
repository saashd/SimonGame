const Game = require("../models/Game");
const {
    verifyTokenAndAuthorization,
} = require("./verifyToken");
const router = require("express").Router();


//CREATE
router.post("/", async (req, res) => {
    const newGame = new Game(req.body);
    try {
        const savedGame = await newGame.save();
        res.status(200).json(savedGame);
    } catch (err) {
        res.status(500).json(err);
    }
});


//GET GAMES OF SPECIFIC USER
router.get("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const game = await Game.find({"uid": req.params.id})
        res.status(200).json(game);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;
