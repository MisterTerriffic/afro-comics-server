const express = require("express");
const router = express.Router();

const { getAllFunkoPops, getFunkoPop, createFunkoPop, updateFunkoPop, deleteFunkoPop} = require("../controllers/funkoPopControllers");

router.get("/", getAllFunkoPops);

router.get("/:_id", getFunkoPop);

router.post("/create/new", createFunkoPop);

router.put("/update/:_id", updateFunkoPop);

router.delete("/delete/:_id", deleteFunkoPop);

module.exports = router;