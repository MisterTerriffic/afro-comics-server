const express = require("express");
const router = express.Router();

const {getAllComicBooks, getComicBook, createComicBook, updateComicBook, deleteComicBook} = require("../controllers/comicBookControllers");

router.get("/", getAllComicBooks);

router.get("/:_id", getComicBook);

router.post("/create/new", createComicBook);

router.put("/update/:_id", updateComicBook);

router.delete("/delete/:_id", deleteComicBook);

module.exports = router;