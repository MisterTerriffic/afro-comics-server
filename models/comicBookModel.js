const mongoose = require("mongoose");
const { Schema } = mongoose;

const comicBookSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    }
});

const ComicBook = mongoose.model("ComicBook", comicBookSchema);

module.exports = ComicBook;