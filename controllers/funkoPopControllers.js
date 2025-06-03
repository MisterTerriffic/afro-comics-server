const FunkPop = require("../models/funkoPopModel");
const { getComicBook } = require("./comicBookControllers");

const getAllFunkoPops = async (request, response, next) => {
  try {
    const funkPops = FunkPop;

    return response.status(200).json({
      success: {
        message: "List all of the Funko Pop firgures in the inventory.",
      },
      data: { funkPops },
    });
  } catch (error) {
    return next(error);
  }
};

const getFunkoPop = async (request, response, next) => {
  const { itemNumber } = request.params;

  try {
    if (!itemNumber) {
      throw new Error(
        "Item Number needed to find the comic, please try again."
      );
    }

    const funkoPop = FunkPop.findById(_id);

    if (!funkoPop) {
      throw new Error("Unable to find the Funko Pop.");
    }

    return response.status(200).json({
      success: { message: "Found" },
      data: { funkoPop },
    });
  } catch (error) {
    return next(error);
  }
};

const createFunkoPop = async (request, response, next) => {
  const { itemName, category, license, description, imageURL, price } =
    request.body;

  try {
    if (
      !itemName ||
      !category ||
      !license ||
      !description ||
      !imageURL ||
      !price
    ) {
      throw new error("Missing Data. Please enter again");
    }

    const newFunkoPop = {
      itemName,
      category,
      license,
      description,
      imageURL,
      price,
    };

    await newFunkoPop.save();

    return response.status(201).json({
      success: { message: "New funko pop created." },
      data: { newFunkoPop },
    });
  } catch (error) {
    return next(error);
  }
};

const updateFunkoPop = async (request, response, next) => {
  const { itemNumber } = request.params;

  const { itemName, category, license, description, imageURL, price } =
    request.body;

  try {
    if (
      !itemName ||
      !category ||
      !license ||
      !description ||
      !imageURL ||
      !price
    ) {
      throw new error("Missing Data. Please enter again");
    }

    const updatedFunkoPop = await FunkPop.findByIdAndUpdate(
      itemNumber,
      {
        $set: {
          itemName,
          category,
          license,
          description,
          imageURL,
          price,
        },
      },
      { new: true }
    );

    if (!updatedFunkoPop) {
      throw new Error("Funko Pop not found.");
    }

    return response.status(201).json({
      success: { message: "Funko pop updated." },
      data: { updatedFunkoPop },
    });
  } catch (error) {
    return next(error);
  }
};

const deleteFunkoPop = async (request, response, next) => {
  const { itemNumber } = request.params;

  try {
    if (!itemNumber) {
      throw new Error(
        "Item number needed to find the Funko Pop, please try again."
      );
    }

    await FunkPop.findByIdAndDelete(_id);

    return response.status(200).json({
      success: { message: "Funko Pop deleted." },
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getAllFunkoPops,
  getFunkoPop,
  createFunkoPop,
  updateFunkoPop,
  deleteFunkoPop,
};
