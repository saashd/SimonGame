const mongoose = require("mongoose");
const {Schema} = require("mongoose");

const GameSchema = new mongoose.Schema(
    {
        uid: {type: Schema.Types.ObjectId, ref: "User"},
        score: {type: Number, required: true},
        sequence: {type: [[String]], required: true},
    },
    {timestamps: true}
);

module.exports = mongoose.model("Game", GameSchema);
