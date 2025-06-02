const GraphicNovel = require("../models/graphicNovelModel");

const getAllGraphicNovels = async (request, response, next) => {
  try {
    const graphicNovel = GraphicNovel;

    return response.status(200).json({
      success: { message: "List all of the Graphic Novels in the inventory" },
      data: { graphicNovel },
    });
  } catch (error) {
    return next(error);
  }
};

const getGraphicNovel = async (request, response, next) => {
  const { _id } = request.params;

  try {
    if (!_id) {
      throw new Error("Id needed to find the graphic novel, please try again.");
    }

    const graphicNovel = GraphicNovel.findById(_id);

    if (!graphicNovel) {
      throw new Error("Unable to find graphic novel.");
    }

    return response.status(200).json({
      success: { message: "Found" },
      data: { comicBook },
    });
  } catch (error) {
    return next(error);
  }
};

const createGraphicNovel = async (request, response, next) => {
  const { title, author, artist, publisher, about, imageURL, price } = request.body;

  try {
    if (!title || !author || !publisher || !about || !imageURL || !price) {
      throw new error("Missing Data. Please enter again");
    }

    const newGraphicNovel = {
      title,
      author,
      artist,
      publisher,
      about,
      imageURL,
      price,
    };

    await newGraphicNovel.save();

    return response.status(201).json({
      success: { message: "New graphic novel." },
      data: { newGraphicNovel },
    });
  } catch (error) {
    return next(error);
  }
};

const updateGraphicNovel = async (request, response, next) => {
  const { _id } = request.params;

  const { title, author, artist, publisher, about, imageURL } = request.body;

  try {
    if (!title || !author || !publisher || !about || !imageURL) {
      throw new error("Missing Data. Please enter again");
    }

    const updatedGraphicNovel = await Book.findByIdAndUpdate(
      _id,
      {
        $set: {
          title,
          author,
          artist,
          publisher,
          about,
          imageURL,
          price,
        },
      },
      { new: true }
    );

    if (!updatedGraphicNovel) {
      throw new Error("Graphic Novel not found.");
    }

    return response.status(201).json({
      success: { message: "Graphic Novel updated." },
      data: { updateGraphicNovel },
    });
  } catch (error) {
    return next(error);
  }
};

const deleteGraphicNovel = async (request, response, next) => {
  const { _id } = request.params;

  try {
    if (!_id) {
      throw new Error("Id needed to find the graphic novel, please try again.");
    }

    await GraphicNovel.findByIdAndDelete(_id);

    return response.status(200).json({
      success: { message: "Graphic novel deleted." },
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = {getAllGraphicNovels, getGraphicNovel, createGraphicNovel, updateGraphicNovel, deleteGraphicNovel};