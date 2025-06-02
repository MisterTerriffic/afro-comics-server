const express = require("express");
const router = express.Router();

const {getAllGraphicNovels, getGraphicNovel, createGraphicNovel, updateGraphicNovel, deleteGraphicNovel} = require("../controllers/graphicNovelController");

router.get("/", getAllGraphicNovels);

router.get("/:_id", getGraphicNovel);

router.post("/create/new", createGraphicNovel);

router.put("/update/:_id", updateGraphicNovel);

router.delete("/delete/:_id", deleteGraphicNovel);