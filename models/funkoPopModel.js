const mongoose = require("mongoose");
const { Schema } = mongoose;

const funkoPopSchema = new Schema({
    itemName: {
        type: String,
        required: true,
        trim: true,
    },
    category: {
        type: String,
        required: true,
    },
    license: {
        type: String,
        required: true,
    },
    description: {
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
        min:.01,
    }
});

const FunkoPop = mongoose.model("FunkoPop", funkoPopSchema);

module.exports = FunkoPop;