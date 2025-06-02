const mongoose = require("mongoose");
const { Schema } = mongoose;

const graphicNovelSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
     author: {
        type: String,
        required: true,
        trim: true,
    },
    artist: {
        type: String,
    },
    publisher: {
        type: String,
        required: true,
    },
    about: {
        type: String,
        required: true,
    },
    imageURL: {
        type: String,
        required: true,
    },
      price: {
        type: Number,
        required: true,
        min:.99,
    }
});

const GraphicNovel = mongoose.model("GraphicNovel", graphicNovelSchema);

module.exports = GraphicNovel;