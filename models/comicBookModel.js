const mongoose = require("mongoose");
const { Schema } = mongoose;

const comicBookSchema = new Schema({
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
    published: {
        type: String,
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

const ComicBook = mongoose.model("ComicBook", comicBookSchema);

module.exports = ComicBook;